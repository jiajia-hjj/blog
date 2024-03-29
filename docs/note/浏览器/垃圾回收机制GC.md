---
title: 垃圾回收机制(GC)
tags:
  - 浏览器
categories:
  - 浏览器
---


## 一、垃圾产生&为何回收

+ 定义的对象，没有了引用关系，也就是无用的对象，这个时候假如任由它搁置，一个两个还好，多了的话内存也会受不了，所以就需要被清理（回收）

+ 程序的运行需要内存，只要程序提出要求，操作系统或者运行时就必须提供内存，那么对于持续运行的服务进程，必须要及时释放内存，否则，内存占用越来越高，轻则影响系统性能，重则就会导致进程崩溃

## 二、垃圾回收策略

+ **可达性**，就是那些以某种方式可访问或者说可用的值，它们被保证存储在内存中，反之不可访问则需回收

+ **JavaScript 垃圾回收机制**的原理：说白了也就是定期找出那些不再用到的内存（变量），然后释放其内存。
+ 为什么不是实时的找出无用内存并释放呢？因为实时开销太大了。

## 三、标记清除算法

+ 标记阶段即为所有活动对象做上标记，清除阶段则把没有标记（也就是非活动对象）销毁

**标记清除算法大致过程：**

- 垃圾收集器在运行时会给内存中的所有变量都加上一个标记，假设内存中所有对象都是垃圾，全标记为0
- 然后从各个根对象开始遍历，把不是垃圾的节点改成1
- 清理所有标记为0的垃圾，销毁并回收它们所占用的内存空间
- 最后，把所有内存中对象标记修改为0，等待下一轮垃圾回收

**优点**

+ 标记清除算法的优点只有一个，那就是实现比较简单，打标记也无非打与不打两种情况，这使得一位二进制位（0和1）就可以为其标记，非常简单

**缺点**

+ **内存碎片化**，剩余的对象内存位置是不变的,空闲内存块是不连续的，容易出现很多空闲内存块，还可能会出现分配所需内存过大的对象时找不到合适的块

+ **分配速度慢**，因为即便是使用 `First-fit` 策略，其操作仍是一个 `O(n)` 的操作，最坏情况是每次都要遍历到最后，同时因为碎片化，大对象的分配效率会更慢。




**标记整理（Mark-Compact）算法** 

+ 它的标记阶段和标记清除算法没有什么不同，只是标记结束后，标记整理算法会将活着的对象（即不需要清理的对象）向内存的一端移动，最后清理掉边界的内存

## 四、引用计数算法

- 它把**对象是否不再需要**简化定义为**对象有没有其他对象引用到它**。如果没有引用指向该对象（引用计数为 0），对象将被垃圾回收机制回收。

它的策略是跟踪记录每个变量值被使用的次数

- 当声明了一个变量并且将一个引用类型赋值给该变量的时候这个值的引用次数就为 1
- 如果同一个值又被赋给另一个变量，那么引用数加 1
- 如果该变量的值被其他的值覆盖了，则引用次数减 1
- 当这个值的引用次数变为 0 的时候，说明没有变量在使用，这个值没法被访问了，回收空间，垃圾回收器会在运行的时候清理掉引用次数为 0 的值占用的内存

```js
let a = new Object() 	// 此对象的引用计数为 1（a引用）
let b = a 		// 此对象的引用计数是 2（a,b引用）
a = null  		// 此对象的引用计数为 1（b引用）
b = null 	 	// 此对象的引用计数为 0（无引用）
...			// GC 回收此对象
```

### 循环引用

```js
function test(){
  let A = new Object()
  let B = new Object()
  
  A.b = B
  B.a = A
}

```

+ 对象 A 和 B 通过各自的属性相互引用着，按照上文的引用计数策略，它们的引用数量都是 2
+ 但是，在函数 `test` 执行完成之后，对象 A 和 B 是要被清理的，被赋值为null，但使用引用计数则不会被清理，因为它们的引用数量不会变成 0，假如此函数在程序中被多次调用，那么就会造成大量的内存不会被释放。

+ 我们再用标记清除的角度看一下，当函数结束后，两个对象都不在作用域中，A 和 B 都会被当作非活动对象来清除掉，相比之下，引用计数则不会释放，也就会造成大量无用内存占用，这也是后来放弃引用计数，使用标记清除的原因之一

**优点**

+ 引用计数在引用值为 0 时，也就是在变成垃圾的那一刻就会被回收，所以它可以立即回收垃圾，而标记清除算法需要每隔一段时间进行一次，那在应用程序（JS脚本）运行过程中线程就必须要暂停去执行一段时间的 `GC`。
+ 另外，标记清除算法需要遍历堆里的活动以及非活动对象来清除，而引用计数则只需要在引用时计数就可以了

**缺点**

+ 首先它需要一个计数器，而此计数器需要占很大的位置，因为我们也不知道被引用数量的上限
+ 无法解决循环引用无法回收的问题

## 五、V8对GC的优化

V8 的垃圾回收机制也是基于标记清除算法，不过对其做了一些优化。

- 针对新生区采用并行回收。
- 针对老生区采用增量标记与惰性回收。

### 5.1.分代式垃圾回收

- V8 中将堆内存分为新生代和老生代两区域
- 新生代的对象为存活时间较短的对象，简单来说就是新产生的对象，通常只支持 `1～8M` 的容量
- 老生代的对象为存活事件较长或常驻内存的对象，简单来说就是经历过新生代垃圾回收后还存活下来的对象，容量通常比较大

**新生代垃圾回收**

+  使用区和空闲区

+ 当开始进行垃圾回收时，新生代垃圾回收器会对使用区中的活动对象做标记
+ 标记完成之后将使用区的活动对象复制进空闲区并进行排序
+ 随后进入垃圾清理阶段，即将非活动对象占用的空间清理掉
+ 最后进行角色互换，把原来的使用区变成空闲区，把原来的空闲区变成使用区

+ 当一个对象经过多次复制后依然存活，它将会被认为是生命周期较长的对象，随后会被移动到老生代中，采用老生代的垃圾回收策略进行管理
+ 一个对象到空闲区时，空闲区空间占用超过了 25%，被直接晋升到老生代空间中

**老生代垃圾回收**

+ 标记清除算法
+ 标记阶段，从一组根元素开始，递归遍历这组根元素，遍历过程中能到达的元素称为活动对象，没有到达的元素就可以判断为非活动对象
+ 清除阶段，老生代垃圾回收器会直接将非活动对象，也就是数据清理掉

**为什么需要分代式？**

+ 分代式机制把一些新、小、存活时间短的对象作为新生代，采用一小块内存频率较高的快速清理
+ 而一些大、老、存活时间长的对象作为老生代，使其很少接受检查，新老生代的回收机制及频率是不同的，可以说此机制的出现很大程度提高了垃圾回收机制的效率

### 5.2.并行回收(Parallel)

+ **全停顿**： `JavaScript` 是一门单线程的语言，垃圾回收时就会阻塞 `JavaScript` 脚本的执行行，需等待垃圾回收完毕后再恢复脚本执行。
+ **并行**：它指的是垃圾回收器在主线程上执行的过程中，开启多个辅助线程，同时执行同样的回收工作。
+ **新生代对象空间就采用并行策略**，在执行垃圾回收的过程中，会启动了多个线程来负责新生代中的垃圾清理操作，这些线程同时将对象空间中的数据移动到空闲区域，这个过程中由于数据地址会发生改变，所以还需要同步更新引用这些对象的指针，此即并行回收



### 5.3.增量标记与懒性清理

+ 对于这些大的对象 `GC` 时哪怕我们使用并行策略依然可能会消耗大量时间
+ **增量**就是将一次 `GC` 标记的过程，分成了很多小步，每执行完一小步就让应用逻辑执行一会儿，这样交替多次后完成一轮 `GC` 标记

+ **懒性清理：**假如当前的可用内存足以让我们快速的执行代码，其实我们是没必要立即清理内存的，可以将清理过程稍微延迟一下，让 `JavaScript` 脚本代码先执行，也无需一次性清理完所有非活动对象内存，可以按需逐一进行清理直到所有的非活动对象内存都清理完毕，后面再接着执行增量标记。

**优点**

+ 主线程的停顿时间大大减少了，让用户与浏览器交互的过程变得更加流畅

**缺点**

+ 并没有减少主线程的总暂停的时间，甚至会略微增加
+ 其次由于写屏障机制的成本，增量标记可能会降低应用程序的吞吐量(单位时间存储事务的数量)

### 5.4.并发回收

+ 并行回收依然会阻塞主线程，增量标记同样有增加了总暂停时间、降低应用程序吞吐量两个缺点

+ **并发回收：**主线程在执行 `JavaScript` 的过程中，辅助线程能够在后台完成执行垃圾回收的操作，辅助线程在执行垃圾回收的时候，主线程也可以自由执行而不会被挂起
+ 难点：主线程在执行 `JavaScript `时，堆中的对象引用关系随时都有可能发生变化，这时辅助线程之前做的一些标记或者正在进行的标记就会要有所改变，所以它需要额外实现一些读写锁机制来控制这一点

### 5.4.再说V8中GC优化

新生代垃圾回收器---并行回收

老生代垃圾回收器----这几种策略都是融合使用的

+ 主要使用并发标记，主线程在开始执行 `JavaScript` 时，辅助线程也同时执行标记操作（标记操作全都由辅助线程完成）

+ 标记完成之后，再执行并行清理操作（主线程在执行清理操作时，多个辅助线程也同时执行清理操作）

+ 同时，清理的任务会采用增量的方式分批在各个 `JavaScript` 任务之间执行



> 转自：
>
> [「硬核JS」你真的了解垃圾回收机制吗](https://juejin.cn/post/6981588276356317214))


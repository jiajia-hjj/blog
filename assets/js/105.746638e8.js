(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{728:function(s,t,a){"use strict";a.r(t);var n=a(18),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"为何说typescript在前端领域中越来越重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何说typescript在前端领域中越来越重要"}},[s._v("#")]),s._v(" 为何说TypeScript在前端领域中越来越重要")]),s._v(" "),a("p",[s._v("原因，JavaScript自身存在类型系统不足的问题，在长周期开发的大型项目中，有很多的隐患。")]),s._v(" "),a("h2",{attrs:{id:"一、强类型与弱类型-从类型安全的角度划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、强类型与弱类型-从类型安全的角度划分"}},[s._v("#")]),s._v(" 一、强类型与弱类型（从类型安全的角度划分）")]),s._v(" "),a("p",[s._v("区别：是否能够隐式类型转换")]),s._v(" "),a("ul",[a("li",[s._v("强类型会在语言层面限制函数的实参类型必须与形参类型相同，而弱类型在语言层面不会限制实参的类型。")]),s._v(" "),a("li",[s._v("即强类型语言中不允许任意的隐式类型转换，而弱类型语言则允许任意的隐式类型转换。")]),s._v(" "),a("li",[s._v("变量类型允许随时改变的特点，不是强弱类型的差异。如python是强类型语言，它的变量可以随时改变。")])]),s._v(" "),a("h2",{attrs:{id:"二、静态类型与动态类型-从类型检查的角度划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、静态类型与动态类型-从类型检查的角度划分"}},[s._v("#")]),s._v(" 二、静态类型与动态类型 （从类型检查的角度划分）")]),s._v(" "),a("p",[s._v("区别：是否能够随时改变变量类型")]),s._v(" "),a("ul",[a("li",[s._v("静态类型：一个变量声明时它的类型就是明确的，声明过后，它的类型就不允许再修改。")]),s._v(" "),a("li",[s._v("动态类型：运行阶段才能够明确变量类型，而且变量的类型随时可以改变。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nfoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//ok")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("动态类型语言中的变量没有类型，而变量中所存放的值是有类型的，"),a("strong",[s._v("js就是标准的动态类型语言")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"三、javascript自有类型系统的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、javascript自有类型系统的问题"}},[s._v("#")]),s._v(" 三、JavaScript自有类型系统的问题")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("弱类型")]),s._v("且"),a("strong",[s._v("动态类型")])]),s._v(" "),a("li",[s._v("js是脚本语言，没有编译环节")]),s._v(" "),a("li",[s._v("小应用就很方便，但如今js已大规模运用，所以这种优势就成了短板。")])]),s._v(" "),a("p",[a("strong",[s._v("1、弱类型的问题")])]),s._v(" "),a("ul",[a("li",[s._v("只有在代码运行时才能检查出错误，而强类型则直接在编译时就能检查出问题。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// obj.foo()")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("类型不明确可能会造成函数功能发生改变")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//200")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//100100")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("弱类型会造成我们可能对对象索引器的错误用法")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("以上问题在代码量小时可以通过约定来避免，但项目代码量一大，可能不是所有人会遵守约定，会隐藏有很多bug，还是强类型有保障。")]),s._v(" "),a("p",[a("strong",[s._v("2、相比于弱类型，强类型有如下优势")])]),s._v(" "),a("ul",[a("li",[s._v("错误更早暴露")]),s._v(" "),a("li",[s._v("代码更智能，编码更准确（强类型的代码提示较多）")]),s._v(" "),a("li",[s._v("重构更牢靠（如修改了一个方法后，如果是js则调用这个方法的地方不会报错，ts的话编译就会报错了）")]),s._v(" "),a("li",[s._v("减少不必要的类型判断（强类型不用对函数的参数另外加判断，因为参数本身就有要求了）")])]),s._v(" "),a("h2",{attrs:{id:"四、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[s._v("#")]),s._v(" 四、总结")]),s._v(" "),a("ul",[a("li",[s._v("JavaScript是弱类型且动态类型的语言")]),s._v(" "),a("li",[s._v("自身存在类型系统不足的问题，然而TypeScript能够解决它的不足")]),s._v(" "),a("li",[s._v("因此，在长周期开发的大型项目中，TypeScript往往更适合作为首选的开发语言。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
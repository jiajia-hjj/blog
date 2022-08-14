(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{752:function(t,a,e){"use strict";e.r(a);var v=e(18),n=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"安装yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装yarn"}},[t._v("#")]),t._v(" 安装yarn")]),t._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install -g yarn\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"指令对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指令对比"}},[t._v("#")]),t._v(" 指令对比")]),t._v(" "),e("p",[t._v("下面针对一些常用的指令进行对比：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("描述")]),t._v(" "),e("th",[t._v("yarn")]),t._v(" "),e("th",[t._v("npm")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("初始化package.json")]),t._v(" "),e("td",[t._v("yarn init (可以在后面添加"),e("code",[t._v("-y")]),t._v("跳过询问的信息)")]),t._v(" "),e("td",[t._v("npm init (可以在后面添加"),e("code",[t._v("-y")]),t._v("跳过询问的信息)")])]),t._v(" "),e("tr",[e("td",[t._v("根据package.json安装依赖")]),t._v(" "),e("td",[t._v("yarn install（可以省略install）")]),t._v(" "),e("td",[t._v("npm install(install可以缩写成"),e("code",[t._v("i")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[t._v("安装某个依赖(默认是在dependencies)")]),t._v(" "),e("td",[t._v("yarn add packageName --save（简写"),e("code",[t._v("-S")]),t._v("，或者省略该参数）")]),t._v(" "),e("td",[t._v("npm install packageName --save（简写"),e("code",[t._v("-S")]),t._v("，或者省略该参数）")])]),t._v(" "),e("tr",[e("td",[t._v("安装某个依赖在devDependencies")]),t._v(" "),e("td",[t._v("yarn add packageName --dev（可以简写成"),e("code",[t._v("-D")]),t._v("）")]),t._v(" "),e("td",[t._v("npm install packageName --save-dev（可以简写成"),e("code",[t._v("-D")]),t._v("）")])]),t._v(" "),e("tr",[e("td",[t._v("全局安装依赖")]),t._v(" "),e("td",[t._v("yarn global add packageName")]),t._v(" "),e("td",[t._v("npm install  packageName -g")])]),t._v(" "),e("tr",[e("td",[t._v("移除依赖")]),t._v(" "),e("td",[t._v("yarn remove packageName")]),t._v(" "),e("td",[t._v("npm uninstall packageName")])]),t._v(" "),e("tr",[e("td",[t._v("移除全局依赖")]),t._v(" "),e("td",[t._v("yarn global remove packageName")]),t._v(" "),e("td",[t._v("npm uninstall packageName -g")])]),t._v(" "),e("tr",[e("td",[t._v("升级依赖")]),t._v(" "),e("td",[t._v("yarn upgrade packageName（如果是全局的依赖则在yarn后面加上"),e("code",[t._v("global")]),t._v("）")]),t._v(" "),e("td",[t._v("npm update packageName（如果是全局的依赖则在后面加上"),e("code",[t._v("-g")]),t._v("）")])]),t._v(" "),e("tr",[e("td",[t._v("查看依赖的信息")]),t._v(" "),e("td",[t._v("yarn info packageName")]),t._v(" "),e("td",[t._v("npm info packageName")])]),t._v(" "),e("tr",[e("td",[t._v("设置淘宝源")]),t._v(" "),e("td",[t._v("yarn config set registry "),e("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fregistry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("registry.npm.taobao.org"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("npm config set registry "),e("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fregistry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("registry.npm.taobao.org"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("查看当前源")]),t._v(" "),e("td",[t._v("yarn config get registry")]),t._v(" "),e("td",[t._v("npm config get registry")])]),t._v(" "),e("tr",[e("td",[t._v("罗列全局依赖")]),t._v(" "),e("td",[t._v("yarn global list --depth=0")]),t._v(" "),e("td",[t._v("npm list -g --depth 0")])])])]),t._v(" "),e("h3",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),e("ol",[e("li",[t._v("yarn安装速度快，因为它是异步执行安装依赖；npm是同步执行，它需要先安装好前面的包再接着安装。")]),t._v(" "),e("li",[t._v("yarn安装过程信息很干净，npm会罗列很多其它包的信息，看过去感觉不直观。")]),t._v(" "),e("li",[t._v("yarn安装后是有个yarn.lock文件，这个文件是会锁定你安装的版本，别人安装时会直接读取yarn.lock文件，这样可以保证安装的依赖的版本是一样的，npm在5.x.x的版本也引入了这个机制，它的文件叫package-lock.json。")])]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://juejin.cn/post/7000026481602756622",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn和npm的对比"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);
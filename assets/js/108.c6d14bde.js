(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{731:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"编译选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译选项"}},[s._v("#")]),s._v(" 编译选项")]),s._v(" "),a("h3",{attrs:{id:"一、自动编译文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、自动编译文件"}},[s._v("#")]),s._v(" 一、自动编译文件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。")])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("tsc xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w\ntsc xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("watch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"二、自动编译整个项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、自动编译整个项目"}},[s._v("#")]),s._v(" 二、自动编译整个项目")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。")])]),s._v(" "),a("li",[a("p",[s._v("但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 "),a("a",{attrs:{href:""}},[s._v("tsconfig.json")])]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#使用命令创建 tsconfig.json\ntsc -init  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("tsconfig.json")]),s._v("是一个JSON文件，添加配置文件后，只需执行 "),a("code",[s._v("tsc")]),s._v(" 命令即可完成对整个项目的编译")])])]),s._v(" "),a("h3",{attrs:{id:"三、配置选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、配置选项"}},[s._v("#")]),s._v(" 三、配置选项")]),s._v(" "),a("h4",{attrs:{id:"_3-1-include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-include"}},[s._v("#")]),s._v(" 3.1.include")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("定义希望被编译文件所在的目录")])]),s._v(" "),a("li",[a("p",[s._v('默认值：["**/*"]')])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// **任意目录   *任意文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tests/**/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上述示例中，所有src目录和tests目录下的文件都会被编译")])])]),s._v(" "),a("h4",{attrs:{id:"_3-2-exclude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-exclude"}},[s._v("#")]),s._v(" 3.2.exclude")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("定义需要排除在外的目录")])]),s._v(" "),a("li",[a("p",[s._v('默认值：["node_modules", "bower_components", "jspm_packages"]')])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/hello/**/*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上述示例中，src下hello目录下的文件都不会被编译")])])]),s._v(" "),a("h4",{attrs:{id:"_3-3-extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-extends"}},[s._v("#")]),s._v(" 3.3.extends")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("定义被继承的配置文件")])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./configs/base"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息")])])]),s._v(" "),a("h4",{attrs:{id:"_3-4-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-files"}},[s._v("#")]),s._v(" 3.4.files")]),s._v(" "),a("ul",[a("li",[s._v("指定被编译文件的列表，只有需要编译的文件少时才会用到")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"core.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sys.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"types.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scanner.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parser.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utilities.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"binder.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"checker.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc.ts"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("列表中的文件都会被TS编译器所编译")])])]),s._v(" "),a("h4",{attrs:{id:"_3-5-compileroptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-compileroptions"}},[s._v("#")]),s._v(" 3.5.compilerOptions")]),s._v(" "),a("blockquote",[a("p",[s._v("编译选项是配置文件中非常重要也比较复杂的配置选项")]),s._v(" "),a("p",[s._v("在compilerOptions中包含多个子选项，用来完成对编译的配置")])]),s._v(" "),a("p",[a("strong",[s._v("项目选项")])]),s._v(" "),a("p",[a("strong",[s._v("1、target")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("设置ts代码编译的目标版本")])]),s._v(" "),a("li",[a("p",[s._v("可选值：")]),s._v(" "),a("ul",[a("li",[s._v("ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext")])])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码")])])]),s._v(" "),a("p",[a("strong",[s._v("2、lib")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("指定项目中要使用的库（宿主环境）")])]),s._v(" "),a("li",[a("p",[s._v("可选值：")]),s._v(" "),a("ul",[a("li",[s._v("ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......")])])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DOM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[a("strong",[s._v("3、module")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("设置编译后代码使用的模块化系统")])]),s._v(" "),a("li",[a("p",[s._v("可选值：")]),s._v(" "),a("ul",[a("li",[s._v("none 、commonjs 、amd 、system 、umd 、es6 、es2015 、es2020 、esnext")])])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CommonJS"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[a("strong",[s._v("4、outDir")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("编译后文件的所在目录")])]),s._v(" "),a("li",[a("p",[s._v("默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置")])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("设置后编译后的js文件将会生成到dist目录")])])]),s._v(" "),a("p",[a("strong",[s._v("5、outFile")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("将所有的文件编译为一个js文件")])]),s._v(" "),a("li",[a("p",[s._v("默认会将所有的编写在全局作用域中的代码合并为一个js文件")])]),s._v(" "),a("li",[a("p",[s._v("如果module制定了None、System或AMD则会将模块一起合并到文件之中")])]),s._v(" "),a("li",[a("p",[s._v("如果module不是None、System或AMD则报错，不能合并到一个文件中")])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/app.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[a("strong",[s._v("6、rootDir")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录")])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"rootDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[a("strong",[s._v("7、allowJs")])]),s._v(" "),a("ul",[a("li",[s._v("是否对js文件进行编译，默认是false")])]),s._v(" "),a("p",[a("strong",[s._v("8、checkJs")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("是否检查js代码是否符合语法规范，默认是false")])]),s._v(" "),a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowJs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"checkJs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("p",[a("strong",[s._v("9、removeComments")])]),s._v(" "),a("ul",[a("li",[s._v("是否删除注释")]),s._v(" "),a("li",[s._v("默认值：false")])]),s._v(" "),a("p",[a("strong",[s._v("10、noEmit")])]),s._v(" "),a("ul",[a("li",[s._v("不对代码进行编译")]),s._v(" "),a("li",[s._v("默认值：false")])]),s._v(" "),a("p",[a("strong",[s._v("11、sourceMap")])]),s._v(" "),a("ul",[a("li",[s._v("是否生成sourceMap")]),s._v(" "),a("li",[s._v("默认值：false")])]),s._v(" "),a("p",[a("strong",[s._v("12、严格检查")])]),s._v(" "),a("p",[s._v("（严格模式，代码语法更严格，浏览器执行性能更好）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("strict")]),s._v(" "),a("ul",[a("li",[s._v("启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查")])])]),s._v(" "),a("li",[a("p",[s._v("alwaysStrict")]),s._v(" "),a("ul",[a("li",[s._v("总是以严格模式对代码进行编译")])])]),s._v(" "),a("li",[a("p",[s._v("noImplicitAny")]),s._v(" "),a("ul",[a("li",[s._v("禁止隐式的any类型")])])]),s._v(" "),a("li",[a("p",[s._v("noImplicitThis")]),s._v(" "),a("ul",[a("li",[s._v("禁止类型不明确的this")])])]),s._v(" "),a("li",[a("p",[s._v("strictBindCallApply")]),s._v(" "),a("ul",[a("li",[s._v("严格检查bind、call和apply的参数列表")])])]),s._v(" "),a("li",[a("p",[s._v("strictFunctionTypes")]),s._v(" "),a("ul",[a("li",[s._v("严格检查函数的类型")])])]),s._v(" "),a("li",[a("p",[s._v("strictNullChecks")]),s._v(" "),a("ul",[a("li",[s._v("严格的空值检查")])])]),s._v(" "),a("li",[a("p",[s._v("strictPropertyInitialization")]),s._v(" "),a("ul",[a("li",[s._v("严格检查属性是否初始化")])])]),s._v(" "),a("li",[a("p",[s._v("额外检查")]),s._v(" "),a("ul",[a("li",[s._v("noFallthroughCasesInSwitch\n"),a("ul",[a("li",[s._v("检查switch语句包含正确的break")])])]),s._v(" "),a("li",[s._v("noImplicitReturns\n"),a("ul",[a("li",[s._v("检查函数没有隐式的返回值")])])]),s._v(" "),a("li",[s._v("noUnusedLocals\n"),a("ul",[a("li",[s._v("检查未使用的局部变量")])])]),s._v(" "),a("li",[s._v("noUnusedParameters\n"),a("ul",[a("li",[s._v("检查未使用的参数")])])])])]),s._v(" "),a("li",[a("p",[s._v("高级")]),s._v(" "),a("ul",[a("li",[s._v("allowUnreachableCode\n"),a("ul",[a("li",[s._v("检查不可达代码")]),s._v(" "),a("li",[s._v("可选值：\n"),a("ul",[a("li",[s._v("true，忽略不可达代码")]),s._v(" "),a("li",[s._v("false，不可达代码将引起错误")])])])])]),s._v(" "),a("li",[s._v("noEmitOnError\n"),a("ul",[a("li",[s._v("有错误的情况下不进行编译")]),s._v(" "),a("li",[s._v("默认值：false")])])])])])]),s._v(" "),a("h3",{attrs:{id:"四、配置参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、配置参考"}},[s._v("#")]),s._v(" 四、配置参考")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*\n  tsconfig.json是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译\n    "include" 用来指定哪些ts文件需要被编译\n      路径：** 表示任意目录\n            * 表示任意文件\n    "exclude" 不需要被编译的文件目录\n        默认值：["node_modules", "bower_components", "jspm_packages"]\n\n*/')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/**/*"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//  "exclude": [')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//    "./src/hello/**/*"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  ]")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n    compilerOptions 编译器的选项\n  */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// target 用来指定ts被编译为的ES的版本")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es2015"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// module 指定要使用的模块化的规范")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'esnext'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es2015"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lib用来指定项目中要使用的库")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2018', 'es2019', 'es2020', 'esnext', 'dom', 'dom.iterable', 'webworker', 'webworker.importscripts', 'webworker.iterable', 'scri")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//pthost', 'es2015.core', 'es2015.collection', 'es2015.generator', 'es2015.iterable', 'es2015.promise', 'es2015.proxy', 'es2015.r")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//eflect', 'es2015.symbol', 'es2015.symbol.wellknown', 'es2016.array.include', 'es2017.object', 'es2017.sharedmemory', 'es2017.st")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//ring', 'es2017.intl', 'es2017.typedarrays', 'es2018.asyncgenerator', 'es2018.asynciterable', 'es2018.intl', 'es2018.promise', '")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//es2018.regexp', 'es2019.array', 'es2019.object', 'es2019.string', 'es2019.symbol', 'es2020.bigint', 'es2020.promise', 'es2020.s")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//haredmemory', 'es2020.string', 'es2020.symbol.wellknown', 'es2020.intl', 'esnext.array', 'esnext.symbol', 'esnext.asynciterable")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//', 'esnext.intl', 'esnext.bigint', 'esnext.string', 'esnext.promise', 'esnext.weakref'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//    "lib": ["es6", "dom"]')]),s._v("\n\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// outDir 用来指定编译后文件所在的目录")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将代码合并为一个文件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置outFile后，所有的全局作用域中的代码会合并到同一个文件中")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"outFile": "./dist/app.js"')]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否对js文件进行编译，默认是false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//    "allowJs": true,')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否检查js代码是否符合语法规范，默认是false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//    "checkJs": true,')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否移除注释")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不生成编译后的文件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noEmit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当有错误时不生成编译后的文件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noEmitOnError"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所有严格检查的总开关")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用来设置编译后的文件是否使用严格模式，默认false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alwaysStrict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不允许隐式的any类型")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不允许不明确类型的this")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noImplicitThis"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 严格的检查空值")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strictNullChecks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{829:function(a,s,e){"use strict";e.r(s);var t=e(18),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"npx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npx"}},[a._v("#")]),a._v(" npx")]),a._v(" "),e("blockquote",[e("p",[a._v("npm v5.2.0引入的一条命令（npx），提升了开发者使用包内提供的命令行工具的体验。")])]),a._v(" "),e("h2",{attrs:{id:"一、调用项目安装的模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、调用项目安装的模块"}},[a._v("#")]),a._v(" 一、"),e("strong",[a._v("调用项目安装的模块")])]),a._v(" "),e("p",[e("strong",[a._v("安装webpack：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm i -D webpack\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("strong",[a._v("调用项目内部的webpack：")])]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 项目的根目录下执行\n./node_modules/.bin/webpack -v\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("strong",[a._v("有了 npx，只需要这样：")])]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npx webpack -v\n#npx 会自动查找当前依赖包中的可执行文件，如果找不到，就会去 PATH 里找。如果依然找不到，就会帮你安装！\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"二、避免全局安装模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、避免全局安装模块"}},[a._v("#")]),a._v(" 二、避免全局安装模块")]),a._v(" "),e("ul",[e("li",[a._v("如"),e("code",[a._v("create-react-app")]),a._v("这个模块是全局安装，npx 可以运行它，而且不进行全局安装。")])]),a._v(" "),e("p",[e("strong",[a._v("老方法：")])]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install -g create-react-app\ncreate-react-app my-app\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("strong",[a._v("npx方式：")])]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npx create-react-app my-app\n#这条命令会临时安装 `create-react-app` 包，命令完成后`create-react-app` 会删掉，不会出现在 global 中。下次再执行，还是会重新临时安装。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"三、使用不同版本的-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、使用不同版本的-node"}},[a._v("#")]),a._v(" 三、使用不同版本的 node")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npx node@0.12.8 -v\n#npx 可以下载模块，上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。\n\n#指定node版本来运行`npm scripts`\nnpx -p node@8 npm run build\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h2",{attrs:{id:"四、执行-github-源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、执行-github-源码"}},[a._v("#")]),a._v(" 四、执行 GitHub 源码")]),a._v(" "),e("p",[a._v("npx 还可以执行 GitHub 上面的模块源码。")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 执行 Gist 代码\nnpx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32\n# 执行仓库代码\nnpx github:piuccio/cowsay hello\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("ul",[e("li",[a._v("注意，远程代码必须是一个模块，即必须包含"),e("code",[a._v("package.json")]),a._v("和入口脚本。")])]),a._v(" "),e("h2",{attrs:{id:"五、开启静态服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、开启静态服务器"}},[a._v("#")]),a._v(" 五、开启静态服务器")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npx http-server\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"六、参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、参数"}},[a._v("#")]),a._v(" 六、参数")]),a._v(" "),e("p",[e("code",[a._v("--no-install")]),a._v("：强制使用本地模块，不下载远程模块，如果本地不存在该模块，就会报错。")]),a._v(" "),e("p",[e("code",[a._v("--ignore-existing")]),a._v("：忽略本地的同名模块，强制安装使用远程模块")]),a._v(" "),e("p",[e("code",[a._v("-p")]),a._v("：指定 npx 所要安装的模块")]),a._v(" "),e("p",[e("code",[a._v("-c")]),a._v("：如果 npx 安装多个模块，默认，第一个可执行项会使用 npx 安装的模块，后面的可执行项还是会交给 Shell 解释（可能会报错）。")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-c")]),a._v("所有命令都用 npx 解释")]),a._v(" "),e("li",[a._v("环境变量带入所要执行的命令")])]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npx -c 'echo \"$npm_package_name\"'\n#输出当前项目的项目名\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"七、总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、总结"}},[a._v("#")]),a._v(" 七、总结")]),a._v(" "),e("ul",[e("li",[a._v("临时安装可执行依赖包，不用全局安装，不用担心长期的污染。")]),a._v(" "),e("li",[a._v("可以执行依赖包中的命令，安装完成自动运行。")]),a._v(" "),e("li",[a._v("自动加载node_modules中依赖包，不用指定$PATH。")]),a._v(" "),e("li",[a._v("可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
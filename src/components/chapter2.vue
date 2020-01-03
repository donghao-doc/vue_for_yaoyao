<template>
    <div class="Chapter1">
        <article>
            <h1>安装</h1>

            <h3>兼容性</h3>
            <p>Vue 不支持 IE8，但它支持所有兼容 ECMAScript 5 的浏览器。</p>
            <p>提问：为什么 Vue 不支持 IE8？</p>

            <h2>Vue Devtools</h2>
            <p>使用 Vue 时，推荐安装 Vue Devtools，它允许你在一个更友好的界面中审查和调试 Vue 应用。</p>

            <h2>直接用 &lt;script&gt; 引入</h2>
            <p>1. 对于制作原型或学习，你可以这样引入：</p>
            <pre>
                <code>
                    &lt;script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"&gt;&lt;/script&gt;
                </code>
            </pre>
            <p>2. 对于生产环境，推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：</p>
            <pre>
                <code>
                    &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"&gt;&lt;/script&gt;
                </code>
            </pre>
            <p>3. 如果使用原生 ES Modules，这样引入：</p>
            <pre>
                <code>
                    &lt;script type="module"&gt;
                        import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
                    &lt;/script&gt;
                </code>
            </pre>
            <p>提示：在学习和开发环境中，请使用开发版本；在生产环境中，请使用生产版本。因为生产版本去掉了常见错误的相关警告。</p>
            <p>提问：开发版本和生产版本有什么区别？</p>

            <h2>NPM</h2>
            <p>在构建大型应用时，推荐使用 NPM 安装：</p>
            <pre>
                <code>
                    # 最新稳定版
                    $ npm install vue
                </code>
            </pre>

            <h2>命令行工具</h2>
            <p>Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。更多详情可查阅 <a href="https://cli.vuejs.org/">Vue CLI</a> 的文档。</p>
            <p>在现阶段的学习过程中，不推荐直接使用 CLI 工具，你可以使用上面说的 script 标签引入。</p>

            <h2>对不同构建版本的解释</h2>
            <h3>术语</h3>
            <ul>
                <li>编译器：用来将模板字符串编译成 JavaScript 渲染函数的代码。</li>
                <li>运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其他一切。</li>
                <li>完整版：同时包含编译器和运行时的版本。</li>
            </ul>

            <section>
                <h3>答案：</h3>
                <blockquote>
                    <p>问：为什么 Vue 不支持 IE8？</p>
                    <p>答：因为 IE8 只支持一点 ES5。</p>
                </blockquote>
                <blockquote>
                    <p>问：开发版本和生产版本有什么区别？</p>
                    <p>答：开发版本适用于学习和开发环境，因为它保留了常见错误的相关警告；生产版本适用于生产环境，因为它去掉了常见错误的相关警告，可以带来比开发环境下更快的速度体验。</p>
                </blockquote>
            </section>
        </article>
    </div>
</template>

<script>
export default {
    name: 'Chapter1'
}
</script>

<style lang="scss" scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }
a {
    text-decoration: none;
    color: #42b983;
    font-weight: 700;
}
.Chapter1 {
    width: 100%;
    height: 100%;
    border: 2px solid green;
    display: flex;
    justify-content: center;
    > article {
        p {
            padding-left: 20px;
        }
        width: 80%;
        height: auto;
        border: 2px solid red;
        padding: 20px 0;
        overflow-y: auto;
        overflow-x: hidden;
        > * {
            line-height: 1.6em;
        }
        > h1 {
            font-size: 2em;
            margin-bottom: 1em;
        }
        > h2 {
            font-size: 1.5em;
            margin: 1em 0;
        }
        > h3 {
            font-size: 1.17em;
            margin: 0.5em 0;
            &::before {
                content: "# ";
                color: #42b983;
            }
            
        }
        > pre {
            width: 80%;
            margin: 0 auto;
            margin-left: 50px;
            display: flex;
            justify-content: flex-start;
            background-color: #EBEBEB;
            font-family: "Roboto Mono", Monaco, courier, monospace;
            font-size: 1.1em;
            > code {
                margin-left: -50px;
            }
        }
        > section {
            > h3 {
                font-size: 1.17em;
                margin: 2em 0 0.5em 0;
            }
        }
    }
}
</style>
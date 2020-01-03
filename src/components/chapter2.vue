<template>
    <div class="Chapter1">
        <article>
            <h1>介绍</h1>

            <h2>Vue.js 是什么</h2>
            <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。</p>
            <p>Vue 的核心库只关注视图层。</p>

            <h2>声明式渲染</h2>
            <p>1. Vue.js 的核心是一个允许采用简洁的 <strong>模板语法（文本插值）</strong> 来 <strong>声明式</strong> 地将数据渲染进 DOM 的系统：</p>
            <pre>
                <code>
                    &lt;div id="app"&gt;
                        &#123; &#123; message &#125; &#125;
                    &lt;/div&gt;
                </code>
            </pre>
            <pre>
                <code>
                    var app = new Vue({
                        el: '#app',
                        data: {
                            message: '小可爱！'
                        }
                    })
                </code>
            </pre>
            <div class="showContent">小可爱！</div>
            <p>现在数据（上例中的 data）和 DOM 已经关联起来了，所有东西都是响应式的！</p>
            <p>可以在控制台中改变 app.message 的值，验证这一点。</p>

            <p>2. 除了文本插值，我们还可以像这样绑定元素特性：</p>
            <pre>
                <code>
                    &lt;div id="app-2"&gt;
                        &lt;span v-bind:title="message"&gt;
                            鼠标悬停查看提示信息！
                        &lt;/span&gt;
                    &lt;/div&gt;
                </code>
            </pre>
            <pre>
                <code>
                    var app2 = new Vue({
                        el: '#app-2',
                        data: {
                            message: '小可爱你不知道我有多爱你！'
                        }
                    })
                </code>
            </pre>
            <div class="showContent tipInfo" title="小可爱你不知道我有多爱你！">鼠标悬停查看提示信息！</div>
            <p>上面的 <strong>v-bind</strong> 被称为指令，指令带有前缀 <strong>v-</strong> ，用来表示它们是 Vue 提供的特殊特性。</p>
            <p>现在数据（上例中的 data）和 DOM 已经关联起来了，所有东西都是响应式的！</p>
            <p>可以在控制台中改变 app2.message 的值，验证这一点。</p>

            <h2>条件与循环</h2>

            <h2>处理用户输入</h2>

            <h2>组件化应用构建</h2>

            <h2>准备好了吗？</h2>

            <section>
                <h3></h3>
                <blockquote>
                    <p></p>
                    <p></p>
                </blockquote>
                <blockquote>
                    <p></p>
                    <p></p>
                </blockquote>
            </section>
        </article>
    </div>
</template>

<script>
export default {
    name: 'Chapter2'
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
    display: flex;
    justify-content: center;
    > article {
        p {
            padding-left: 20px;
        }
        width: 80%;
        height: auto;
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
            border-bottom: 1px solid #CDC9C9;
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
            margin: 8px 0;
            border-radius: 4px;
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
        > .showContent {
            width: 80%;
            background: #fff;
            padding: 20px;
            border-radius: 4px;
            border: 1px solid #EBEBEB;
        }
        > .tipInfo {
            position: relative;
        }
        > .tipInfo:hover::after {
            content: attr(title);
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
        }
    }
}
</style>
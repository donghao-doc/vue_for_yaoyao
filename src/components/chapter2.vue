<template>
    <div class="Chapter2">
        <article>
            <h1>介绍</h1>

            <h2>Vue.js 是什么</h2>
            <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。</p>
            <p>Vue 的核心库只关注视图层。</p>

            <h2>声明式渲染</h2>
            <p>
                1. Vue.js 的核心是一个允许采用简洁的
                <strong>模板语法（文本插值）</strong> 来
                <strong>声明式</strong> 地将数据渲染进 DOM 的系统：
            </p>
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
            <p>可以在控制台中改变 app.message 的值来验证这一点。</p>

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
            <p>
                上面的
                <strong>v-bind</strong> 被称为指令，指令带有前缀
                <strong>v-</strong> ，用来表示它们是 Vue 提供的特殊特性。
            </p>
            <p>现在数据（上例中的 data）和 DOM 已经关联起来了，所有东西都是响应式的！</p>
            <p>可以在控制台中改变 app2.message 的值来验证这一点。</p>

            <h2>条件与循环</h2>
            <p>控制一个元素是否显示也很简单：</p>
            <pre>
                <code>
                    &lt;div id="app-3"&gt;
                        &lt;p v-if="seen"&gt;现在你看到我了&lt;/p&gt;
                    &lt;/div&gt;
                </code>
            </pre>
            <pre>
                <code>
                    var app3 = new Vue({
                        el: '#app-3',
                        data: {
                            seen: true
                        }
                    })
                </code>
            </pre>
            <p>你只要将 app3.seen 的值改成 false ，就会看到之前显示的消息不见了。</p>
            <p>这个例子演示了我们不仅可以把数据绑定到 DOM 文本或特性，还可以绑定到 DOM 结构。</p>
            <p>此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用过渡效果。</p>
            <p>还有其他很多指令，每个都有特殊的功能。</p>
            <p>比如，v-for 指令可以遍历一个数组的数据到 DOM 中：</p>
            <pre>
                <code>
                    &lt;div id="app-4"&gt;
                        &lt;ol&gt;
                            &lt;li v-for="todo in todos"&gt;
                                &#123; &#123; todo.text &#125; &#125;
                            &lt;/li&gt;
                        &lt;/ol&gt;
                    &lt;/div&gt;
                </code>
            </pre>
            <pre>
                <code>
                    var app4 = new Vue({
                        el: '#app-4',
                        data: {
                            todos: [
                                { text: '有的爱像阳光倾落' },
                                { text: '却依然' },
                                { text: '相信彩虹' }
                            ]
                        }
                    })
                </code>
            </pre>
            <div class="showContent">
                1. 有的爱像阳光倾落 <br>
                2. 却依然 <br>
                3. 相信彩虹
            </div>
            <p>在控制台里输入：app4.todos.push({ text: '追光者' }) ，你会发现列表后面添加了新的内容。</p>

            <h2>处理用户输入</h2>
            <p>使用 v-on 指令，绑定事件监听器，调用在 Vue 实例中定义的方法：</p>
            <pre>
                <code>
                    &lt;div id="app-5"&gt;
                        &lt;p&gt; &#123; &#123; message &#125; &#125; &lt;/p&gt;
                        &lt;button v-on:click="reverseMessage"&gt;反转内容&lt;/button&gt;
                    &lt;/div&gt;
                </code>
            </pre>
            <pre>
                <code>
                    var app5 = new Vue({
                        el: '#app-5',
                        data: {
                            message: '如果说，你是海上的烟火'
                        },
                        methods: {
                            reverseMessage: function () {
                                this.message = this.message.split('').reverse().join('')
                            }
                        }
                    })
                </code>
            </pre>
            <div class="showContent">
                {{ message }} <br>
                <button @click="reverseMessage">反转内容</button>
            </div>
            <p>使用 v-model 指令，实现表单输入与应用状态之间的双向绑定：</p>
            <pre>
                <code>
                    &lt;div id="app-6"&gt;
                        &lt;p&lt; &#123; &#123; message &#125; &#125; &lt;/p&gt;
                        &lt;input v-model="message"&gt;
                    &lt;/div&gt;
                </code>
            </pre>
            <pre>
                <code>
                    var app6 = new Vue({
                        el: '#app-6',
                        data: {
                            message: '我是浪花的泡沫'
                        }
                    })
                </code>
            </pre>
            <div class="showContent">
                {{ message2 }} <br>
                <input v-model="message2">
            </div>

            <h2>组件化构建应用</h2>
            <p>什么是组件化构建应用？先想象一下我们小时候搭过的积木......</p>
            <p>组件化：就是一块一块的积木。</p>
            <p>构建：搭积木的过程。</p>
            <p>应用：积木最终搭成的样子（比如机器人、房子、汽车）。</p>
            <br>
            <p>放到实际开发中，要如何理解呢？看看下面这张图：</p>
            <img class="components" src="../assets/components.png" alt="组件示意图">
            <p>在 Vue 中，一个组件本质上是一个拥有预定义选项的一个 Vue 实例。</p>
            <p>在 Vue 中注册组件：</p>
            <pre>
                <code>
                    // 定义名为 todo-item 的组件，组件要在 Vue 实例之前定义
                    Vue.component('todo-item', {
                        template: '&lt;li&gt;这是一个待办项&lt;/li&gt;'
                    })

                    var app = new Vue()
                </code>
            </pre>
            <p>使用这个组件：</p>
            <pre>
                <code>
                    &lt;ol&gt;
                        &lt;todo-item&gt;&lt;/todo-item&gt;  // 相当于 li 标签
                    &lt;/ol&gt;
                </code>
            </pre>

            <h2>准备好了吗？</h2>

            <section>
                <h3>答案：</h3>
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
    name: "Chapter2",
    data() {
        return {
            message: '如果说，你是海上的烟火',
            message2: '我是浪花的泡沫'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
};
</script>

<style lang="scss" scoped>
.Chapter2 {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    > article {
        width: 80%;
        padding: 20px 0;
        > * {
            line-height: 1.6em;
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
            border: 1px solid #e0dfcc;
            margin-left: 50px;
            margin-bottom: 8px;
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
        > .components {
            width: 100%;
            margin: 8px 0;
        }
    }
}
</style>
<template>
    <div class="Catalogue">
        <h1>写给瑶瑶的 Vue 文档</h1>
        <p>作者：董董</p>
        <p>授权：只有小可爱才能看</p>
        <h2>目录</h2>
        <ol>
            <li @click="showChapter(1)">安装</li>
            <li @click="showChapter(2)">介绍</li>
            <li @click="showChapter(3)">Vue 实例</li>
            <li @click="showChapter(4)">模板语法</li>
            <li>计算属性和侦听器</li>
            <li>Class 与 Style 绑定</li>
            <li>条件渲染</li>
            <li>列表渲染</li>
            <li>事件处理</li>
            <li>表单输入绑定</li>
            <li>组件基础</li>
            <li>组件注册</li>
            <li>Prop</li>
            <li>自定义事件</li>
            <li>插槽</li>
            <li>动态组件 & 异步组件</li>
            <li>处理边界情况</li>
            <li>进入/离开 & 列表过渡</li>
            <li>状态过渡</li>
            <li>混入</li>
            <li>自定义指令</li>
            <li>渲染函数 & JSX</li>
            <li>插件</li>
            <li>过滤器</li>
            <li>单文件组件</li>
            <li>单元测试</li>
            <li>TypeScript支持</li>
            <li>生产环境部署</li>
            <li>路由</li>
            <li>状态管理</li>
            <li>服务端渲染</li>
            <li>深入响应式原理</li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'Catalogue',
    methods: {
        // 显示相应章节
        showChapter(num) {
            this.$root.$emit('showChapter', num)
        }
    }
}
</script>

<style lang="scss" scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }
.Catalogue {
    width: 100%;
    height: auto;
    > h1, h2 {
        color: #333;
        line-height: 2em;
    }
    > h1 {
        font-size: 25px;
        text-align: center;
        ~p {
            padding-left: 20px;
            line-height: 2em;
        }
    }
    > h2 {
        padding-left: 12px;
    }
    > ol {
        padding-left: 50px;
        line-height: 2em;
        > li {
            cursor: pointer;
        }
        > li:hover {
            color: #42b983;
        }
    }
}
</style>


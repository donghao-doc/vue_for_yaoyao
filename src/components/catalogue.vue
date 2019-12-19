<template>
    <div class="Catalogue">
        <h1>写给瑶瑶的 Vue 文档</h1>
        <p>作者：董董</p>
        <p>授权：只有小可爱才能看</p>
        <h2>目录</h2>
        <ol @click="chooseChapter">
            <li data="1">安装</li>
            <li data="2">介绍</li>
            <li data="3">Vue 实例</li>
            <li data="4">模板语法</li>
            <li data="5">计算属性和侦听器</li>
            <li data="6">Class 与 Style 绑定</li>
            <li data="7">条件渲染</li>
            <li data="8">列表渲染</li>
            <li data="9">事件处理</li>
            <li data="10">表单输入绑定</li>
            <li data="11">组件基础</li>
            <li data="12">组件注册</li>
            <li data="13">Prop</li>
            <li data="14">自定义事件</li>
            <li data="15">插槽</li>
            <li data="16">动态组件 & 异步组件</li>
            <li data="17">处理边界情况</li>
            <li data="18">进入/离开 & 列表过渡</li>
            <li data="19">状态过渡</li>
            <li data="20">混入</li>
            <li data="21">自定义指令</li>
            <li data="22">渲染函数 & JSX</li>
            <li data="23">插件</li>
            <li data="24">过滤器</li>
            <li data="25">单文件组件</li>
            <li data="26">单元测试</li>
            <li data="27">TypeScript支持</li>
            <li data="28">生产环境部署</li>
            <li data="29">路由</li>
            <li data="30">状态管理</li>
            <li data="31">服务端渲染</li>
            <li data="32">深入响应式原理</li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'Catalogue',
    methods: {
        // 选择章节
        chooseChapter(e) {
            let data = e.target.getAttribute('data')
            this.$root.$emit('showChapter', data)
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


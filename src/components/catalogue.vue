<template>
    <div class="Catalogue">
        <h1>写给瑶瑶的 Vue 文档</h1>
        <p>作者：董董</p>
        <p>授权：只有小可爱才能看</p>
        <h2>目录</h2>
        <ol @click="chooseChapter">
            <li :class="{current: isCurrent1}" data="1">安装</li>
            <li :class="{current: isCurrent2}" data="2">介绍</li>
            <li :class="{current: isCurrent3}" data="3">Vue 实例</li>
            <li :class="{current: isCurrent4}" data="4">模板语法</li>
            <li :class="{current: isCurrent5}" data="5">计算属性和侦听器</li>
            <li :class="{current: isCurrent6}" data="6">Class 与 Style 绑定</li>
            <li :class="{current: isCurrent7}" data="7">条件渲染</li>
            <li :class="{current: isCurrent8}" data="8">列表渲染</li>
            <li :class="{current: isCurrent9}" data="9">事件处理</li>
            <li :class="{current: isCurrent10}" data="10">表单输入绑定</li>
            <li :class="{current: isCurrent11}" data="11">组件基础</li>
            <li :class="{current: isCurrent12}" data="12">组件注册</li>
            <li :class="{current: isCurrent13}" data="13">Prop</li>
            <li :class="{current: isCurrent14}" data="14">自定义事件</li>
            <li :class="{current: isCurrent15}" data="15">插槽</li>
            <li :class="{current: isCurrent16}" data="16">动态组件 & 异步组件</li>
            <li :class="{current: isCurrent17}" data="17">处理边界情况</li>
            <li :class="{current: isCurrent18}" data="18">进入/离开 & 列表过渡</li>
            <li :class="{current: isCurrent19}" data="19">状态过渡</li>
            <li :class="{current: isCurrent20}" data="20">混入</li>
            <li :class="{current: isCurrent21}" data="21">自定义指令</li>
            <li :class="{current: isCurrent22}" data="22">渲染函数 & JSX</li>
            <li :class="{current: isCurrent23}" data="23">插件</li>
            <li :class="{current: isCurrent24}" data="24">过滤器</li>
            <li :class="{current: isCurrent25}" data="25">单文件组件</li>
            <li :class="{current: isCurrent26}" data="26">单元测试</li>
            <li :class="{current: isCurrent27}" data="27">TypeScript支持</li>
            <li :class="{current: isCurrent28}" data="28">生产环境部署</li>
            <li :class="{current: isCurrent29}" data="29">路由</li>
            <li :class="{current: isCurrent30}" data="30">状态管理</li>
            <li :class="{current: isCurrent31}" data="31">服务端渲染</li>
            <li :class="{current: isCurrent32}" data="32">深入响应式原理</li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "Catalogue",
    data() {
        return {
            isCurrent1: false,
            isCurrent2: false,
            isCurrent3: false,
            isCurrent4: false,
            isCurrent5: false,
            isCurrent6: false,
            isCurrent7: false,
            isCurrent8: false,
            isCurrent9: false,
            isCurrent10: false,
            isCurrent11: false,
            isCurrent12: false,
            isCurrent13: false,
            isCurrent14: false,
            isCurrent15: false,
            isCurrent16: false,
            isCurrent17: false,
            isCurrent18: false,
            isCurrent19: false,
            isCurrent20: false,
            isCurrent21: false,
            isCurrent22: false,
            isCurrent23: false,
            isCurrent24: false,
            isCurrent25: false,
            isCurrent26: false,
            isCurrent27: false,
            isCurrent28: false,
            isCurrent29: false,
            isCurrent30: false,
            isCurrent31: false,
            isCurrent32: false
        };
    },
    methods: {
        // 选择章节
        chooseChapter(e) {
            let data = e.target.getAttribute("data");
            this.$parent.showChapter(data)
            
            // 当前章节改变颜色
            switch (data) {
                case "1":
                    this.isCurrent1 = true;
                    for (let i = 2; i <= 32; i++) {
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "2":
                    this.isCurrent2 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 2) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "3":
                    this.isCurrent3 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 3) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "4":
                    this.isCurrent4 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 4) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "5":
                    this.isCurrent5 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 5) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "6":
                    this.isCurrent6 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 6) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "7":
                    this.isCurrent7 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 7) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "8":
                    this.isCurrent8 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 8) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "9":
                    this.isCurrent9 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 9) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "10":
                    this.isCurrent10 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 10) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "11":
                    this.isCurrent11 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 11) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "12":
                    this.isCurrent12 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 12) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "13":
                    this.isCurrent13 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 13) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "14":
                    this.isCurrent14 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 14) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "15":
                    this.isCurrent15 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 15) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "16":
                    this.isCurrent16 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 16) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "17":
                    this.isCurrent17 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 17) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "18":
                    this.isCurrent18 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 18) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "19":
                    this.isCurrent19 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 19) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "20":
                    this.isCurrent20 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 20) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "21":
                    this.isCurrent21 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 21) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "22":
                    this.isCurrent22 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 22) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "23":
                    this.isCurrent23 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 23) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "24":
                    this.isCurrent24 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 24) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "25":
                    this.isCurrent25 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 25) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "26":
                    this.isCurrent26 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 26) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "27":
                    this.isCurrent27 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 27) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "28":
                    this.isCurrent28 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 28) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "29":
                    this.isCurrent29 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 29) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "30":
                    this.isCurrent30 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 30) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "31":
                    this.isCurrent31 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 31) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
                case "32":
                    this.isCurrent32 = true;
                    for (let i = 1; i <= 32; i++) {
                        if (i === 32) continue;
                        this[eval(["isCurrent" + i])] = false;
                    }
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.Catalogue {
    width: 100%;
    height: auto;
    > h1,
    h2 {
        color: #333;
        line-height: 2em;
    }
    > h1 {
        font-size: 25px;
        text-align: center;
        ~ p {
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
        > .current {
            color: #42b983;
        }
    }
}
</style>


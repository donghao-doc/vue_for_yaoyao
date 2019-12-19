<template>
	<div class="App">
		<aside>
			<catalogue/>	
		</aside>
		<article>
			<chapter1 v-if="isChapter1"/>
			<chapter2 v-if="isChapter2"/>
			<chapter3 v-if="isChapter3"/>
			<chapter4 v-if="isChapter4"/>
		</article>
	</div>
</template>

<script>
import catalogue from './components/catalogue'
import chapter1 from './components/chapter1'
import chapter2 from './components/chapter2'
import chapter3 from './components/chapter3'
import chapter4 from './components/chapter4'
export default {
	name: 'App',
	data() {
		return {
			isChapter1: false,
			isChapter2: false,
			isChapter3: false,
			isChapter4: false,
		}
	},
	mounted() {
		this.$root.$on('showChapter', this.showChapter)
	},
	methods: {
		// 显示相应章节
		showChapter(num) {
			switch (num) {
				case 1:
					this.isChapter1 = true
					this.hideOtherChapter(num)
					break
				case 2:
					this.isChapter2 = true
					this.hideOtherChapter(num)
					break
				case 3:
					this.isChapter3 = true
					this.hideOtherChapter(num)
					break
				case 4:
					this.isChapter4 = true
					this.hideOtherChapter(num)
					break
			}
		},
		// 隐藏其他章节
		hideOtherChapter(num) {
			switch (num) {
				case 1:
					this.isChapter2 = false
					this.isChapter3 = false
					this.isChapter4 = false
					break
				case 2:
					this.isChapter1 = false
					this.isChapter3 = false
					this.isChapter4 = false
					break
				case 3:
					this.isChapter1 = false
					this.isChapter2 = false
					this.isChapter4 = false
					break
				case 4:
					this.isChapter1 = false
					this.isChapter2 = false
					this.isChapter3 = false
			}
		}
	},
	components: {
		catalogue,
		chapter1,
		chapter2,
		chapter3,
		chapter4,
	}
}
</script>

<style lang="scss" scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }

.App {
	width: 100vw;
	height: 100vh;
	display: flex;
	> aside {
		width: 15vw;
		min-width: 300px;
		padding: 10px;
		height: 100vh;
		border: 2px solid green;
		overflow-y: auto;
	}
	> article {
		width: 85vw;
		height: 100vh;
		border: 2px solid blue;
		overflow-y: auto;
	}
}
</style>
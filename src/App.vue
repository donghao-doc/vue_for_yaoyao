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
			<chapter5 v-if="isChapter5"/>
			<chapter6 v-if="isChapter6"/>
			<chapter7 v-if="isChapter7"/>
			<chapter8 v-if="isChapter8"/>
			<chapter9 v-if="isChapter9"/>
			<chapter10 v-if="isChapter10"/>
			<chapter11 v-if="isChapter11"/>
			<chapter12 v-if="isChapter12"/>
			<chapter13 v-if="isChapter13"/>
			<chapter14 v-if="isChapter14"/>
			<chapter15 v-if="isChapter15"/>
			<chapter16 v-if="isChapter16"/>
			<chapter17 v-if="isChapter17"/>
			<chapter18 v-if="isChapter18"/>
			<chapter19 v-if="isChapter19"/>
			<chapter20 v-if="isChapter20"/>
			<chapter21 v-if="isChapter21"/>
			<chapter22 v-if="isChapter22"/>
			<chapter23 v-if="isChapter23"/>
			<chapter24 v-if="isChapter24"/>
			<chapter25 v-if="isChapter25"/>
			<chapter26 v-if="isChapter26"/>
			<chapter27 v-if="isChapter27"/>
			<chapter28 v-if="isChapter28"/>
			<chapter29 v-if="isChapter29"/>
			<chapter30 v-if="isChapter30"/>
			<chapter31 v-if="isChapter31"/>
			<chapter32 v-if="isChapter32"/>
		</article>
	</div>
</template>

<script>
import catalogue from './components/catalogue'
import chapter1 from './components/chapter1'
import chapter2 from './components/chapter2'
import chapter3 from './components/chapter3'
import chapter4 from './components/chapter4'
import chapter5 from './components/chapter5'
import chapter6 from './components/chapter6'
import chapter7 from './components/chapter7'
import chapter8 from './components/chapter8'
import chapter9 from './components/chapter9'
import chapter10 from './components/chapter10'
import chapter11 from './components/chapter11'
import chapter12 from './components/chapter12'
import chapter13 from './components/chapter13'
import chapter14 from './components/chapter14'
import chapter15 from './components/chapter15'
import chapter16 from './components/chapter16'
import chapter17 from './components/chapter17'
import chapter18 from './components/chapter18'
import chapter19 from './components/chapter19'
import chapter20 from './components/chapter20'
import chapter21 from './components/chapter21'
import chapter22 from './components/chapter22'
import chapter23 from './components/chapter23'
import chapter24 from './components/chapter24'
import chapter25 from './components/chapter25'
import chapter26 from './components/chapter26'
import chapter27 from './components/chapter27'
import chapter28 from './components/chapter28'
import chapter29 from './components/chapter29'
import chapter30 from './components/chapter30'
import chapter31 from './components/chapter31'
import chapter32 from './components/chapter32'
export default {
	name: 'App',
	data() {
		return {
			isChapter1: false,
			isChapter2: false,
			isChapter3: false,
			isChapter4: false,
			isChapter5: false,
			isChapter6: false,
			isChapter7: false,
			isChapter8: false,
			isChapter9: false,
			isChapter10: false,
			isChapter11: false,
			isChapter12: false,
			isChapter13: false,
			isChapter14: false,
			isChapter15: false,
			isChapter16: false,
			isChapter17: false,
			isChapter18: false,
			isChapter19: false,
			isChapter20: false,
			isChapter21: false,
			isChapter22: false,
			isChapter23: false,
			isChapter24: false,
			isChapter25: false,
			isChapter26: false,
			isChapter27: false,
			isChapter28: false,
			isChapter29: false,
			isChapter30: false,
			isChapter31: false,
			isChapter32: false,
		}
	},
	mounted() {
		this.$root.$on('showChapter', this.showChapter)
	},
	methods: {
		// 显示相应章节
		showChapter(data) {
			switch (data) {
				case '1':
					this.isChapter1 = true
					this.hideOtherChapter(data)
					window.console.log('第一章')
					break
				case '2':
					this.isChapter2 = true
					this.hideOtherChapter(data)
					break
				case '3':
					this.isChapter3 = true
					this.hideOtherChapter(data)
					break
				case '4':
					this.isChapter4 = true
					this.hideOtherChapter(data)
					break
				case '5':
					this.isChapter5 = true
					this.hideOtherChapter(data)
					break
				case '6':
					this.isChapter6 = true
					this.hideOtherChapter(data)
					break
				case '7':
					this.isChapter7 = true
					this.hideOtherChapter(data)
					break
				case '8':
					this.isChapter8 = true
					this.hideOtherChapter(data)
					break
				case '9':
					this.isChapter9 = true
					this.hideOtherChapter(data)
					break
				case '10':
					this.isChapter10 = true
					this.hideOtherChapter(data)
					break
				case '11':
					this.isChapter11 = true
					this.hideOtherChapter(data)
					break
				case '12':
					this.isChapter12 = true
					this.hideOtherChapter(data)
					break
				case '13':
					this.isChapter13 = true
					this.hideOtherChapter(data)
					break
				case '14':
					this.isChapter14 = true
					this.hideOtherChapter(data)
					break
				case '15':
					this.isChapter15 = true
					this.hideOtherChapter(data)
					break
				case '16':
					this.isChapter16 = true
					this.hideOtherChapter(data)
					break
				case '17':
					this.isChapter17 = true
					this.hideOtherChapter(data)
					break
				case '18':
					this.isChapter18 = true
					this.hideOtherChapter(data)
					break
				case '19':
					this.isChapter19 = true
					this.hideOtherChapter(data)
					break
				case '20':
					this.isChapter20 = true
					this.hideOtherChapter(data)
					break
				case '21':
					this.isChapter21 = true
					this.hideOtherChapter(data)
					break
				case '22':
					this.isChapter22 = true
					this.hideOtherChapter(data)
					break
				case '23':
					this.isChapter23 = true
					this.hideOtherChapter(data)
					break
				case '24':
					this.isChapter24 = true
					this.hideOtherChapter(data)
					break
				case '25':
					this.isChapter25 = true
					this.hideOtherChapter(data)
					break
				case '26':
					this.isChapter26 = true
					this.hideOtherChapter(data)
					break
				case '27':
					this.isChapter27 = true
					this.hideOtherChapter(data)
					break
				case '28':
					this.isChapter28 = true
					this.hideOtherChapter(data)
					break
				case '29':
					this.isChapter29 = true
					this.hideOtherChapter(data)
					break
				case '30':
					this.isChapter30 = true
					this.hideOtherChapter(data)
					break
				case '31':
					this.isChapter31 = true
					this.hideOtherChapter(data)
					break
				case '32':
					this.isChapter32 = true
					this.hideOtherChapter(data)
					break
			}
		},
		// 隐藏其他章节
		hideOtherChapter(data) {
			switch (data) {
				case '1':
					for (let i = 2; i <= 32; i ++) {
						this[eval(['isChapter' + i])] = false
					}
					break
				case '2':
					for (let i = 1; i <= 32; i ++) {
						if (i === 2) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '3':
					for (let i = 1; i <= 32; i ++) {
						if (i === 3) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '4':
					for (let i = 1; i <= 32; i ++) {
						if (i === 4) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '5':
					for (let i = 1; i <= 32; i ++) {
						if (i === 5) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '6':
					for (let i = 1; i <= 32; i ++) {
						if (i === 6) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '7':
					for (let i = 1; i <= 32; i ++) {
						if (i === 7) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '8':
					for (let i = 1; i <= 32; i ++) {
						if (i === 8) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '9':
					for (let i = 1; i <= 32; i ++) {
						if (i === 9) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '10':
					for (let i = 1; i <= 32; i ++) {
						if (i === 10) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '11':
					for (let i = 1; i <= 32; i ++) {
						if (i === 11) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '12':
					for (let i = 1; i <= 32; i ++) {
						if (i === 12) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '13':
					for (let i = 1; i <= 32; i ++) {
						if (i === 13) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '14':
					for (let i = 1; i <= 32; i ++) {
						if (i === 14) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '15':
					for (let i = 1; i <= 32; i ++) {
						if (i === 15) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '16':
					for (let i = 1; i <= 32; i ++) {
						if (i === 16) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '17':
					for (let i = 1; i <= 32; i ++) {
						if (i === 17) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '18':
					for (let i = 1; i <= 32; i ++) {
						if (i === 18) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '19':
					for (let i = 1; i <= 32; i ++) {
						if (i === 19) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '20':
					for (let i = 1; i <= 32; i ++) {
						if (i === 20) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '21':
					for (let i = 1; i <= 32; i ++) {
						if (i === 21) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '22':
					for (let i = 1; i <= 32; i ++) {
						if (i === 22) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '23':
					for (let i = 1; i <= 32; i ++) {
						if (i === 23) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '24':
					for (let i = 1; i <= 32; i ++) {
						if (i === 24) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '25':
					for (let i = 1; i <= 32; i ++) {
						if (i === 25) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '26':
					for (let i = 1; i <= 32; i ++) {
						if (i === 26) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '27':
					for (let i = 1; i <= 32; i ++) {
						if (i === 27) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '28':
					for (let i = 1; i <= 32; i ++) {
						if (i === 28) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '29':
					for (let i = 1; i <= 32; i ++) {
						if (i === 29) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '30':
					for (let i = 1; i <= 32; i ++) {
						if (i === 30) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '31':
					for (let i = 1; i <= 32; i ++) {
						if (i === 31) continue
						this[eval(['isChapter' + i])] = false
					}
					break
				case '32':
					for (let i = 1; i <= 32; i ++) {
						if (i === 32) continue
						this[eval(['isChapter' + i])] = false
					}
					break
			}
		}
	},
	components: {
		catalogue,
		chapter1,
		chapter2,
		chapter3,
		chapter4,
		chapter5,
		chapter6,
		chapter7,
		chapter8,
		chapter9,
		chapter10,
		chapter11,
		chapter12,
		chapter13,
		chapter14,
		chapter15,
		chapter16,
		chapter17,
		chapter18,
		chapter19,
		chapter20,
		chapter21,
		chapter22,
		chapter23,
		chapter24,
		chapter25,
		chapter26,
		chapter27,
		chapter28,
		chapter29,
		chapter30,
		chapter31,
		chapter32
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
		overflow-y: auto;
	}
	> article {
		flex-grow: 1;
		min-width: 600px;
		height: 100vh;
		overflow-y: auto;
	}
}
</style>
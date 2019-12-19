<template>
	<div class="App">
		<aside>
			<catalogue/>	
		</aside>
		<article>
			<chapter1/>
			<chapter2/>
		</article>
	</div>
</template>

<script>
import catalogue from './components/catalogue'
import chapter1 from './components/chapter1'
import chapter2 from './components/chapter2'
export default {
	name: 'App',
	components: {
		catalogue,
		chapter1,
		chapter2
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
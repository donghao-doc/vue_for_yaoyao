<template>
	<div class="App">
		<aside>
			<catalogue/>	
		</aside>
		<article></article>
	</div>
</template>

<script>
import catalogue from './components/catalogue'
export default {
	name: 'App',
	components: {
		catalogue
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
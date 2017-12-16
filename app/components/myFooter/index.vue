<template>
	<div class='container'>
		<router-link to='/app' class='link'>page1</router-link>
		<router-link to='/app2' class='link'>page2</router-link>
	</div>
</template>

<style lang='less' scoped>
	.container {
		display: flex;
	}

	.link {
		text-align: center;
		flex-grow: 1;
		color: #fff;
		text-decoration: none;
	}
</style>

<script>
	export default {}
</script>

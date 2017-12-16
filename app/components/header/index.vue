<template>
	<div class='container'>
		<div class='back' @click='goback'>返回</div>
		<div class='title'>header</div>
		<div class='name'>{{username}}</div>
	</div>
</template>

<style lang='less' scoped>
	.container {
		display: flex;
		padding: 12px 20px;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 0 1px #888;
		color: #333;
	}

	.title {
		font-size: 20px;
	}
</style>

<script>
	export default {
		data: function () {
			return {}
		},
		methods: {
			goback: function () {
				this.$router.go(-1)
			}
		},
		props: ['username']
	}
</script>

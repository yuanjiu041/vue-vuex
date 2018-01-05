<template>
	<div class='container'>
		<div class='back' @click='goback'></div>
		<slot class='title'></slot>
		<div class='info'>{{(info && info.title)}}</div>
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

	.back {
		width: 13px;
		height: 24px;
		background-image: url('../../common/imgs/icon_return.png');
		background-repeat: no-repeat;
		background-size: contain;
	}

	.title {
		font-size: 20px;
	}
</style>

<script>
	import { mapState } from 'vuex'

	export default {
		data: function () {
			return {
				name: 'yexun'
			}
		},
		computed: {
			...mapState('common', [
				'pageTitle'
			])
		},
		methods: {
			goback: function () {
				this.$router.go(-1)
			}
		},
		props: ['username']
	}
</script>

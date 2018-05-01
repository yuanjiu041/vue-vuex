<template>
  <div class='layout-container'>
  	<header-top class='header-top'>
  		<router-link to='/app'>app</router-link>
  		<router-link to='/app2'>app2</router-link>
  	</header-top>
    <transition name='my-router'>
    	<router-view class='page-container'></router-view>
    </transition>
  </div>
</template>

<style lang='less' scpoed>
	.layout-container {
		min-height: 100%;

		.header-top {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
		}

		.page-container {
			padding: 68px 32px 52px 32px;
		}

		.footer {
			position: absolute;
			bottom: 0;
			right: 0;
			left: 0;
			background-color: #333;
			color: #fff;
			padding: 12px 20px;
		}
	}

	.my-router-enter-active, .my-router-leave-active {
		position: absolute;
		transition: all 0.5s;
    width: 100%;
	}

	.my-router-enter-to, .my-router-leave {
		opacity: 1;
	}

	.my-router-enter {
		opacity: 0;
		margin-left: 100%;
	}

	.my-router-leave-to {
		opacity: 0;
		margin-left: -100%;
	}
</style>

<script>
	import headerTop from 'components/header'
	import myFooter from 'components/myFooter'

  export default {
  	data: function () {
  		return {
  			username: 'yexun'
  		}
  	},
  	components: {
  		headerTop,
  		myFooter
  	}
  }
</script>

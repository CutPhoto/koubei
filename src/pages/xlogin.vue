<template>
	<div id="login_con">
		<p class="login_header">
			<i class="iconfont icon-arrow-left-copy"></i>
			<span>帮助</span>
		</p>
		<div class="icon_bg"></div>
		<div class="login_input">
			<form action="">
				<input v-model="userN" class="user_text" type="text" name="" id="" value="" placeholder="请输入淘宝账号" />
				<input v-model="pas" type="password" placeholder="请输入密码" />
				<div @click="login" class="login_buttom">登录</div>
			</form>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				userN: '',
				pas: '',
				userData: [{
					id: 1,
					username: 'user',
					password: '123',
					imgsrc: '../../../static/img/in_zhaopian.jpg'
				}, {
					id: 2,
					username: 'name',
					password: '123',
					imgsrc: '../../../static/img/duocitaocang.png'
				}, {
					id: 3,
					username: 'baba',
					password: '123',
					imgsrc: '../../../static/img/xunishifa.png'
				}]
			}
		},
		methods: {
			login() {
				
				const stor = []
				this.userData.map((item) => {
					if(this.userN === item.username && this.pas === item.password) {
						location = "home?username=" + item.username;
						stor.push(item);
						
					}
				})
				localStorage.setItem("getUserMessage",JSON.stringify(stor))

			}
		}
	}
</script>

<style scoped>
	@import url("../assets/iconfont/iconfont.css");
	#login_con {
		padding: 0 20px;
	}
	
	.login_header {
		display: flex;
		justify-content: space-between;
		padding: 10px 0;
	}
	
	.icon_bg {
		width: 100%;
		height: 100px;
	}
	
	.login_input input {
		width: 100%;
		border: 1px solid transparent;
		border-bottom: 1px solid red;
		padding: 0 30px;
		margin-top: 30px;
	}
	
	.login_input .login_buttom {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: orangered;
		color: #fff;
		margin-top: 30px;
		border-radius: 30px;
	}
</style>
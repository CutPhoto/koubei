<template>
	<div class="messageBoard">
		<ul class="messageBoardList">
			<li v-for="a in messageBoardListArr">
				<img :src="a.userImgSrc"/>
				<h2>{{a.useName}}</h2>
				<h3>{{a.content}}</h3>
				<span>{{a.time}}</span>
			</li>
		</ul>
		<el-input @click="ShowInputButton" v-show="isShowInputButton" placeholder="请输入内容" prefix-icon="el-input__icon">
		</el-input>
		<div v-show="!isShowInputButton">
			<el-input placeholder="真爱也有好几种，敢评论的最真情" v-model="text"></el-input>
			<el-button round @click="pushMessageBoardListArr">提交</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'messageBoard',
		data() {
			return {
				messageBoardListArr: [{
					useName: 'zjzhi',
					userImgSrc: '../../static/img/rentouxiang.png',
					content: '龙虎烩，老鼠份你敢来尝尝吗？',
					time: '2018-06-25 09:54'
				}],
				isShowInputButton:true,
				text:''
			};
		},
		computed:{
			getlistArr() {
				var self = this;
				bus.$on('showmessageBoardList', (data) => {
					self.messageBoardListArr = data.messageBoardListArr;
				})
			}
		},
		methods: {
			ShowInputButton(){
				this.isShowInputButton = false;
			},
			pushMessageBoardListArr(){
				this.messageBoardListArr.push({
					useName: 'zjzhi',
					userImgSrc: '../../static/img/rentouxiang.png',
					content: '龙虎烩，老鼠份你敢来尝尝吗？',
					time: '2018-06-25 09:54'
				});
			}
		}
	};
</script>

<style>
</style>
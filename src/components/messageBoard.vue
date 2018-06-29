<template>
	<div class="messageBoard">
		<ul class="messageBoardList">
			<span class="messageBoardListSum">共{{messageBoardListArrLength}}条评价</span>
			<li v-for="a in messageBoardListArr">
				<img :src="a.userImgSrc"/>
				<h2>{{a.useName}}</h2>
				<h4>{{a.content}}</h4>
				<span>{{a.time}}</span>
			</li>
		</ul>
		<el-input @focus="ShowInputButton" v-show="isShowInputButton" placeholder="请输入内容" prefix-icon="el-input__icon">
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
					time: '2018/06/25'
				}],
				isShowInputButton:true,
				text:'',
				messageBoardListArrLength:0
			};
		},
		mounted(){
			this.messageBoardListArrLength=this.messageBoardListArr.length
		},
		updated(){
			this.messageBoardListArrLength=this.messageBoardListArr.length
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
				var nowDate = new Date()
				this.messageBoardListArr.push({
					useName: 'zjzhi',
					userImgSrc: '../../static/img/rentouxiang.png',
					content: this.text,
					time: nowDate.toLocaleDateString() 
				});
			}
		}
	};
</script>

<style scoped>
	.messageBoard .messageBoardList{
		padding-left: 0;
	}
	.messageBoard .messageBoardList li{
		list-style: none;
		font-size: 12px;
		margin-bottom: 20px;
	}
	.messageBoard .messageBoardList li img{
		display: inline-block;
		width:56px;
		height:50px;
		float: left;
		margin: 10px;
	}
	.messageBoard .messageBoardList li span{
		/*margin-left: 55px;*/
	}
	.messageBoard .messageBoardList li h2{
		font-size: 14px;
		color: #000;
		line-height: 28px;
	}
	.messageBoard .messageBoardList li h4{
		font-size: 12px;
		margin: 0;
		color: #000;
	}
	.messageBoardListSum{
		display: inline-block;
		margin-top: 10px;
		line-height: 30px;
		font-size: 14px;
		margin-left: 10px;
	}
</style>
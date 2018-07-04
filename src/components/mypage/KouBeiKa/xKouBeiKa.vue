<template>
	<div id="koubeika_box">
		<div class="koubeika_header">
			<p>
				<i @click="koubeika" class="iconfont icon-arrow-left-copy"></i> 口碑卡
			</p>
			<a class="iconfont icon-diandiandian kb_a"></a>
		</div>
		<div id="kbk_panel">
			<div class="koubeika_panel">
				<div class="traffic_permit">
					<p>这是您使用口碑的第186天，在一个城市2家店留下足迹</p>
					<div class="traffic_permit_box">
						<img src="../../../../static/img/kbk_banner.jpg" alt="" />
					</div>
				</div>
			</div>
			<div class="tianka_tequan">
				<div class="tianka">
					<img src="../../../../static/img/tianka.jpg" alt="" />
				</div>
				<div class="shengji">
					<img src="../../../../static/img/shengji.jpg" alt="" />
				</div>
			</div>
			<div class="jinxuan_quanyi">
				<div class="jingxuan">
					<img src="../../../../static/img/jingxuan.jpg" alt="" />
				</div>
				<ul class="jingxuan_ul">
					<li v-for="n in KaData">
						<div class="list_box">
							<i>6</i>
							<h3>{{n.title}}</h3>
							<span v-text="n.content"></span>
						</div>
						<img :src="n.imgsrc" alt="" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import bus from "../../../bus.js";

	import xLoader from "../xLoader";

	export default {
		data() {
			return {
				KaData: [{
					title: '天猫超市',
					content: '休闲零食100元券',
					imgsrc: '../../../../static/img/tianmao.jpg'
				}, {
					title: '大麦网',
					content: '全场立减20元券',
					imgsrc: '../../../../static/img/damaiwang.jpg'
				}, {
					title: 'in照片',
					content: '12张lomo照片免费打印',
					imgsrc: '../../../../static/img/in_zhaopian.jpg'
				}, {
					title: '饿了么',
					content: '外卖优惠券',
					imgsrc: '../../../../static/img/eleme.jpg'
				}]
			}
		},
		methods: {
			koubeika() {
				bus.$emit("To-KouBieKaPage", {
					isShowKouBeiKaPage: false
				})
			}
		}

	}
</script>

<style scoped>
	#koubeika_box {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #F8F8F8;
		z-index: 1000;
	}
	
	.kbk_panel {
		overflow: hidden;
	}
	
	.koubeika_header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 50px;
		line-height: 50px;
		padding: 0 20px;
		background-color: #3C2D58;
		color: #fff;
	}
	
	.koubeika_header .kb_a {
		color: #fff;
	}
	
	.koubeika_header p i {
		margin-right: 10px;
	}
	
	.traffic_permit {
		background-color: #3C2D58;
	}
	
	.traffic_permit p {
		font-size: 10px;
		text-align: center;
		color: #fff;
	}
	
	.traffic_permit_box {
		padding: 10px 20px
	}
	
	.traffic_permit img {
		width: 100%;
		height: 100px;
	}
	
	.tianka_tequan {
		background-color: #fff;
		padding: 5px 0;
	}
	
	.tianka_tequan .tianka {
		width: 100%;
		height: 40px;
		position: relative;
	}
	
	.tianka_tequan .tianka img {
		width: 200px;
		height: 16px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -8px 0 0 -100px;
	}
	
	.tianka_tequan .shengji {
		padding: 0 20px;
	}
	
	.tianka_tequan .shengji img {
		width: 100%;
		height: 50px;
		background-position: center;
		background-size: cover;
		border-radius: 7px;
	}
	
	.jinxuan_quanyi {
		width: 100%;
		margin-top: 10px;
		background-color: #fff;
	}
	
	.jinxuan_quanyi .jingxuan {
		height: 40px;
		position: relative;
	}
	
	.jinxuan_quanyi .jingxuan img {
		width: 200px;
		height: 16px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -8px 0 0 -100px;
	}
	
	.jingxuan_ul {
		padding: 0 5px;
		overflow: hidden;
	}
	
	.jinxuan_quanyi ul li {
		float: left;
		display: flex;
		font-size: 10px;
		width: 48%;
		height: 80px;
		background-color: #ECECEC;
		padding: 5px 5px;
		margin: 0 0 5px 5px;
		border-radius: 5px;
	}
	
	.jinxuan_quanyi ul li .list_box {
		display: flex;
		flex-direction: column;
	}
	
	.jinxuan_quanyi ul li img {
		width: 67px;
		height: 70px;
	}
</style>
<template>
	<div :style="{
    flex:1,
    overflowX: 'hidden'
    }">
    	<div class="xpanel_t">
    		<div class="xpanel_tt">
    			<p style="color: red;"><i class="el-icon-star-on"></i><span>为你定制</span></p>
    			<p>hi，上午好！为你更新附近白领常去的人气好店</p>
    		</div>
    	</div>
		<a @click="toggleGallery(a.src)" v-for="a in news" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
			<div class="weui-media-box__hd">
				<img class="weui-media-box__thumb" :src="a.src" alt="">
			</div>
			<div class="weui-media-box__bd">
				<h4 class="weui-media-box__title" v-text="a.title"></h4>
				<p ><span :style="{'color':'red','fontSize':'18px'}">{{a.price}}</span> <del>{{a.delprice}}</del></p>
				<p style="line-height: 20px;font-size: 12px;color: red;" v-text="a.textsss"></p>
				<p class="weui-media-box__desc" v-text="a.content"></p>
				<p v-text="a.plpas" :style="{'color':'red','fontSize':'12px'}"></p>
			</div>
		</a>
		<div class="xpan_b"></div>
	</div>
</template>

<script>
	export default {
		name:'dianji',
	
		data() {
			return {
				news: [{
						id: 1,
						title: "老北京饺子坊",
						textsss:"人气82",
						content: "‘你经常关注的老店，正在召唤你’",
						src: require("../../assets/hejie.jpg")
					},
					{
						id: 2,
						title: "单人套餐",
						content: "",
						plpas:"4小时已售1件",
						src: require("../../assets/hejie2.jpg")
						},
					{
						id: 3,
						title: "迷你椰果挞/玉米挞 6个",
						content: "",
						price:"15元",
						delprice:"27元",
						plpas:"2小时已售1件",
						src: require("../../assets/hejie3.jpg")
					},
					{
						id: 4,
						title: "八佰伴(天河北)",
						content: "“很好的店铺，服务态度好”",
						textsss:"人气87",
						
						src: require("../../assets/hejie4.jpg")
					},
					{
						id: 5,
						title: "老北京饺子坊",
						textsss:"人气82",
						content: "‘你经常关注的老店，正在召唤你’",
						src: require("../../assets/hejie.jpg")
					},
					{
						id: 6,
						title: "单人套餐",
						content: "",
						plpas:"4小时已售1件",
						src: require("../../assets/hejie2.jpg")
						},
					{
						id: 7,
						title: "迷你椰果挞/玉米挞 6个",
						content: "",
						price:"15元",
						delprice:"27元",
						plpas:"2小时已售1件",
						src: require("../../assets/hejie3.jpg")
					},
					{
						id: 8,
						title: "八佰伴(天河北)",
						content: "“很好的店铺，服务态度好”",
						textsss:"人气87",
						
						src: require("../../assets/hejie4.jpg")
					}
				],
				isShowGallery: false
			}
		},
		methods: {
			toggleGallery(src) {

				this.bus.$emit('to-xgallery-img-src', {
					src: src,
					isShowGallery: true
				})
			}
		}

	}
</script>

<style>
	.xpanel_t{
		height: 60px;
		background: darkgrey;
		padding-top: 5px;
	}
	.xpanel_t .xpanel_tt{
		height: 60px;
		background: #FFFFFF;
		padding: 10px 0;
	}
	.xpanel_t .xpanel_tt p{
		line-height: 20px;
		text-align: center;
		font-size: 12px;
	}
	.xpan_b{
		height: 50px;
	}
</style>
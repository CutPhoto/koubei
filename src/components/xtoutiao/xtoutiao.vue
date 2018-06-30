<template>
	<div class="toutiao" :data-kaikai="kaikai">
		<div class="toutiao_l">
			<img src="../../assets/toutiao1.jpg" alt="" />
		</div>
		<transition name="slide-fade">
			<div class="toutiao_c" v-if="dddd">
				<span v-text="item.touText" ></span>
			</div>
		</transition>
		<div class="toutiao_r">
			<img :src="item.img" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'top',
		components: {

		},
		data() {
			return {
				items: [{
						id: 1,
						touText: '宝宝掉下床第一时间该怎么办？大多数家长都做错了！',
						img: require('../../assets/toutiao2.jpg')
					},
					{
						id: 2,
						touText: '张老板说吃火锅',
						img: require('../../assets/toutiao1.jpg')
					},
					{
						id: 3,
						touText: '蔡老板说吃大闸蟹',
						img: require('../../assets/toutiao2.jpg')
					}
				],
				num: 0,
				item: {},
				dddd:true

			}
		},
		computed: {
			kaikai() {
				setInterval(() => {

					if(this.num >= 3) {
						this.num = 1
					}
					this.item = this.items[this.num]
					this.num++
				}, 2000)
			}
		}
	}
</script>

<style>
	.toutiao {
		width: 100%;
		height: 60px;
		margin-top: 20px;
		padding: 0 10px;
	}
	
	.toutiao div {
		float: left;
	}
	
	.toutiao .toutiao_l {
		width: 15%;
		height: 60px;
	}
	
	.toutiao .toutiao_l img {
		width: 100%;
	}
	
	.toutiao .toutiao_c {
		width: 60%;
		height: 60px;
		margin: 0 10px;
	}
	
	.toutiao .toutiao_c span {
		font-size: 14px;
		font-weight: bold;
		line-height: 26px;
	}
	
	.toutiao .toutiao_r {
		width: 15%;
		height: 60px;
	}
	
	.toutiao .toutiao_r img {
		width: 100%;
	}
</style>
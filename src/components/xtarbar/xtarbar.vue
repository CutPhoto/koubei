<template>
	<div class="weui-tabbar" :style="{
    height:'53px'
    }">
		<!--<a :href="heitem[0].hrefs" class="weui-tabbar__item weui-bar__item_on" @click="dian1">
			<img :src="heitem[0].src" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label" :style="{color:heitem[0].color}">{{heitem[0].text}}</p>
		</a>
		<a :href="heitem[1].hrefs" class="weui-tabbar__item" @click="dian2">
			<img :src="heitem[1].src" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label" :style="{color:heitem[1].color}">{{heitem[1].text}}</p>
		</a>
		<a :href="heitem[2].hrefs" class="weui-tabbar__item" @click="dian3">
			<img :src="heitem[2].src" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label" :style="{color:heitem[2].color}">{{heitem[2].text}}</p>
		</a>
		<a :href="heitem[3].hrefs" class="weui-tabbar__item" @click="dian4">
			<img :src="heitem[3].src" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label" :style="{color:heitem[3].color}">{{heitem[3].text}}</p>
		</a>-->
		<router-link v-for="(c,index) in heitem" class="weui-tabbar__item"  :to="c.hrefs">
			<img :src="c.src" alt="" class="weui-tabbar__icon" @click="updateNav(index)">
			<p class="weui-tabbar__label" :style="{color:c.color}">{{c.text}}</p>
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				heitem: [{
					'hrefs': '/home',
					'src': require('../../assets/bottom1.jpg'),
					'text': '首页',
					'color': 'orange'
				}, {
					'hrefs': '/nearby',
					'src': require('../../assets/bottom2.jpg'),
					'text': '附近',
					'color': '#cccccc'
				}, {
					'hrefs': '/liftCircle',
					'src': require('../../assets/bottom3.jpg'),
					'text': '生活圈',
					'color': '#cccccc'

				}, {
					'hrefs': '/myhome',
					'src': require('../../assets/bottom4.jpg'),
					'text': '我的',
					'color': '#cccccc'

				}]
			}
		},
		methods: {
			updateNav(index){
//				for(var i=0;i<this.heitem.length;i++){
//					this.heitem[i].src =require(`../../assets/bottom${i+1}.jpg`);
//				    this.heitem[i].color = "#cccccc";
//				}
//				this.heitem[index].src =require(`../../assets/bottom${index+1}${index+1}.jpg`);
//				this.heitem[index].color = "orange";
				
//				var a = this.heitem[i] = {
//					'hrefs': this.heitem[i][hrefs],
//					'src': require(`../../assets/bottom${index+1}${index+1}.jpg`),
//					'text': this.heitem[i][text],
//					'color': 'orange'
//				}
//				this.set(this.heitem,index,{
//					'hrefs': this.heitem[index].hrefs,
//					'src': require(`../../assets/bottom${index+1}${index+1}.jpg`),
//					'text': this.heitem[i][text],
//					'color': 'orange'
//
//				})
				this.heitem.splice(index,1,{
					'hrefs': this.heitem[index].hrefs,
					'src': require(`../../assets/bottom${index+1}${index+1}.jpg`),
					'text': this.heitem[index].text,
					'color': 'orange'

				})
				
			}
			
		}
	}
</script>

<style>

</style>
<template>
	<div class="banners">
		<ul class="banners_x" :style="{left:left+'px'}">
			<li v-for="item in img">
				<a href="#">
					<img :src="item.src" alt="" />
				</a>
			</li>
		</ul>
		{{A}}
	</div>
</template>

<script>
	export default {
		name: 'xbanner',
		data() {
			return {
				img: [{
					id:1,
					src: require('../../assets/banner1.jpg')
				},
				{
					id:2,
					src: require('../../assets/banner2.jpg')
				},
				{
					id:3,
					src: require('../../assets/banner3.jpg')
				},
				{
					id:4,
					src: require('../../assets/banner4.jpg')
				},{
					id:5,
					src: require('../../assets/banner5.jpg')
				},{
					id:6,
					src: require('../../assets/banner6.jpg')
				}],
				
				left:0
			};
		},
		computed:{
			A: function() {
		        setInterval(()=>{
		        	if(this.left<=-1875){
		        		this.left=0
		        	}
		        	this.left-=375
		        }, 2500)
		    }
		},
		methods: {
    
    B: function() {
        console.log('1')
    }
}
		
	};
</script>

<style>
	.banners{
		height: 80px;
		padding: 6px 0;
		width:100%;
		overflow: hidden;
		position: relative;
		background: #CCCCCC;
		
	}
	.banners .banners_x{
		width:700%;
		height: 80px;
		position: absolute;
		top:6px;
	
	}
	.banners .banners_x li{
		float:left;
		width:14.2857143%;
		height: 80px;
		
	}
	.banners .banners_x li img{
		background-size: 100%;
		height: 80px;
		width:100%;
		
	}
</style>
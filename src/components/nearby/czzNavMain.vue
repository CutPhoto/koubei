<template>
	<div class="czzNavMain" :data-computedWidth = "czzNavMainbigBoxWidth" :data-computedIndex = "czzNavIndex">
		<div class="czzNavMainbigBox" :style = "{width:boxWidth+'px',transform:`translate(${left}px,0)`}">
			<div v-for="(d,dIndex) in czzNavList" :style = "{width:divWidth+'px',padding:'10px',backgroundColor:'#ccc'}">
				<router-link to="/shopDetails">
					<czzNavMainPart  :imgSrc = '{src:d.mainMsg[dIndex].mainsrc0,
												hot:d.mainMsg[dIndex].hot,
												kind:d.mainMsg[dIndex].kind,
												title:d.mainMsg[dIndex].maintitle
					}' v-for = "cN in d.mainMsg" />	
				</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import czzNavMainPart from './czzNavMainPart.vue'
	export default{
		props:['czzNavList'],
		components:{czzNavMainPart},
		data(){
			return{
				boxWidth:0,
				divWidth:0,
				left:0
			}
		},
		computed:{
			czzNavMainbigBoxWidth(){
				this.boxWidth = this.czzNavList.length * window.innerWidth;
			},
			czzNavIndex(){
				//监听czzNav里的点击index信息
				this.bus.$on('czzNavMain',(data)=>{
					this.left = -data.changePageIndex * window.innerWidth;
				})
			}
		
		},
		mounted(){
			this.divWidth = window.innerWidth;
	
		}
	}
</script>
<style type="text/css" scoped>
	.czzNavMain{
		width: 100%;
		overflow: hidden;
	
	}
	.czzNavMainbigBox{
		overflow: hidden;
		
	}
	.czzNavMainbigBox>div{
		float:left;
		
	}

</style>
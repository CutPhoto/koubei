<template>
	<div id="czzNearby" @touchstart = "allArrowsFalse" @click.native="changeScroll()">
		<czzHeader :style="{height:'60px'}"/>
		<div :class="{mainContent:true}">
			<czzSpot :style="{ceiling:true}"/>
			<czzNav :czzNavList="czzNavList" />
			<czzNavMain :czzNavList="czzNavList" />
		</div>
	</div>
</template>
<script type="text/javascript">
	import czzHeader from './czzHeader'
	import czzSpot from './czzSpot'
	import czzNav from './czzNav' 
	import czzNavMain from './czzNavMain' 
	export default{
		data(){
			return {
				czzNavList:[
							{title:'为你推荐',mainMsg:[{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'}
							]},
							{title:'休闲娱乐',mainMsg:[{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc1.png'),hot:92,kind:'西式快餐|人均30元'}
							]},
							{title:'此刻最火',mainMsg:[{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc2.png'),hot:92,kind:'西式快餐|人均30元'}
							]},
							{title:'生活便利',mainMsg:[{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc3.png'),hot:92,kind:'西式快餐|人均30元'}
							]},
							{title:'优雅小资',mainMsg:[{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc4.png'),hot:92,kind:'西式快餐|人均30元'}
							]},
							{title:'辣解千愁',mainMsg:[{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc5.png'),hot:92,kind:'西式快餐|人均30元'}
							]},
							{title:'清淡海鲜',mainMsg:[{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc6.png'),hot:92,kind:'西式快餐|人均30元'}
							]},
							{title:'面面俱到',mainMsg:[{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'},
								{maintitle:"肯德基",mainsrc0:require('	../../../static/img/mainsrc0.png'),hot:92,kind:'西式快餐|人均30元'}
							]}
						],
						ceiling:false
				
			}
		},
		components:{ czzHeader, czzSpot, czzNav , czzNavMain },
		methods:{
			allArrowsFalse(e){
				if(e.target.tagName=='I'){

				}else{

					this.bus.$emit('allArrows',{arows:false})
				}
			},
			changeScroll(){console.log(document.getElementById(czzNearby))
				console.log(111)
				// if(window.scrollY >= 60){
				// 	this.ceiling = true
				// }
				// window.addEventListener('scroll',()=>{console.log(window.scrollY)})
			}
		},
		computed:{
			
		}
	}
</script>
<style type="text/css">
	html,body{
		height: 100%;
		margin: 0;
		padding: 0;
	}
	#app{
		height: 100%;
	}
	#czzNearby{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column;
	}
	.ceiling{
		position: fixed;
		top: 60px;
		z-index: 1000;
	}
	.mainContent{
		flex:1;
		overflow-x: hidden;
	}
</style>
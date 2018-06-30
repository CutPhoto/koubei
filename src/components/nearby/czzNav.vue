<template>
	<div class="czzNav">
		{{ulWidth}}
		{{acceptTouchExit}}
		{{acceptAllArrows}}
		<ul :style = "{
			width:width + 'px',
			left:ulPosition+'px'
		}" ref = "ul" @touchstart="startMove($event,ulMove)" @touchend="endMove" @touchmove ="ulMove">
			<li v-for = "(nItem,index) in czzNavList"><a href="#" :class="{'selectionColor':page==index?true:false}" @click = "changePage(index)">{{nItem.title}}</a></li>
		</ul>
		<i :class="{'el-icon-arrow-down':!arrows,'el-icon-arrow-up':arrows}" ref ="arrowClicki" @click = 'arrowClick'></i>
		<czzNavClick :czzNavList = "czzNavList" v-show = "arrows"/>
	</div>
</template>
<script type="text/javascript">
	import czzNavClick from './czzNavClick.vue'
	export default{
		props:['czzNavList'],
		components:{czzNavClick},
		data(){
			return{
				arrows:false,
				width:null,
				ulPosition:0,
				page:0,
				switchMove:false,
				startPosition:0

			}
		},
		computed:{
			ulWidth(){
				this.width = (this.czzNavList.length + 1) * 100 
			},
			acceptTouchExit(){
				this.bus.$on('touchExit',(data)=>{
					if(data.index){
						this.arrows = data.arrows;
						this.page = data.index;
						this.changePage(data.index)
			
					}else{
						this.arrows = data.index;
					}
				})
			},
			acceptAllArrows(){
				this.bus.$on('allArrows',(data)=>{
					this.arrows = data.arrows
				})
			}

		},
		methods:{
			changePage(data){
				this.page = data;
				if(data > 2 && (data < this.czzNavList.length - 2)){
					this.ulPosition = - data * 100 + (window.innerWidth/2)
				}
				if(data <= 2){
					this.ulPosition = 0
				}
				
				//事件分发至czzNavMain
				this.bus.$emit('czzNavMain',{changePageIndex:data})
			},
			startMove(e){
				this.switchMove = true
				this.startPosition=e.changedTouches[0].clientX


			},
			endMove(){
				this.switchMove = false
				
			},
			ulMove(e){
				if(this.switchMove){
					var gapPosition = this.startPosition - e.changedTouches[0].clientX
						
						if(this.ulPosition <= 0){
							this.ulPosition = this.ulPosition - gapPosition
							if(this.ulPosition < -(this.czzNavList.length-1)*100 + window.innerWidth){
								this.ulPosition = -(this.czzNavList.length-1)*100 + window.innerWidth
							}
						}
						if(this.ulPosition > 0){
							this.ulPosition = this.ulPosition + gapPosition
						}
					
				}
			},
			arrowClick(e){
				this.arrows = !this.arrows;
	
				this.bus.$emit('touchShow',{pos:e.clientY})

			}

			
		},
	
	}
</script>
<style type="text/css" scoped>
	.czzNav{
		height: 45px;
		position: relative;
		overflow: hidden;
		line-height: 45px;
		
	}
	.czzNav ul{
		overflow: hidden;
		position: absolute;
		height: 45px;

	}
	.czzNav ul li{
		float:left;
		padding: 6px 0 6px 13px;
		
	}
	a{
		height: 33px;
		line-height: 33px;
		color:#FF6400;
		font-size: 14px;
		display: block;
		/*width: 46px;*/
		border-radius:16px;
		/*border:1px solid #ccc;*/
		padding:0 4px;
		
	}
	i{
		margin-top: 7.5px;
		height:30px;
		line-height: 30px;
		display: block;
		position: absolute;
		z-index: 20;
		top: 0px;
		right: 0px;
		width: 36px;
		background-color: #fff;
	}
	.selectionColor{
		color:#fff;
		background-color: #FF6400;
	}
</style>
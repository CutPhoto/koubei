<template>
	<div class="czzNavClick"  @click = "touchClickShow">
		{{touchShowOn}}
		<ul :style="{top:top+'px'}" >
			<h3>{{title}}</h3>
			<li v-for = "(cN,index) in czzNavList" :data-index="index">{{cN.title}}</li>	
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['czzNavList'],
		data(){
			return{
				title:'选你喜欢的：',
				top:0,
				liIndex:null
			}
		},
		computed:{
			touchShowOn(){
				this.bus.$on('touchShow',(data)=>{
					return this.top = data.pos -45
				})
			},
			
		},
		methods:{
			touchClickShow(e){console.log(123)
				if(e.target.tagName=="LI"){
					var index = e.target.getAttribute("data-index");
					//事件分发至czzNav
					this.bus.$emit('touchExit',{index:index,arrows:false});
					//事件分发至czzNavMain
					this.bus.$emit('czzNavMain',{changePageIndex:index})
				}else{
					this.bus.$emit('touchExit',{index:null,arrows:false})
				}
			}	
		}
	}
</script>
<style type="text/css" scoped>
	.czzNavClick{
		height: 190px;
		width: 100%;
		background-color: #fff;
		font-size: 12px;
		/*position: absolute;
		z-index:10;*/
		
	}
	h3{
		color:#FF6400;
		background-color: #fff;
		flex:100%;
		line-height: 45px;
		height: 45px;
	}
	ul{
		height: 190px;
		display: flex;
		flex-wrap: wrap;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		padding:0 8px;
		margin-top: 10px;
	}
	ul li {
		flex:20%;
		color:#fff;
		margin: 5px;
		padding:0 5px;
		background-color: #FF6400;
		display: inline-block;
		text-align: center;
		height: 45px;
	}
</style>
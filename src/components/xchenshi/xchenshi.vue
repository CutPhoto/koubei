<template>
	<div class="chenshi" :data-dianji="dian" :data-now="hehe" v-show="isShow" :style="{
    position:'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    backgroundColor: '#ffffff',
    zIndex: 1000
}">
		<div class="chenshi_t">
			<i class="el-icon-arrow-left" @click="dele"></i>
			<span>城市选择</span>
		</div>
		<div class="chenshi_tt">
			<input type="text" placeholder="输入城市名、拼音或首字母查询"/>
		</div>
		<div class="chenshi_m">
			<h4>你所在的地区</h4>
			<span>广州</span>
			<h4>历史访问目的地</h4>
			<span>广州</span><span>安平县</span>
			<h4>热门目的地</h4>
			<span>北京</span><span>广州</span><span>杭州</span><span class="houmian">上海</span><span class="houmian">深圳</span>
			<h5>A</h5>
			<p v-for="a in A">
				<a href="#" v-text="a.name"></a>
			</p>
			<h5>B</h5>
			<p v-for="b in B">
				<a href="#" v-text="b.name"></a>
			</p>
			<h5>C</h5>
			<p v-for="c in C">
				<a href="#" v-text="c.name"></a>
			</p>
			<h5>D</h5>
			<p v-for="d in D">
				<a href="#" v-text="d.name"></a>
			</p>
			<h5>E</h5>
			<p v-for="e in E">
				<a href="#" v-text="e.name"></a>
			</p>
			<h5>F</h5>
			<p v-for="f in F">
				<a href="#" v-text="f.name"></a>
			</p>
			<h5>G</h5>
			<p v-for="g in G">
				<a href="#" v-text="g.name"></a>
			</p>
			<h5>H</h5>
			<p v-for="h in H">
				<a href="#" v-text="h.name"></a>
			</p>
			<h5>I</h5>
			<p v-for="i in I">
				<a href="#" v-text="i.name"></a>
			</p>
			<h5>J</h5>
			<p v-for="j in J">
				<a href="#" v-text="j.name"></a>
			</p>
			<h5>K</h5>
			<p v-for="k in K">
				<a href="#" v-text="k.name"></a>
			</p>
			<h5>L</h5>
			<p v-for="l in L">
				<a href="#" v-text="l.name"></a>
			</p>
			<h5>M</h5>
			<p v-for="m in M">
				<a href="#" v-text="m.name"></a>
			</p>
			<h5>N</h5>
			<p v-for="n in N">
				<a href="#" v-text="n.name"></a>
			</p>
			<h5>P</h5>
			<p v-for="p in P">
				<a href="#" v-text="p.name"></a>
			</p>
			<h5>Q</h5>
			<p v-for="q in Q">
				<a href="#" v-text="q.name"></a>
			</p>
			<h5>R</h5>
			<p v-for="r in R">
				<a href="#" v-text="r.name"></a>
			</p>
			<h5>S</h5>
			<p v-for="s in S">
				<a href="#" v-text="s.name"></a>
			</p>
			<h5>T</h5>
			<p v-for="t in T">
				<a href="#" v-text="t.name"></a>
			</p>
			<h5>W</h5>
			<p v-for="w in W">
				<a href="#" v-text="w.name"></a>
			</p>
			<h5>X</h5>
			<p v-for="x in X">
				<a href="#" v-text="x.name"></a>
			</p>
			<h5>Y</h5>
			<p v-for="y in Y">
				<a href="#" v-text="y.name"></a>
			</p>
			<h5>Z</h5>
			<p v-for="z in Z">
				<a href="#" v-text="z.name"></a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'xchenshi',
		data() {
			return {
				xjson:'',
				isShow:false,
				A:[],
				B:[],
				C:[],
				D:[],
				E:[],
				F:[],
				G:[],
				H:[],
				L:[],
				I:[],
				J:[],
				K:[],
				M:[],
				N:[],
				O:[],
				P:[],
				Q:[],
				R:[],
				S:[],
				T:[],
				W:[],
				X:[],
				Y:[],
				Z:[]
			};
		},
		computed:{
			hehe(){
				var self=this
				this.bus.$on('to-xchenshi-json', (data) => {
					// console.log(data)
					self.isShow = data.isShow;
					self.xjson = data.xjson
//					console.log(self.xjson)
				})
				
    		},
    		dian(){
    			
    			for(var i=0;i<this.xjson.length;i++){
    				if(this.xjson[i].pinyin.slice(0,1)=="A"){
    					this.A.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="B"){
    					this.B.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="C"){
    					this.C.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="D"){
    					this.D.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="E"){
    					this.E.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="F"){
    					this.F.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="G"){
    					this.G.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="H"){
    					this.H.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="I"){
    					this.I.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="J"){
    					this.J.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="K"){
    					this.K.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="M"){
    					this.M.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="N"){
    					this.N.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="O"){
    					this.O.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="P"){
    					this.P.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="Q"){
    					this.Q.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="R"){
    					this.R.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="S"){
    					this.S.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="T"){
    					this.T.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="W"){
    					this.W.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="Y"){
    					this.Y.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="Z"){
    					this.Z.push(this.xjson[i])
    				}
    				if(this.xjson[i].pinyin.slice(0,1)=="X"){
    					this.X.push(this.xjson[i])
    				}
    				
    				
    			}
//  			console.log(this.A)
			},
			
		},
		methods: {
    		dele(){
    			this.isShow=false
    		}
		}
		
	};
</script>

<style> 
	.chenshi{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.chenshi_t{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		position: relative;
	}
	.chenshi_t i{
		display: block;
		position: absolute;
		top:12px;
		left:0;
	}
	.chenshi_tt{
		height: 40px;
		width:100%;
		background: #cccccc;

		text-align: center;
	}
	.chenshi_tt input{
		width:90%;
		height: 26px;
		margin-top:5px ;
		border:1px solid #cccccc;
		border-radius: 5px;
		padding-left: 16px;
	}
	.chenshi_m{
		flex:1;
		overflow-x: hidden;
	}
	.chenshi_m h4{
		width: 100%;
		height: 24px;
		line-height: 24px;
		font-size: 12px;
		color:#cccccc;
		padding-left:10px;
	}
	.chenshi_m span{
		display: block;
		width: 100px;
		height: 24px;
		text-align: center;
		line-height: 24px;
		display: inline-block;
		border:1px solid #cccccc;
		background: #FFFFFF;
		margin-left: 10px;
	}
	.chenshi_m .houmian{
		margin-top: 10px;
		
	}
	.chenshi_m h5{
		width: 100%;
		height: 24px;
		line-height: 24px;
		font-size: 12px;
		color:#cccccc;
		padding-left:10px;
		
		border-bottom:1px solid #ACACAC;
		margin-top:5px;	
	}
	.chenshi_m p{
		height: 24px;
		margin-left: 10px;
		border-bottom:1px solid #ccc;
		
	}
	.chenshi_m p a{
		color:#262626;
	}
</style>
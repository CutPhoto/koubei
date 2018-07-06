<template>

	<div class="nav">
		<ul class="nav_x">
			<li class="nav_l">
				<ul class="nav_l_x">
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav1.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav2.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav3.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav4.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav5.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav6.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav7.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav8.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav9.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav10.jpg" alt="" />
						</router-link>
					</li>
				</ul>
			</li>
			<li class="nav_r">
				<ul class="nav_r_x">
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav1.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav2.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav3.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav4.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav5.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav6.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav7.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav8.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav9.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/homeLiRen">
							<img src="../../assets/nav10.jpg" alt="" />
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
        data(){
            return {
                
            }
        },
       components:{
       		
       },
        mounted() {
         
        },
    }
</script>

<style>
	.nav{
		height: 140px;
		width: 100%;
		position: relative;
	}
	
	.nav .nav_x{
		height: 140px;
		width: 200%;
		position: absolute;
		top:0;
		}
	.nav .nav_x .nav_l{
		height: 140px;
		width: 50%;
		float: left;

	}
	.nav .nav_x .nav_l .nav_l_x{
		width: 100%;
		height: 140px;
	}
	.nav .nav_x .nav_l li{
		float: left;
		width: 20%;
	}
	.nav .nav_x .nav_l li a{
		display: block;
		width: 100%;
		height: 70px;
	}
	.nav .nav_x .nav_l li img{
		height: 70px;
		width: 100%;
		background-size:100%;
	}
	.nav .nav_x .nav_r{
		height: 140px;
		width: 50%;
		float: left;
		
	}
	.nav .nav_x .nav_r .nav_r_x{
		width: 100%;
		height: 180px;
	}
	.nav .nav_x .nav_r li{
		float: left;
		width: 20%;
	}
	.nav .nav_x .nav_r li a{
		display: block;
		width: 100%;
		height: 70px;
	}
	.nav .nav_x .nav_r li img{
		height: 70px;
		width: 100%;
		background-size:100%;
	}
</style>
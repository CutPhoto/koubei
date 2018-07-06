<template>
    <div>

        <div class="swiper-container" id="swiper">
            <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,idx) in slideImg" :key="idx">
                <a>
                    <img :src="img" alt="">
                </a>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
 
    </div>
</template>

<script>
	import Swiper from 'swiper'
    export default {
        data(){
            return {
                slideImg:[
                    require('../../assets/banner1.jpg'),
                    require('../../assets/banner2.jpg'),
                    require('../../assets/banner3.jpg'),
                    require('../../assets/banner4.jpg'),
                    require('../../assets/banner5.jpg'),
                    require('../../assets/banner6.jpg'),
                ]
            }
        },
       components:{
       		Swiper
       },
        mounted() {
            setTimeout(function () {
                var swiperObj =  new Swiper('#swiper', {
                    loop: true,
                    pagination: '.swiper-pagination',
                    autoplay: 5000,
                    paginationClickable: true,
                    autoplayDisableOninteraction:false
                });
            }, 5000)
        },
    }
</script>

<style scoped>
    .swiper-container{
       
        height: 80px;
        background: #cccccc;
    }
    .swiper-slide{
        width: 100%;
        height: 100%;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
</style>


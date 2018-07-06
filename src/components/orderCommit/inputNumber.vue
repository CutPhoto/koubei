<template>
  <div :style="{float:'right',height:'20px',lineHeight:'20px',padding:'0 15px',marginTop:'10px'}">
      {{updatadNum}}
      <span @click = "inputQty" class="jia">-</span>
      <input type="number" name="inputNumber" v-model = "num1" min="0" max="10">
      <span @click = "inputQty" class="jian">+</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      };
    },
    computed:{

      updatadNum(){
          if(this.num1 <1){
            this.num1 = 0
          }else if(this.num1 > 10){
            this.num1 = 10
          }
          // console.log(this.num1)
      },
      
    },
    methods:{
      inputQty(e){
        if(e.target.className=='jia'){
          --this.num1
        }else if(e.target.className=='jian'){
          ++this.num1
        }
        if(this.num1>=0){
          this.$emit('emitQty',this.num1)
        }
      }
    }
  };
</script>
<style type="text/css" scoped>
  input{
    width: 60px;
    height: 30px;
    text-align: center;
  }
  span{
    height: 30px;
    width: 30px;
    text-align: center;
    border:1px solid #ccc;
    line-height: 30px;
    padding: 0;
  }
</style>
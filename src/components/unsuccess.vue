<template>

  <div class="bgbox">
    <section class="sec">
      <div class="top">
        <p>提交失败</p>

        <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
      </div>
      <div class="chengg"></div>
      <div class="congra">
        <p>抱歉  提交失败</p>
      </div>

      <div class="foot">
        <router-link :to="{name:'shop'}"><p>再试一次</p></router-link>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'success',
    methods:{
      back(){
        localStorage.car=JSON.stringify(this.car);
        this.$router.go(-1);
      },
    },
  }
</script>
<style scoped lang="scss">
  .loading{
    width: 100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 99;
    background: url("/static/img/loading.gif") no-repeat center;
    background-size: 60%;
  }
  body,html,.bgbox,section{
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
  }
  .sec{
    background-image: url("../assets/img/bg3.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .top{
    width: 100%;
    height:2.9rem;
    padding-top:.4rem;
    position:relative;
  p{
    text-align: center;
    color:white;
    font-size: .34rem;
  }

  .return{
    position: absolute;
    top:.4rem;
    left:.24rem;
    width: .38rem;
    height: .38rem;
  }
  }
  .chengg{
    width: 3.3rem;
    height: 3.49rem;
    background-image: url("../assets/img/tjsb.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:0;
    right:0;
    margin-left: auto;
    margin-right: auto;
    bottom:6.2rem;
  }
  .congra{
    width: 3.38rem;
    height: .87rem;
    background-image: url("../assets/img/gongxi.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:0;
    right:0;
    margin-left: auto;
    margin-right: auto;
    bottom:5.24rem;
  p{
    width: 3.38rem;
    height: .87rem;
    text-align: center;
    font-size: .28rem;
    color:#f22a8d;
    line-height: .87rem;
    font-weight: bold;
  }
  }


  .foot{
    width: 5.9rem;
    height: 1rem;
    background-image: url("../assets/img/bottom.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:0;
    right:0;
    margin-left: auto;
    margin-right: auto;
    bottom:1.85rem;
  p{
    width: 5.9rem;
    height: 1rem;
    text-align: center;
    font-size: .28rem;
    color: white;
    line-height: 1rem;
    font-weight: bold;
  }
  }

</style>

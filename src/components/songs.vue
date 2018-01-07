<template>
  <div class="bgbox">
    <section v-if="this.status" class="sec">
      <div class="top">
        <p>CAOIU YABS</p>
        <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
        <img src="../assets/img/pic_11.png" alt="">
        <section>
          <p>CAOIU YABS - 大陆女歌手</p>
          <p>
            <i>歌曲 92</i>
            <i>MV 24 </i>
          </p>
          <p>本月点击量：49080</p>
        </section>
      </div>
      <div class="center" >
        <ul>
          <li @click="go">
            <div>
              <p>01   歌手与演员-李荣浩</p>
              <p>4''46'</p>
            </div>
            <img src="../assets/img/sgif_pic2_14.png" alt="">
          </li>
        </ul>
      </div>
    </section>
    <section class="loading" v-else></section>
  </div>
</template>
<script>
  export default {
    name: 'songs',
    data(){
      return{
        status:false,
      }
    },
    mounted(){
      setTimeout(()=>{
        this.status=true;
      },1000)
    },
    methods:{
      go(){
        this.$router.push({name:'ordersongs'})
      },
      back(){
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
    background-image:url("../assets/img/song-back.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .top{
    width: 100%;
    height:4.62rem;
    padding:.4rem .24rem;
    position:relative;
  p{
    text-align: center;
    color:white;
    font-size: .4rem;
    font-weight: bold;
  }
  .return{
    position: absolute;
    top:.4rem;
    left:.24rem;
    width: .38rem;
    height: .38rem;
  }
  img:nth-of-type(2){
    width: 1.43rem;
    height: 1.37rem;
    border-radius: .05rem;
    position: absolute;
    top:1.56rem;
    left:.37rem;
  }
  section{
    width: 5.04rem;
    height:1.37rem;
    margin-top: .6rem;
    margin-left: 2.2rem;
    p{
      font-size: .24rem;
      text-align:left;
      margin-bottom: .2rem;
      i{
        margin-left: .4rem;
        margin-right:.4rem;
      }
    }
    p:nth-of-type(3){
      margin-top: .25rem;
    }
  }
  }
  .center{
    position: fixed;
    bottom:.15rem;
    left:.24rem;
    width:7rem;
    height: 9.35rem;
    overflow: hidden;
    touch-action: none;
    padding:.02rem;
  ul{
    width: 100%;
  li{
    width: 100%;
    height: 1.18rem;
    box-sizing: border-box;
    border-bottom: .02rem dotted #c0c0c0;
    padding-top: .2rem;
    position:relative;
  div{
    width:100%;
    p{
      text-align: left;
      padding: 0;
    }
    p:nth-child(1){
      color: #89919e;
      font-size: .26rem;
      margin-bottom: .1rem;
    }
    p:nth-child(2){
      color: #c6c6c6;
      font-size: .24rem;
      margin-left: .4rem;
    }
  }
    img{
      width: .48rem;
      height: .48rem;
      border-radius: 50%;
      position: absolute;
      top:0;
      bottom:0;
      margin-top: auto;
      margin-bottom: auto;
      right:0;
    }
  }
  }

  }


</style>

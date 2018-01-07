<template>

  <div class="bgbox">
    <section v-if="this.status" class="sec">
      <div class="top">
        <p>游戏</p>
        <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
      </div>
      <ul class="center">
         <li @click="next"><img src="../assets/img/game_content_03.png" alt=""><p>真心话大冒险</p></li>
         <li ><img src="../assets/img/game_content_05(1).png" alt=""><p>狼人杀</p></li>
         <li @click="turn"><img src="../assets/img/game_content_05.png" alt=""><p>脑筋急转弯</p></li>
         <li ><img src="../assets/img/game_content_03.png" alt=""><p>谁是卧底</p></li>
         <li @click="gesticulate"><img src="../assets/img/game_content_05.png" alt=""><p>你来比划我来猜</p></li>
         <li><img src="../assets/img/game_content_03.png" alt=""><p>真心话大冒险</p></li>


      </ul>
    </section>
    <section class="loading" v-else></section>
  </div>
</template>
<script>
  export default {
    name: 'game',
    data(){
      return{
        status:false,
        activetype:0,
      }
    },
    mounted(){
      setTimeout(()=>{
        this.status=true;
      },1000)
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
        next(){
            this.$router.push({name:'risk'})
        },
        turn(){
            this.$router.push({name:'brain'})
        },
        gesticulate(){
            this.$router.push({name:'guess'})
        }

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
    background:#f0eefa;
    position: relative;
  }
  .top{
    width: 100%;
    height:2.9rem;
    background-image: url("../assets/img/singer_bg_01 (1).png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top:.4rem;
    position:relative;
  p{
    text-align: center;
    color:white;
    font-size: .28rem;
  span{
    font-size: .32rem;
    font-weight:bold;
  }
  }


  .return{
    position: absolute;
    top:.4rem;
    left:.24rem;
    width: .38rem;
    height: .38rem;
  }
  }
  .center{
    position: fixed;
    top:1.67rem;
    left:.24rem;
    width:7rem;
    height:11.52rem;
    background: white;
    overflow: hidden;
    touch-action: none;
    border-radius: .2rem;
    box-shadow: 0 0 .03rem rgba(0,0,0,0.2);
    padding:0 .25rem;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    li{
      width: 3.03rem;
      height:3.03rem;
      margin-top: .45rem;
      box-shadow: 0 0 .2rem rgba(246,32,137,0.2);
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
      p{
        height:.3rem;
        width:100%;
        position: absolute;
        left:0;
        text-align: center;
        bottom: .5rem;
        font-size: .24rem;
        color: black;
      }

  }
  }



</style>

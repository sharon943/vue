<template>
  <section>
      <div class="top">
         <div class="back" @click="$router.go(-1)">
           <img src="../assets/img/back.png">
         </div>
         <div class="title">
           <div>你还要我怎样－薛之谦</div>
           <div>·· To live video ··</div>
         </div>
      </div>
      <div class="con">
        <div class="con1">
          <img src="../assets/img/5_pic.png" alt="">
        </div>
        <div class="con2">
          <div>
            你还要我怎样－薛之谦~
          </div>
          <div></div>
          <div>
            留住时尚的影子，把街拍变成插画留住时尚的影子，把街拍变成插画...
          </div>
          <div>
            <div class="one">
                <img src="../assets/img/video.png" alt="">
                32947参与
            </div>
            <div class="two">
              <img src="../assets/img/star.png" alt="">
              92478点歌
            </div>
          </div>
          <div>
            <img src="../assets/img/img1.png" alt="">
            <img src="../assets/img/img2.png" alt="">
            <img src="../assets/img/img3.png" alt="">
          </div>
          <div>
            <img @click="go" src="../assets/img/dian.png" alt="">
            <img src="../assets/img/pk.png" alt="">
          </div>
        </div>
      </div>
      <div class="bottom">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div>
  </section>  
</template>

<script>
export default {
    data(){
      return{
       
      }
    },
    computed:{
        
       
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        go(){
          this.$router.push({name:'orderdsongs'});
        }

    },
}

</script>
<style scoped lang="scss">
    section{
        display:block;
        width: 100%;
        height: 100%;
        position: relative;
        background:url('../assets/img/bg5.png') no-repeat center;
        background-size:cover;
    }
    .top{
      width:100%;
      height:2.58rem;
      position: relative;
      .back{
        position: absolute;
        left:.27rem;
        top:.69rem;
        width:.2rem;
        height:.38rem;
        img{
          display:block;
          width:100%;
          height:100%;
        }
      }
      .title{
        width:100%;
        position: absolute;
        left:0;
        top:1.42rem;
        div{
          width:100%;
          color:#fff;
          font-size:.28rem;
          text-align:center;
        }
        div:nth-child(2){
          line-height:.48rem;
        }
      }
    }
    .con{
      width:5.85rem;
      height:calc(100vh - 4.65rem);
      background:#fff;
      margin:0 auto;
      border-radius:.1rem;
      overflow:hidden;
      .con1{
        width:5.83rem;
        height:3.93rem;
        margin:0 auto;
        padding-top:.01rem;
        background:url('../assets/img/bg5_1.png') no-repeat center;
        overflow:hidden;
        img{
          display:block;
          width:100%;
          height:100%;
        }
      }
      .con2{
        padding:.33rem .23rem 0 .23rem;
        div:nth-child(1){
          height:auto;
          width:auto;
          color:#353a41;
          font-size:.28rem;
        }
        div:nth-child(2){
          width:.55rem;
          height:.02rem;
          margin-top:.12rem;
          background:url('../assets/img/line2.png') no-repeat center;      
        } 
        div:nth-child(3){
          margin-top:.09rem;
          line-height:.3rem;
          font-size:.24rem;
          color:#3b3b3b;
        }
        div:nth-child(4){
          margin-top:.24rem;
          height:.48rem;
          width:100%;
          line-height:.48rem;
          color:#3b3b3b;
          font-size:.24rem;
          display:flex;
          .one,.two{
            width:50%;
            height:100%;
            display:flex;
            font-size:.24rem;
            color:#3b3b3b;
            img{
              width: .38rem;
              height:.48rem;
              display:block;
              margin-right:.13rem;
            }
          }
          .two{
            background:none;
            margin:0;
            img{
              width: .53rem;
              height:.48rem;
              display:block;
              margin-right:.07rem;
            }
          }
        }
        div:nth-child(5){
          margin-top:.3rem;
          display:flex;
          img{
            width:1.04rem;
            height:1.04rem;
            display:block;
            margin-right:.2rem;
            border-radius:.1rem;
          }
        }
        div:nth-child(6){
          width:100%;
          height:.7rem;
          margin-top:.33rem;
          display:flex;
          img{
            width:2.48rem;
            height:.7rem;
            display:block;
            margin-right:.32rem;
          }
        }
      }
    }
    .bottom{
      width:100%;
      height:2.07rem;
      ul{
        display:block;
        width:2.36rem;
        height:.17rem;
        margin:0 auto;
        margin-top:.84rem;
        display:flex;
        justify-content:space-between;
        li{
          display:block;
          width:.17rem;
          height:.17rem;
          border-radius:50%;
          background:#fff;
        }
      }
    }

    
   
   
 
</style>

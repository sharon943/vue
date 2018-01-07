<template>

  <div class="bgbox">
    <section class="sec">
      <div class="top">
        <p>· 个人中心 ·</p>
        <p>GEREN ZHONG XIN</p>
        <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
      </div>
      <div class="center">
          <P>甲壳虫</P>
          <p>DAZHONG JIA KE CHONG</p>
          <p>99869B767</p>
        <div class="two">
            <div @click="status=false">
                <p>2</p>
                <p>我的歌单</p>
            </div>
            <div @click="status=true">
                <p>{{order.length}}</p>
                <p>我的订单</p>
            </div>
        </div>
        <iscroll-view class="list" @scrollStart="log" ref="iscroll" :options="{preventDefault: false}">
           <div class="title">{{status? '我的订单':'我的歌单'}}</div>
           <ul v-if="status==true">
             <li v-for="(r,index) in order" @click="next(r.id)">
               <p>{{r.status}}{{r.nub}}</p>
               <p>{{r.time}}</p>

             </li>
           </ul>
          <ul v-else>
            <li>
              <p>歌手与演员-李荣浩</p>
              <p>4''46'</p>
            </li>
          </ul>
        </iscroll-view>
        <img src="../assets/img/yxtx.png" alt="" class="head">
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'center',
    data(){
      return {
          order:[],
          status:true,
      }

    },
    beforeMount(){
      this.$http.post('/home/getorder.php').then(mess=>{
          this.order=mess.body;
          console.log(this.order);
        this.$refs.iscroll.refresh();
      })

    },

    methods:{
      back(){
        this.$router.go(-1);
      },
      log (iscroll) {
        console.log(iscroll)
      },
      next(id){
          this.$router.push({name:'detail',query:{id}});
      }
    },
    watch:{
      status(){
        this.$refs.iscroll.refresh();
      },

    }

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
    background-image:url("../assets/img/bg4.jpg");
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
  }
  p:nth-of-type(1){
    font-size: .28rem;
  }
  p:nth-of-type(2){
    font-size: .24rem;
    margin-top: .12rem;
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
    width: 7.19rem;
    height: 10.63rem;
    position: absolute;
    left:0;
    right:0;
    margin-left: auto;
    margin-right: auto;
    bottom:.22rem;
    background-image: url("../assets/img/grzx.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 1.23rem .2rem 0 .2rem;
    position:relative;
    p{
    padding:0 .23rem;
    text-align: right;
      font-size: .26rem;
      color:#22b0fc;
    }
    p:last-child{
      font-size: .3rem;
      color: black;
      margin-bottom: .4rem;
    }
    .two{
      margin-top:.37rem;
      width:100%;
      height:1.28rem;
      display: flex;
      justify-content: space-between;
        div{
           width: 48%;
            height: 100%;
          display: flex;
          p{
            height:100%;
            line-height: 1.28rem;
          }
          p:nth-child(1){
            color: #ff2888;
            font-size: .56rem;
            font-weight: bold;
          }
          p:nth-child(2){
            color: #22b0fc;
            font-size: .4rem;
           }
        }
        div:nth-child(1){
            background-image: url("../assets/img/yxgz.png");
            background-size: 100% 100%;

        }
        div:nth-child(2){
            background-image: url("../assets/img/yxdd.png");
            background-size: 100% 100%;
        }
    }
    .list{
      width: 100%;
      height:6.42rem;
      margin-top: .36rem;
      overflow: hidden;
      touch-action: none;
      .title{
        height: .3rem;
        color: #f81f86;
        font-size: .3rem;
        margin-bottom: .3rem;
      }
      ul{
        width: 100%;
        li{
          width: 100%;
          height: 1.18rem;
          box-sizing: border-box;
          border-bottom: .02rem dotted #c0c0c0;
          padding-top: .2rem;
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
          }
        }
      }
    }
  .head{
    width: 1.65rem;
    height: 1.65rem;
    border-radius: 50%;
    position: absolute;
    top:-.76rem;
    right:.3rem;
  }
  }


</style>

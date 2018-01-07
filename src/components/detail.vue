<template>

  <div class="bgbox">
    <section v-if="this.status" class="sec">
      <div class="top">
        <p>· 订单详情 ·</p>
        <p>共2件</p>
        <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
      </div>
      <iscroll-view class="center" :options="{preventDefault: false}">

        <ul>
          <li v-for="a in orders">
            <div class="left">
              <img :src="a.img" alt="">
            </div>
            <div class="right">
              <div class="title">{{a.name}}</div>
              <div class="ad">可以让你飞的鸡尾酒<span>300ml</span> </div>
              <div class="count">

                <span>{{a.count}}{{a.unit}}</span>

                <div class="per-price">
                  <p>{{a.price*a.count}}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>

      </iscroll-view>

      <div class="bottom">
        <div class="total">
          <img src="../assets/img/total_03.png" alt="">
          <div>{{total}}</div>
        </div>
        <div class="foot">
          <img src="../assets/img/button_03.png" alt="">
        </div>
      </div>
    </section>
    <section class="loading" v-else></section>
  </div>
</template>
<script>
  export default {
    name: 'detail',
    data(){
      return{
        orders:[],
        status:false,
      }
    },
    computed:{
      total(){
          var t=0;
          this.orders.forEach(val=>{
              t+=val.count*val.price;
          })
        return t;
      }
    },
    beforeMount(){
        let id=this.$route.query.id;
        this.$http.post('/home/detail.php',{id:id}).then(mess=>{
            this.orders=mess.body;
        })
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

  span{
    font-size: .32rem;
    font-weight:bold;
  }
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
    position: fixed;
    top:1.67rem;
    left:.24rem;
    width:7rem;
    height: 8.86rem;
    background: white;
    overflow: hidden;
    touch-action: none;
    border-radius: .2rem;
    box-shadow: 0 0 .03rem rgba(0,0,0,0.2);
  ul{
    padding:0 .2rem;
  li{
    width:100%;
    height:2.7rem;
    border-bottom: .02rem dotted #ccc;
    display: flex;
    justify-content: space-between;
    padding:.33rem 0;
  .left{
    width: 40%;
    text-align: center;
  img{
    width: 2.45rem;
    height:2rem;
  }
  }
  .right{
    width: 60%;
  .title{
    height: .4rem;
    font-size: .24rem;
    line-height: .4rem;
  img{
    width: .18rem;
    height:.22rem;
    margin-left: .2rem;
  }
  }
  .ad{
    width: 3.95rem;
    height: .36rem;
    line-height: .36rem;
    font-size: .24rem;
    color: #000;
    margin-top:.12rem;
    padding-bottom: .18rem;
    border-bottom:.02rem dotted #ccc;
  span{
    margin-left: .37rem;
    color: #a2a2a2;
  }
  }
  .count{
    margin-top: .3rem;
    position:relative;
  span{
    display: inline-block;
    height: .36rem;
    line-height: .36rem;
    text-align: center;
    vertical-align: center;
    margin-right: .14rem;
    font-size: .3rem;

  }

  .per-price{

    height:100%;
    display: flex;
    position:absolute;
    right:0;
    bottom:0;
  p{
    height: 100%;
    font-size: .4rem;
    color:#fe318e;
    line-height: .46rem;
  }
  div{
    width: .54rem;
    height:100%;
    background-image: url("../assets/img/rmb_03.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  }
  }
  }
  }
  }
  .empty{
    width: 45%;
    height:75%;
    margin:0 auto;
    margin-top:30%;
    padding-left:10%;
  img{
    width: 100%;
    height:90%;
  }
  p{
    width: 100%;
    height: 10%;
    text-align: center;
    color: #FF318E;
    font-size: .3rem;
  }
  }
  }
  .bottom{
    width: 100%;
    height:calc(100vh - 10.53rem);
    position: absolute;
    left:0;
    bottom: 0;
    padding-top:.66rem;
  .total{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height:.48rem;
    padding-right:.24rem;
    margin-bottom: .69rem;
  img{
    height:.48rem;
    margin-right: .05rem;
  }div{
     height: .48rem;
     font-size: .48rem;
     color: #ff318e;
     line-height: .5rem;
     font-weight: bold;
   }
  }
  .foot{

    width: 5.73rem;
    height: .87rem;
    margin:0 auto;
  img{
    width:100%;
    height:100%;
  }

  }
  }

</style>

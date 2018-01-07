<template>
  <div class="bgbox">
    <section v-if="status">
    <div class="top">
      <div class="type">
        <span v-for="(item,index) in shop" :class="{active:activeindex===index}" @click="activeindex=index">{{item.name}}{{item.goods.length}}</span>

      </div>
      <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
    </div>
    <iscroll-view class="container" @scrollStart="log" ref="iscroll" :options="{preventDefault: false}">

      <ul>
        <li v-for="(val,index) in activearr">
          <div class="left">
            <img :src="val.img" alt="">
          </div>
          <div class="right">
            <div class="title">{{val.name}}
              <img v-for="n in Number(val.hot)" src="../assets/img/fire.png" alt="">
            </div>
            <div class="price"><span>￥</span><span>{{val.price}}</span><span>/{{val.unit}}</span></div>
            <div class="count">
              <span @click="val.count=val.count==0?0:val.count-1">-</span>
              <span>{{val.count}}</span>
              <span @click="val.count++">+</span>
            </div>
          </div>
        </li>
      </ul>
      </iscroll-view>
    <div class="bottom">
      <div class="sel">
        <div class="yix">已选</div>
        <div class="tab" v-for="row in car">{{row.name}}{{row.count}}/{{row.unit}}</div>

        <img v-if="car.length<=2" >
        <img  v-else src="../assets/img/point3_03.png" alt="">

      </div>
      <div class="ok" @click="save">
        <router-link :to="{name:'car'}">· 选好了 ·</router-link>
      </div>
      <div class="total">
        <span>合计：</span>
        <span>{{total}}</span>
        <span>RMB</span>
      </div>
    </div>

  </section>
    <section class="loading" v-else></section>
  </div>
</template>
<script>
  export default {
    name: 'shop',
    data(){
      return{
         shop:[],
        activeindex:0,
        status:false
      }
    },
    computed:{
        activearr(){
              return this.shop[this.activeindex].goods;
        },
      car(){

            let car=[]
            this.shop.forEach(val=>{
                val.goods.forEach(item=>{
                    if(item.count>0){
                        car.push(item);
                    }
                })
              })
               return car;

      },
      total(){
          var t=0;
        this.car.forEach(val=>{
            t+=val.count*val.price;

        })
        return t;
      }
    },
    methods:{
      log (iscroll) {
        console.log(iscroll)
      },
      save(){
        localStorage.car=JSON.stringify(this.car);
      },
    back(){
    localStorage.car=JSON.stringify(this.car);
    this.$router.go(-1);
    },
    },
    mounted(){
       this.$http.post('/home/getfood.php').then((mess)=>{
       this.shop=mess.body;
       if(localStorage.car){
        var carr=localStorage.car
           var arr=JSON.parse(carr);
           arr.forEach(val=>{
               this.shop.forEach(item=>{
                   item.goods.forEach(v=>{
                       if(v.id==val.id){
                           v.count=val.count;
                       }
                   })
               })
           })
       };
       setTimeout(()=>{
         this.status=true;
       },1000)
    })
    },
    watch:{
      activeindex(){
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
      .top{
        width: 100%;
        height: 2.3rem;
        background-image: url("../assets/img/bg1.png");
        background-position: top;
        background-size: 100%;
        position: fixed;
        top:0;
        left:0;
        z-index: 9;
        position: relative;
      .type{
        width: 3.1rem;
        height: .7rem;
        background: #fff;
        position: absolute;
        top:0;
        left:0;
        bottom: 0;
        right:0;
        margin:auto;
        border-radius: .3rem;
       span:nth-of-type(1){
        width: 1.57rem;
        height: .54rem;
         line-height: .54rem;
        position: absolute;
        top:.08rem;
        left:.08rem;
        display: block;
        font-size: .24rem;
         text-align: center;
      }
      span:nth-of-type(2){
        width: 1.57rem;
        height: .54rem;
        position: absolute;
        top:.08rem;
        right:.08rem;
        color: #51576a;
        font-size: .24rem;
        text-align: center;
        line-height: .54rem;
      }
      span.active{
        background: #ff348d;
        border-radius: .27rem;
      }
      }
  img{
    position: absolute;
    top:0;
    bottom: 0;
    margin-top:auto;
    margin-bottom:auto;
    left:.24rem;
    width: .38rem;
    height: .38rem;
  }
      }
  .container{
    width: 100%;
    height:8.7rem;
    touch-action: none;
    position: fixed;
    top: 2.3rem;
    left: 0;
    overflow: hidden;
    margin: auto;
    padding-top: .23rem;
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
        width: 50%;
        text-align: center;
        img{
          width: 2.45rem;
          height:2rem;
        }
      }
      .right{
        width: 50%;
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
      .price{
        height: .46rem;
        line-height: .46rem;
        font-size: .28rem;
        color: #FF356C;
        margin-top:.2rem;
        span:nth-child(2){
        font-size: .3rem;
        font-weight: bold;
      }
      }
      .count{
        margin-top: .3rem;
        span{
        display: inline-block;
        height: .36rem;
        line-height: .36rem;
        text-align: center;
        vertical-align: center;
        margin-right: .14rem;
        font-size: .3rem;

      }
      span:nth-of-type(2){
        width: .8rem;
        height:.38rem;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: .18rem;
      }

      span:nth-of-type(1){
        width: .36rem;
        height: .36rem;
        border-radius: 50%;
        background: #ccc;
        color: #fff;
      }
      span:nth-of-type(3){
        width: .36rem;
        height: .36rem;
        border-radius: 50%;
        background: #33affe;
        font-size: .4rem;
        color: #fff;
        line-height: .31rem;
      }
      }

      }
    }
  }

  }
      .bottom{
        position: fixed;
        height: 2.43rem;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 999;
        background: #fff;

      .sel{
        width: 100%;
        height: .42rem;
        margin-top: .42rem;
        display: flex;
        align-items:center;
        padding:0 .22rem;
      .yix{
        font-size:.28rem;
        width: .7rem;
        height:.42rem;
        line-height: .42rem;
        text-align: center;
      }
      div.tab{
        padding:0 .06rem;
        background: #E12E7E;
        font-size: .2rem;
        line-height: .42rem;
        text-align: center;
        font-weight: bold;
        color: #fff;
        margin-left: .2rem;
        width: auto;
        border-radius: .1rem;
      }
      img{
        display: block;

        margin-left: .35rem;
        border:0;
      }

      }

      .ok{
        width: 3.59rem;
        height: .87rem;
        background-image: url('../assets/img/done.png');
        background-size: cover;
        position: absolute;
        right: .23rem;
        bottom: .17rem;
      a{
        display: block;
        width: 100%;
        height: 100%;
        font-size: .34rem;
        color: white;
        text-align: center;
        line-height: .87rem;
      }
      }
      .total{
        width: 45%;
        height: .87rem;
        position: absolute;
        left: 0.25rem;
        bottom: .17rem;
        color: #ff348B;
        display:flex;
        align-content:flex-end;

      span:nth-child(1){
        font-size: .3rem;
        font-weight: bold;
        line-height: .9rem;
      }
      span:nth-child(2){
        font-size: .42rem;
        font-weight: bolder;
        line-height: .87rem;
      }
      span:nth-child(3){
        font-size: .2rem;
        font-weight: bold;
        line-height: 1rem;
      }
      }

      }




</style>

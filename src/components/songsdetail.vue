<template>
  <div class="bgbox">
    <section v-if="this.status" class="sec">
      <div class="top">
        <p>你还要我怎样</p>
        <div class="return"  @click="back"></div> 
      </div>
      <div class="center">
        <pre>
你还要我怎样
词：薛之谦 曲：薛之谦
演唱：薛之谦
你停在了这条我们熟悉的街
把你准备好的台词全念一遍
我还在逞强 说着谎
也没能力遮挡 你去的方向
至少分开的时候我落落大方
我后来都会选择绕过那条街
又多希望在另一条街能遇见
思念在逞强 不肯忘
怪我没能力跟随 你去的方向
若越爱越被动 越要落落大方
你还要我怎样 要怎样
你突然来的短信就够我悲伤
我没能力遗忘 你不用提醒我
哪怕结局就这样
我还能怎样 能怎样
最后还不是落得情人的立场
你从来不会想 我何必这样
我慢慢的回到自己的生活圈
也开始可以接触新的人选
爱你到最后 不痛不痒
留言在计较 谁爱过一场
我剩下一张 没后悔的模样
你还要我怎样 要怎样
你千万不要在我婚礼的现场
我听完你爱的歌 就上了车
爱过你很值得
我不要你怎样 没怎样
我陪你走的路你不能忘
因为那是我 最快乐的时光
后来我的生活还算理想
没为你落到孤单的下场
有一天晚上 梦一场
你白发苍苍 说带我流浪
我还是没犹豫 就随你去天堂
不管能怎样 我能陪你到天亮
        </pre>
      </div>
      <div class="bottom">
        <div class="yuanchang"></div>
        <div class="qiege"></div>
        <div class="bofang"></div>
        <div class="chongchang"></div>
        <div class="luge"></div>
      </div>
      <div class="foot">
        <div>
        <i></i>
        <p>43</p>
      </div>
      <div>
        <i></i>
        <p>82</p>
      </div>
      </div>
    </section>
    <section class="loading" v-else>
      
    </section>
  </div>
</template>
<script>
  export default {
    name: 'songsdetail',
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
        this.$router.push({name:'songs-detail'})
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
    background-image:url("../assets/img/lyricbg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .top{
    width: 100%;
    height:auto;
    padding:.4rem .24rem;
    position:relative;
  p{
    text-align: center;
    color:white;
    font-size: .36rem;
    font-weight: bold;
    margin-top:.22rem;
  }
  .return{
    position: absolute;
    top:.5rem;
    left:.24rem;
    width: .5rem;
    height: .5rem;
  }
  
  }
  .center{
    width:100%;
    height:6.03rem;
    text-align:center;
    overflow:hidden;
    pre{
      width:100%;
      height:100%;
      text-align:center;
      color:white;
      font-size:.26rem;
    }
  }
  .bottom{
    width:100%;
    height:1.76rem;
    display:flex;
    justify-content:space-between;
    margin-top:1.3rem;
    div{
      width:18%;
      height:100%;
    }
    
  }
  .foot{
    width: 5.76rem;
    height:1.05rem;
    position:absolute;
    bottom:.69rem;
    left:1.18rem;
    div{
      display:flex;
      justify-content:space-between;
    }
    div:nth-of-type(1){

       i{
        width:2rem;
        height:.06rem;
        background:#ff318d;
       }
       p{
        font-size:.24rem;
        color:#575861;
        margin-top:-.15rem;
       }
    }
    div:nth-of-type(2){
      margin-top:.79rem;
      i{
        width:3rem;
        height:.06rem;
        background:#ff318d;

       }
       p{
        font-size:.24rem;
        color:#575861;
        margin-top:-.12rem;
       }
    }
  }


</style>

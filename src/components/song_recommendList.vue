<template>
  <div class="box">
    <div class="top">
      <div class="back" @click="$router.go(-1)"><img src="../assets/img/more.png" alt=""></div>
      <div class="topTab">
        <p>推荐列表</p>
      </div>
      <div class="top_right">共<span>14</span>首</div>
    </div>
    <iscroll-view class="center">
      <ul>
        <li @click.stop="singing">
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span></div>
        </li>
      </ul>
    </iscroll-view>
  </div>
</template>

<script>
  export default {
    name: 'song_already',
    methods: {
      singing() {
        this.$router.push({name: 'song_singing'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @mixin per {
    width: 100%;
    height: 100%;
  }

  .box {
    @include per;
    background: url("../assets/img/bg3.png") center no-repeat;
    background-size: cover;
    position: relative;
    .top {
      width: 100%;
      height: 1.04rem;
      margin-bottom: 0.4rem;
      .back {
        width: 0.36rem;
        height: 0.36rem;
        position: absolute;
        top: 0.68rem;
        left: 0.28rem;
        z-index: 10;
        img {
          @include per;
          display: block;
        }
      }
      .topTab {
        width: 100%;
        height: 0.36rem;
        position: absolute;
        top: 0.68rem;
        left: 0;
        p {
          text-align: center;
          color: #fff;
          height: 0.38rem;
          line-height: 0.38rem;
          font-size: 0.32rem;
        }
      }
      //topTab over
      .top_right {
        position: absolute;
        top: 0.68rem;
        right: 0.28rem;
        color: #fff;
        height: 0.38rem;
        line-height: 0.38rem;
        font-size: 0.26rem;
        margin: 0 0.04rem;
        span {
          font-size: 0.32rem;
          margin: 0 0.04rem;
        }
      }
    }
    //top over
    /*center*/
    .center {
      width: 100%;
      height: calc(100vh - 1.44rem);
      padding: 1.6rem 0.24rem 0;
      overflow: hidden;
      touch-action: none;
      box-sizing: border-box;
      ul {
        width: 100%;
        height: auto;
        li {
          width: 100%;
          height: 1.7rem;
          border-bottom: 1px dotted #ccc;
          display: flex;
          justify-content: space-between;
          padding: 0.2rem 0;
          box-sizing: border-box;
          div:nth-of-type(1) {
            width: 1.34rem;
            height: 1.34rem;
            background: url("../assets/img/photobox.png") center no-repeat;
            background-size: cover;
            position: relative;
            img {
              display: block;
              width: 1.14rem;
              height: 1.14rem;
              position: absolute;
              top: 0.10rem;
              left: 0.03rem;
            }
          }
          div:nth-of-type(2) {
            width: 3.6rem;
            height: 100%;
            text-align: left;
            p:nth-of-type(1) {
              color: #4a4a4a;
              font-size: 0.32rem;
              line-height: 0.7rem;
            }
            p:nth-of-type(2) {
              color: #888;
              font-size: 0.26rem;
              line-height: 0.5rem;
            }
          }
          div:nth-of-type(3) {
            height: 0.42rem;
            display: flex;
            justify-content: space-between;
            margin-top: 0.4rem;
            span{
              display: block;
              width: 0.42rem;
              height: 0.42rem;
              background: url("../assets/img/sgif_pic2_14.png") center no-repeat;
              background-size: cover;
              margin-right: 0.16rem;
            }
          }
        }
      }
      //ul over
    }
    //center over
  }
</style>

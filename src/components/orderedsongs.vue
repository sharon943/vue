<template>
  <div class="wrap">
    <header>
      <div class="back" @click="$router.go(-1)"></div>
      <div class="room">已点歌曲</div>
      <div class="total">
        共<span class="count">24</span>首
      </div>
    </header>
    <iscroll-view class="center">
      <ul>
        <li @click.stop="$router.push({ name: 'songsdetail' })">
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
        <li >
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
        <li>
          <div><img src="../assets/img/rank0_06.png" alt=""></div>
          <div><p>歌手与演员-李荣浩</p>
            <p>3"20'</p></div>
          <div><span></span><span></span></div>
        </li>
      </ul>
    </iscroll-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @mixin per {
    width: 100%;
    height: 100%;
  }
  .wrap {
    background: url("../assets/img/bg3.png") center no-repeat;
    background-size: cover;
    position: relative;
    height: 100%;
    header {
      position: relative;
      width: 100%;
      height: 2.5rem;
      color: #fff;
      .back {
        position: absolute;
        left: .24rem;
        z-index: 100;
        top: .7rem;
        width: .36rem;
        height: .36rem;
        background-image: url("../assets/img/more.png");
        background-size: cover;
      }
      .room {
        position: absolute;
        left: 0;
        top: .7rem;
        width: 100%;
        text-align: center;
        font-size: .36rem;
        font-weight: 600;
        .num {
          font-size: .32rem;
          font-weight: bold;
        }
      }
      .total {
        position: absolute;
        right: .24rem;
        width: 100%;
        text-align: right;
        font-size: .24rem;
        top: .7rem;
        .count {
          font-weight: bold;
        }
      }
    }
    /*center*/
    .center {
      width: 100%;
      height: calc(100vh - 1.44rem);
      padding: .2rem 0.24rem 0;
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
            span:nth-of-type(1) {
              display: block;
              width: 0.42rem;
              height: 0.42rem;
              background: url("../assets/img/btnd.png") center no-repeat;
              background-size: cover;
              margin-right: 0.36rem;
            }
            span:nth-of-type(2) {
              display: block;
              width: 0.42rem;
              height: 0.42rem;
              background: url("../assets/img/btnt.png") center no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
</style>

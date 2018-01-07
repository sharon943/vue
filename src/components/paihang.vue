<template>
  <div class="wrap">
    <header>
      <div class="back" @click="$router.go(-1)"></div>
      <div class="room">排行榜</div>
    </header>
    <nav>
      <ul class="nav">
        <li @click="$router.push({ name:'singer' })">歌手</li>
        <li><img class="icon" src="../assets/img/icon_07.png">排行</li>
        <li @click="$router.push({ name: 'song_recommend' })">推荐歌单</li>
        <li @click="$router.push({ name:'song_already' })">已点歌曲</li>
      </ul>
    </nav>
    <div class="content">
      <div class="container">
        <div class="search">
          <ul>
            <li>月排行</li>
            <li class="active">季排行</li>
            <li>年排行</li>
          </ul>
        </div>
        <iscroll-view class="iscrollBox">
          <div class="bigImg">
            <div><img src="../assets/img/rc4.png" alt=""></div>
            <div class="active"><img src="../assets/img/rc1.png" alt=""></div>
            <div><img src="../assets/img/rc3.png" alt=""></div>
          </div>
          <div class="list">
            <ul>
              <li @touchstart.stop="singing">
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
              <li>
                <div><img src="../assets/img/rank0_06.png" alt=""></div>
                <div><p>歌手与演员-李荣浩</p>
                  <p>3"20'</p></div>
              </li>
            </ul>
          </div>
        </iscroll-view>
      </div>

    </div>
  </div>
</template>
<script>
  //  import IscrollView from "../../node_modules/vue-iscroll-view/src/index.vue";

  var log = console.log.bind(console)
  export default {
//    components: {IscrollView}

  }
</script>

<style scoped lang="scss">
  .wrap {
    position: relative;
    height: 100%;
    background-color: #fff;
    header {
      position: relative;
      width: 100%;
      height: 5.46rem;
      color: #fff;
      background: url(../assets/img/8.png) no-repeat;
      background-size: 100%;
      .back {
        position: absolute;
        left: .24rem;
        z-index: 100;
        top: .7rem;
        width: .36rem;
        height: .36rem;
        background-image: url(../assets/img/more.png);
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
      }
    }
    nav {
      position: absolute;;
      top: 1.2rem;
      height: .74rem;
      width: 100%;
      line-height: .74rem;
      .nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: .28rem;
        color: #fff;
        .icon {
          display: inline-block;
          vertical-align: middle;
          margin-right: .06rem;
          width: .42rem;
          height: .42rem;
        }
      }
    }
    .content {
      position: absolute;
      top: 2rem;
      width: 100%;
      height: auto;
      .container {
        width: 7.04rem;
        margin: 0 auto;
        .search {
          width: 100%;
          height: .68rem;
          position: relative;
          margin-bottom: .26rem;
          background: #fff;
          border-radius: 0.06rem;
          ul {
            width: 100%;
            height: 100%;
            li {
              height: 100%;
              width: 33.33333%;
              text-align: center;
              float: left;
              line-height: .68rem;
            }
            li.active {
              background: #ff318d;
              color: #fff;
              border: 2px solid #fff;
              box-sizing: border-box;
              margin: 0;
              line-height: 0.64rem;
            }
          }
        }
        /*底部内容*/
        /*iscroll*/
        .iscrollBox{
          touch-action: none;
          width:100%;
          height:calc(100vh - 2.9rem);
          overflow: hidden;
        }

        .bigImg {
          width: 100%;
          height: 3.18rem;
          position: relative;
          div {
            width: 2.51rem;
            height: 1.59rem;
            overflow: hidden;
            box-shadow: 0 0 6px 1px rgba(255, 49, 141, 0.2);
            border: 1px solid #fff;
            border-radius: 0.06rem;
            img {
              height: 100%;
              display: block;
              position: absolute;
              top: 0;
              left: -20%;
            }
          }
          div:nth-of-type(1) {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
          }
          div.active {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 5.02rem;
            height: 3.18rem;
            z-index: 10;
          }
          div:nth-of-type(3) {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
          }
        }
        /*center*/
        .list {
          width: 100%;
          margin-top: 0.3rem;
          ul {
            width: 100%;
            height: auto;
            li {
              width: 100%;
              height: 1.7rem;
              border-bottom: 1px dotted #ccc;
              padding: 0.2rem 0;
              box-sizing: border-box;
              div:nth-of-type(1) {
                width: 1.34rem;
                height: 1.34rem;
                background: url("../assets/img/photobox.png") center no-repeat;
                background-size: cover;
                position: relative;
                float: left;
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
                float: left;
                margin-left: 0.3rem;
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
            }
          }
          //ul over
        }
        //center over
      }
    }
  }
</style>

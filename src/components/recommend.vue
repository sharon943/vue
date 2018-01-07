<template>
  <div class="wrap">
    <header>
      <div class="back" @click="$router.go(-1)"></div>
      <div class="room">推荐歌单</div>
    </header>
    <nav>
      <ul class="nav">
        <li @click="$router.push({ name:'singer' })">歌手</li>
        <li @click="$router.push({ name:'song_ranking' })">排行</li>
        <li><img class="icon" src="../assets/img/icon_07.png">推荐歌单</li>
        <li @click="$router.push({ name:'song_already' })">已点歌曲</li>
      </ul>
    </nav>
    <div class="content">
      <div class="container">
        <iscroll-view class="iscrollBox">
          <div class="list">
            <ul>
              <li @click="$router.push({ name:'song_recommendList' })">
                <img src="../assets/img/recommend0_03.png" alt="">
              </li>
              <li>
                <img src="../assets/img/recommend0_06.png" alt="">
              </li>
              <li>
                <img src="../assets/img/recommend0_08.png" alt="">
              </li>
              <li>
                <img src="../assets/img/rc4.png" alt="">
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
        width: 100%;
        /*底部内容*/
        /*iscroll*/
        .iscrollBox {
          touch-action: none;
          width: 100%;
          height: calc(100vh - 2rem);
          overflow: hidden;
          .list {
            width:7.04rem;
            margin:0.2rem auto 0;
            ul {
              width: 100%;
              height: auto;
              li {
                width: 100%;
                height: 3.2rem;
                margin-bottom: 0.4rem;
                border: 2px solid #fff;
                box-shadow: 0 0 6px 1px rgba(255, 31, 140, 0.2);
                border-radius: 0.06rem;
                box-sizing: border-box;
                img {
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

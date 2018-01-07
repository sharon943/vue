<template>
  <div class="container">
    <img class="back" src="../assets/img/1.png">
      <img class="word" src="../assets/img/2.png">
      <ul>
        <li>
          <router-link :to="{name:'room'}"><img src="../assets/img/3.png"></router-link>
          <router-link :to="{name:'game'}"><img src="../assets/img/4.png"></router-link>
          </li>
        <li>
          <router-link :to="{name:'shop'}"><img src="../assets/img/5.png"></router-link>
          <router-link :to="{name:'center'}"><img src="../assets/img/6.png"></router-link>
         </li>
      </ul>
      <div class="place">
        <img src="../assets/img/7.png">
        <p>南京</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
      return{

      }
  },
  mounted(){
    this.$http.get('/home/index.php').then(mess=>{
      console.log(mess.body)
    })

  }

}
</script>
<style scoped lang="scss">
 *{
      margin:0;
      padding: 0;
      list-style: none;
      text-decoration: none;
    }
      body,html{
        width: 100%;
        height:100%;
        margin:0;
      }
      .container{
        width: 100%;
        height:100%;
        position: relative;
      }
      .back{
        width: 100%;
        height: 100%;
      }
      .word{
        position: absolute;
        top:37%;
        left:0;
        width: 100%;
      }
      ul{
        position: absolute;
        bottom:0;
        left:0;
        width: 100%;

        height:42%;
        }
      ul li{
        width: 90%;
        height:45%;
        display: flex;
        justify-content: space-between;
        margin:0 auto;
      }

        ul li a{
          width: 48%;
          height: 90%;
        }
        ul li a img{
          width: 100%;
          height: 100%;
        }
        .place{
          position: absolute;
          left:.17rem;
          top:.2rem;
          width: 1rem;
          height:.6rem;
          text-align: center;
          display: flex;
          justify-content: space-between;
        }
        p{
          text-decoration: underline;
          color: white;
          font-size: .3rem;
          letter-spacing: .02rem;
        }
        .place img{
          height:60%;
          width: 24%;
        }
</style>


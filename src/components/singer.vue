<template>

    <div class="bgbox">
        <section v-if="this.status" class="sec">
            <div class="top">
                <p>歌手</p>
                <ul>
                    <li>歌手</li>
                    <li @click="paihang">排行</li>
                    <li>常唱</li>
                    <li>推荐歌手</li>
                </ul>
                <input type="text" placeholder="请输入你要搜索的歌手">
                <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
            </div>
            <ul class="center" >
                <li @click="go">
                    <img src="../assets/img/pic_03.png" alt="">
                    <div class="zhezhao">内地偶像组合</div>
                </li>
                <li>
                    <section>
                        <img src="../assets/img/pic_07.png" alt="">
                        <div class="zhezhao">内地男歌手</div>
                    </section>
                    <section>
                        <div>
                            <img src="../assets/img/pic_09.png" alt="">
                            <div>港台歌手</div>
                        </div>
                        <div>
                            <img src="../assets/img/pic_11.png" alt="">
                            <div>日韩歌手</div>
                        </div>
                    </section>
                </li>
                <li>
                    <section>
                        <img src="../assets/img/pic_16.png" alt="">
                        <div class="zhezhao">内地女歌手</div>
                    </section>
                    <section>
                        <img src="../assets/img/pic_18.png" alt="">
                        <div class="zhezhao">青春偶像男歌手</div>
                    </section>
                </li>
            </ul>
        </section>
        <section class="loading" v-else></section>
    </div>
</template>
<script>
    export default {
        name: 'singer',
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
                this.$router.push({name:'femalesinger'})
            },
            back(){
                localStorage.car=JSON.stringify(this.car);
                this.$router.go(-1);
            },
          paihang(){
              this.$router.push({name:'paihang'})
          }

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
        background:#f5f3ff;
        position: relative;
    }
    .top{
        width: 100%;
        height:4.62rem;
        background-image: url("../assets/img/singer_bg_01 (1).png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding:.4rem .24rem;
        position:relative;

        p{
            text-align: center;
            color:white;
            font-size: .28rem;
        }
        ul{
            width: 100%;
            height: .25rem;
            margin-top: .32rem;
            display: flex;
            justify-content: space-between;
            padding:0 .22rem;
            font-size: .24rem;
            color:white;

        }
        input{
            margin-top: .22rem;
            width: 100%;
            height: .69rem;
            border-radius: .05rem;
            border:0;
            text-align: center;
            line-height:  .69rem;
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
        top:2.76rem;
        left:.24rem;
        width:7rem;
        height: 9.45rem;
        background: white;
        overflow: hidden;
        touch-action: none;
        box-shadow: 0 0 .03rem rgba(0,0,0,0.2);
        padding:.02rem;
        li{
            width: 100%;

            margin-top: .02rem;
        }
        li:nth-child(1){
            height:3.99rem;
            background: red;
            position: relative;
            img{
                width: 100%;
                height:100%;
            }
            div{
                width: 100%;
                height:.4rem;
                position: absolute;
                left:0;
                bottom:0;
                margin-top: auto;
                margin-bottom: auto;
                top:0;
                font-size: .26rem;
                color:#fff;
                font-weight: bold;
                text-align: center;
            }
        }
        li:nth-child(2){
            height:2.12rem;
            display: flex;
            justify-content: space-between;
            section{
                height:100%;
            }
            section:nth-child(1){
                width: 2.84rem;
                margin-right: .02rem;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                div{
                    text-align: center;
                    width: 100%;
                    height:.4rem;
                    position: absolute;
                    left:0;
                    bottom:0;
                    margin-top: auto;
                    margin-bottom: auto;
                    top:0;
                    font-size: .26rem;
                    color:#fff;
                    font-weight: bold;

                }
            }
            section:nth-child(2){
                width: 4.1rem;
                display: flex;
                justify-content: space-between;
                div{
                    width: 2.03rem;
                    height:100%;
                    position: relative;
                    img{
                        width: 100%;
                        height:100%;
                    }
                    div{
                        text-align: center;
                        width: 100%;
                        height:.4rem;
                        position: absolute;
                        left:0;
                        bottom:0;
                        margin-top: auto;
                        margin-bottom: auto;
                        top:0;
                        font-size: .26rem;
                        color:#fff;
                        font-weight: bold;
                    }
                }
            }
        }
        li:nth-child(3){
            height:3.3rem;
            display: flex;
            justify-content: space-between;
            section{
                height:100%;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                div{
                    text-align: center;
                    width: 100%;
                    height:.4rem;
                    position: absolute;
                    left:0;
                    bottom:0;
                    margin-top: auto;
                    margin-bottom: auto;
                    top:0;
                    font-size: .26rem;
                    color:#fff;
                    font-weight: bold;

                }
            }
            section:nth-child(1){
                width: 2.84rem;
                margin-right: .02rem;
            }
            section:nth-child(2){
                width: 4.1rem;
            }
        }
   }


</style>

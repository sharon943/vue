<template>

    <div class="bgbox">
        <section v-if="this.status" class="sec">
            <div class="top">
                <p>内地女歌手</p>
                <ul>
                    <li>歌手</li>
                    <li>排行</li>
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
            </ul>
        </section>
        <section class="loading" v-else></section>
    </div>
</template>
<script>
    export default {
        name: 'femalesinger',
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
                this.$router.push({name:'songs'})
            },
            back(){
                localStorage.car=JSON.stringify(this.car);
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
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 2.09rem;
            height:2.95rem;
            margin-top: .02rem;
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

    }


</style>

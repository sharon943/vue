<template>

    <div class="bgbox">
        <section v-if="this.status" class="sec">
            <div class="top">
                <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
            </div>
            <img src="../assets/img/2-1erwei.png" alt="">
            <img src="../assets/img/2-1-1.png" alt="">
            <img src="../assets/img/enter.png" alt="" class="enter" @click="next">
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
            back(){
                localStorage.car=JSON.stringify(this.car);
                this.$router.go(-1);
            },
            next(){
                this.$router.push({name:'singer'})
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
        background-image: url("../assets/img/1-2background.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
    }
    .top{
        width: 100%;
        height:4.62rem;
        padding:.4rem .24rem;
        position:relative;
        z-index: 99;
        p{
            text-align: center;
            color:white;
            font-size: .28rem;
        }
        .return{
            position: absolute;
            top:.65rem;
            left:.24rem;
            width: .38rem;
            height: .38rem;
            z-index: 99;

        }
    }
    img{
        width: 100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
    }
    .enter{
        width: 3.36rem;
        height:.85rem;
        position:fixed;
        top:11.28rem;
        right:0;
        margin-left: auto;
        margin-right: auto;
        left:0;
        z-index: 88;
    }


</style>

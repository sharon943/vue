<template>

    <div class="bgbox">
        <section v-if="this.status" class="sec">
            <div class="top">
                <p>游戏</p>
                <img src="../assets/img/icon_03 (1).png" class="return" alt="" @click="back">
            </div>
            <ul class="center">
                <li v-for="(item,index) in current" @click="change(index)">
                    <div  v-if="item.status==0">{{item.content}}</div>
                    <div  v-else>{{item.answer}}</div>
                </li>

            </ul>
            <div class="bottom">
                <img src="../assets/img/attaction_03.png" alt="">
                <p>1.先选真心话还是大冒险；</p>
                <p>2.从上方九宫格中选取一个，如果选中的无法实现，有一次机会重新选择。</p>
            </div>
            <div class="foot">
                <div>脑筋急转弯</div>
            </div>
        </section>
        <section class="loading" v-else></section>
    </div>
</template>
<script>
    export default {
        name: 'brain',
        data(){
            return{
                game:[],
                status:true,
                current:[],
                haveclass:false,
            }
        },
        computed:{
            arr(){
                var arr=[];
                arr=this.game.filter(val=>val.type==this.activetype);
                return arr;
            }
        },
        methods:{
            check(arr,val){
                return arr.some(mess=>{
                    return mess.id == val.id;
                })
            },
            newarr(){
                if (this.arr.length > 9) {
                    var brr = [];
                    while (brr.length < 9) {
                        var index = Math.floor(Math.random() * this.arr.length);
                        var val = this.arr[index];
                        if(!this.check(brr,val)){
                            var copy = Object.assign({}, val);
                            brr.push(copy)
                        }

                    }

                }
                this.current=brr;
            },

            back(){
                this.$router.go(-1);
            },

            change(index){
                if(this.current.filter(val=>val.status==1).length>=2){
                    this.newarr();
                }else{
                    this.current[index].status=1;
                }
            }
        },
        beforeMount(){
            this.$http.post('../home/brain.php').then(mess=>{
                this.game=mess.body;
                this.newarr();
                console
            })
        },

        mounted(){

            setTimeout(()=>{
                this.status=true;
            },1000)
        },

    }
</script>
<style scoped lang="scss">
    .active{
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.5);
    }
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
        background:#f0eefa;
        position: relative;
    }
    .top{
        width: 100%;
        height:2.9rem;
        background-image: url("../assets/img/singer_bg_01 (1).png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding-top:.4rem;
        position:relative;
        p{
            text-align: center;
            color:white;
            font-size: .28rem;
            span{
                font-size: .32rem;
                font-weight:bold;
            }
        }


        .return{
            position: absolute;
            top:.4rem;
            left:.24rem;
            width: .38rem;
            height: .38rem;
        }
    }
    .center {
        position: fixed;
        top: 1.67rem;
        left: .24rem;
        width: 7rem;
        height: 7.06rem;
        background: white;
        overflow: hidden;
        touch-action: none;
        border-radius: .2rem;
        box-shadow: 0 0 .03rem rgba(255, 182, 215, 0.6);
        padding: 0 .25rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-bottom: .2rem;
        li {
            width: 2.08rem;
            height: 2.08rem;
            margin-top: .2rem;
            box-shadow: 0 0 .2rem rgba(246, 32, 137, 0.2);

            img {
                width: 100%;
                height: 100%;

            }
            div{
                width: 100%;
                height: 100%;
                text-align: center;
                padding:.05rem ;
                font-size: .26rem;
                color: #fff;
                background-image: url("../assets/img/1_03.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .bottom{
        position: absolute;
        left: .24rem;
        bottom: 2.31rem;
        width: 7rem;
        height: 2.05rem;
        img{
            margin-bottom: .23rem;
            width:100%;
            height:.78rem;
        }
        p{
            font-size: .26rem;
            color:#87878c;
        }
    }
    .foot{
        width: 7rem;
        height:.72rem;
        position: absolute;
        left: .24rem;
        bottom: .7rem;

        div{
            width: 48%;
            height:100%;
            text-align: center;
            line-height: .72rem;
            background: #fe318e;
            font-size: .26rem;
            color:#fff;
            border-radius: .05rem;
            margin:0 auto;
        }
    }



</style>

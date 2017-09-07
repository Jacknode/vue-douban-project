<template>
    <div>
        <section id="wrap">
            <div class="scroll">
                <scroller
                    class="positions"
                    ref="gameDetail"
                >
                    <h2>按类型浏览</h2>
                    <footerList :footerList="footList1" itemStr="game"></footerList>
                    <h2>按平台浏览</h2>
                    <footerList :footerList="footList2" itemStr="game"></footerList>
                </scroller>
            </div>
        </section>
    </div>
</template>
<script>
    import FooterList from './footerList.vue'
    export default{
        name: '',
        data(){
            return {
                footList1:[
                    {
                        name:[{val:'动作',link:'gameGaction'},{val:'角色扮演',link:'gameGrpg'}]
                    },
                    {
                        name:[{val:'横版过关',link:'gameGarcade'},{val:'冒险',link:'gameGadventure'}]
                    },
                    {
                        name:[{val:'射击',link:'gameGshooting'},{val:'策略',link:'gameGstrategy'}]
                    },
                    {
                        name:[{val:'益智',link:'gameGeducational'},{val:'模拟',link:'gameGsimulation'}]
                    },
                    {
                        name:[{val:'体育',link:'gameGsports'},{val:'竞速',link:'gameGracing'}]
                    },
                    {
                        name:[{val:'格斗',link:'gameGfighting'},{val:'乱斗/清版',link:'gameGbattle'}]
                    },
                    {
                        name:[{val:'即时战略',link:'gameGrts'},{val:'音乐/旋律',link:'gameGmug'}]
                    }
                ],
                footList2:[
                    {
                        name:[{val:'Mac',link:'gamePmac'},{val:'PC',link:'gamePpc'}]
                    },
                    {
                        name:[{val:'iPhone',link:'gamePiphone'},{val:'iPad',link:'gamePipad'}]
                    },
                    {
                        name:[{val:'Android',link:'gamePandroid'},{val:'PS4',link:'gamePps4'}]
                    },
                    {
                        name:[{val:'Xbox One',link:'gamePxboxone'},{val:'Wii U',link:'gamePwiiu'}]
                    },
                    {
                        name:[{val:'PS3',link:'gamePps3'},{val:'Xbox 360',link:'gamePxbox360'}]
                    },
                    {
                        name:[{val:'Wii',link:'gamePwii'},{val:'PS2',link:'gamePps2'}]
                    },
                    {
                        name:[{val:'Xbox',link:'gamePxbox'},{val:'NGC/GameCube',link:'gamePngc'}]
                    },
                    {
                        name:[{val:'Arcade/街机',link:'gameParcade'},{val:'FC/NES/红白机',link:'gamePfc'}]
                    },
                ]
            }
        },
        components:{
            FooterList
        }
    }
</script>
<style scoped lang="less">
@r:20rem;
.positions{
    top:3rem !important;
}
h2{
    padding-left: 20/@r;
}
</style>

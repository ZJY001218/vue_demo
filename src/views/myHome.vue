<template>
    <div>
        <!-- 轮播图 -->
        <div class="block">
            <el-carousel trigger="click" height="350px">
                <el-carousel-item v-for="(item,index) in banner" :key="index">
                    <img :src=item style="width:100%;height:350px;">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 基线上的按钮 -->

        <div>
            <component v-if="loadPluginComponent('customIndex')" :is="loadPluginComponent('customIndex')">客开按钮</component>

            <el-button type="success" plain @click="onShow" v-else>基线按钮</el-button>
        </div>

    </div>
</template>

<script>
// import {mixins} from "@/mixins.js"
    export default {
        // mixins: [loadPluginComponent],
        data() {
            return {
                // 轮播图的数据
                banner: ["https://img1.baidu.com/it/u=3361615533,1949150540&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500", "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-03-28%2F5c9c2c4f9d4cb.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662527048&t=ce865ffa0c606271b0dc4f5a561318c5", "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091007%2F5zicxc0rw3w5zicxc0rw3w.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662527050&t=bd805f6323b8a92906ac6f11a71e78af", "https://img2.baidu.com/it/u=1533782825,3888231304&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375"],
                customIndex:true
            };
        },
        mounted() {},
        methods: {
            onShow() {
                this.$alert('这是基线的项目', '按钮', {
                    confirmButtonText: '确定',
                });
            },
            loadPluginComponent(name){
                console.log('基线');
                if(true){
                    return name
                }
                 return false
            }
        }
    };
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
    button {
        margin-top: 5px;
    }
</style>

<template>
    <div>
        <el-button type="primary" plain @click="onShow">客开按钮</el-button>
    </div>
</template>

<script>
    export default {
        mounted() {
        },
        methods: {
            onShow() {
                this.$alert('这是客开的按钮', '按钮', {
                    confirmButtonText: '确定',
                });
            },
        },
    };
</script>

<style scoped>
button{
    margin-top: 10px;
}
</style>

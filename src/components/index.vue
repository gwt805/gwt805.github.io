<template>
    <div class="common-layout">
        <el-container class="main">
            <el-header class="top"><top /></el-header>
            <el-main class="middle"><router-view></router-view></el-main>
            <el-footer class="footer"><bottom /></el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import top from "@/components/navbar/top.vue";
// import middle from "@/components/navbar/middle.vue";
import bottom from "@/components/navbar/bottom.vue";
import "@/assets/js/canvas.js";
</script>

<style scoped lang="less">
.common-layout {
    .main {
        .top {
            position: absolute;
            width: 100%;
            height: 50px;
            top: 0;
            left: 0;
        }
        .middle {
            position: fixed;
            width: 100%;
            height: calc(100% - 100px);
            left: 0;
            top: 50px;
        }
        .footer {
            width: 100%;
            height: 50px;
            position: fixed;
            left: 0;
            bottom: 0;
        }
    }
}
</style>
<template><el-empty description="哎吖~ 出错啦" style="position: fixed; margin:0; padding: 0; top: 50%; left: 50%; transform: translate(-50%,-50%);" /></template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
onMounted(() => { document.getElementsByTagName("html")[0].classList.add("dark")} )
onUnmounted(() => {
    document.getElementsByTagName("html")[0].classList.remove("dark");
    window.history.pushState(null, "", window.location.href =  "/index");
})
</script>

<style scoped lang="less">.el-empty{user-select: none;}</style>
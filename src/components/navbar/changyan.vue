<template>
    <div id="SOHUCS" sid="焘焘导航网"></div>
</template>

<script setup lang="ts">
import $ from "jquery";

const windows = window as any;
windows.changyan = undefined;
windows.cyan = undefined;

$.getScript('https://changyan.sohu.com/upload/changyan.js', () => {
    windows.changyan.api.config({ appid: 'cyx3JaAA8', conf: '96b5d6c7cc856f0782bdbc5c68e214e4' })
});
</script>

<style scoped></style>
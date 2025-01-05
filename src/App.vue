<template>
    <div class="loader" v-if="isloading"></div>
    <router-view v-if="!isloading"></router-view>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const isloading = ref(true);
document.addEventListener('keydown', (event) => {if ((event.ctrlKey === true || event.metaKey === true) && (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187 || event.which === 189)) { event.preventDefault(); } }, false);
document.addEventListener('mousewheel', (e: any) => { if ((e.wheelDelta && e.ctrlKey) || e.detail) { e.preventDefault(); } }, { capture: false, passive: false });
document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
        isloading.value = false;
    }
});
const handleResize = () => {
    const ratio = window.devicePixelRatio;
    document.body.style.zoom = `${ratio / ratio}`;
};

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});
</script>
<style scoped lang="less">
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #514b82;
    transform-box: fill-box;
    translate: -50% -50%;

    width: 50px;
    aspect-ratio: 1;
    display: grid;
    color: #854f1d;
    background: radial-gradient(farthest-side, currentColor calc(100% - 6px), #0000 calc(100% - 5px) 0);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 13px), #000 calc(100% - 12px));
    border-radius: 50%;
    animation: l19 2s infinite linear;
}

.loader::before,
.loader::after {
    content: "";
    grid-area: 1/1;
    background:
        linear-gradient(currentColor 0 0) center,
        linear-gradient(currentColor 0 0) center;
    background-size: 100% 10px, 10px 100%;
    background-repeat: no-repeat;
}

.loader::after {
    transform: rotate(45deg);
}

@keyframes l19 {
    100% {
        transform: rotate(1turn)
    }
}
</style>
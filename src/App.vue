<template>
    <div class="container">
        <div class="nav">
            <div class="logo"><img src="/logo.png" draggable="false"></div>
            <div class="nav-list">
                <a class="nav-item" onclick="window.location.href='https://gwt805.github.io/websites'">导航网</a>
                <a class="nav-item" onclick="window.location.href='https://gwt805.github.io/hotnet'">热搜榜</a>
                <a class="nav-item" @click="changyan_model=true">留言板</a>
            </div>
            <comment />
        </div>
        <div class="yiyan">{{ displayedText }}</div>
        <div class="footer">
            <el-tooltip content="Github" :hide-after="0"><span><a onclick="window.open('https://github.com/gwt805')" target="_blank"><img src="./assets/github.svg"></a></span></el-tooltip>
            <el-tooltip content="Gitee" :hide-after="0"><span><a onclick="window.open('https://gitee.com/gwt805')" target="_blank"><img src="./assets/gitee.svg"></a></span></el-tooltip>
            <el-tooltip content="<img src='/gzh.jpg' style='width:100px;' />" raw-content :hide-after="0"><span><img src="./assets/gzh.svg"></span></el-tooltip>
            <span>Copyright © gwt805</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import "@/assets/bl.js"
import http from "@/utils/axios/index";
import comment from "@/components/comment.vue";
import { ref, onMounted, onUnmounted, provide } from "vue";

const yiyan = ref("");
const displayedText = ref("");
const typingInterval = ref();
const changyan_model = ref(false);
provide("changyan_model", changyan_model)

const getYiyan = () => {
    http.get("https://v1.hitokoto.cn/").then((res: any) => {
        yiyan.value = res.hitokoto;
        startTyping();
    }).catch(() => {
        yiyan.value = "如果你有梦想，就要守护它。";
        startTyping();
    });
};

const startTyping = () => {
    let index = 0;
    displayedText.value = "";
    typingInterval.value = setInterval(() => {
        if (index < yiyan.value.length) {
            displayedText.value += yiyan.value[index];
            index++;
        } else {
            clearInterval(typingInterval.value);
            setTimeout(() => {
                displayedText.value = "";
                startTyping();
            }, 1000);
        }
    }, 150);
};


onUnmounted(() => {
    clearInterval(typingInterval.value);
});
document.addEventListener('keydown', (event) => {if ((event.ctrlKey === true || event.metaKey === true) && (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187 || event.which === 189)) { event.preventDefault(); } }, false);
document.addEventListener('mousewheel', (e: any) => { if ((e.wheelDelta && e.ctrlKey) || e.detail) { e.preventDefault(); } }, { capture: false, passive: false });

const handleResize = () => {
    const ratio = window.devicePixelRatio;
    document.body.style.zoom = `${ratio / ratio}`;
};

onMounted(() => {
    getYiyan();
    handleResize();
    window.addEventListener('resize', handleResize);
});
</script>
<style scoped lang="less">
.container {
    width: 100vw;
    height: 100vh;
    user-select: none;
    background-image: url("https://img.8845.top/acg/loli2.php"); //https://img.8845.top/good
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .nav {
        width: 100%;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;

        .logo {
            width: 34px;
            height: 34px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .nav-list {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .nav-item {
                margin-left: 20px;
                color: #fff;
                cursor: pointer;

                &:hover {
                    color: #8d8d8d;
                }
            }
        }
    }

    .yiyan {
        max-width: 80%;
        word-wrap: break-word;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 20px;
        line-height: 1.5;
        padding: 20px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #a0a4e5;
        z-index: 2;

        span:not(:first-child) {
            margin-left: 10px;
        }
    }
}
@-webkit-keyframes opac{
    from {
        opacity: 1;
        width:0;
        height:0;
        top:50%;
        left:50%;
    }
    to {
        opacity : 0;
        width:100%;
        height:100%;
        top:0;
        left:0;
    }
}
.animate .w2{
    -webkit-animation-delay:1s;
}
.animate .w3{
    -webkit-animation-delay:2s;
}
.animate .w4{
    -webkit-animation-delay:3s;
}
.wave{
    width: 22.7rem;
    height: 22.7rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.wave *{
    border:1px solid #fff;
    position:absolute;
    border-radius:50%;
    -webkit-animation:opac 4s infinite;
}
</style>
<template>
    <div class="container">
        <div class="header">
            <a-menu class="menu" mode="horizontal" :selected-keys="['/']" :overflowedIndicator="vnode"
                :items="[{ 'label': '首页', key: '/' }, { 'label': '导航网', key: '/websites/' }, { 'label': '热搜榜', key: '/hotnet/' }]"
                @click="onClick" />
            <div class="datetime">
                <p class="time">{{ time }}</p>
                <p class="date">{{ date }}</p>
            </div>
        </div>
        <div class="yiyan">{{ displayedText }}</div>
        <div class="z"></div>
        <div class="footer">
            <el-tooltip content="Github" :hide-after="0"><span><a onclick="window.open('https://github.com/gwt805')" target="_blank"><img src="./assets/github.svg"></a></span></el-tooltip>
            <el-tooltip content="GitCode" :hide-after="0"><span><a onclick="window.open('https://gitcode.com/gwt805')" target="_blank"><img src="./assets/gitcode.svg"></a></span></el-tooltip>
            <el-tooltip content="Gitee" :hide-after="0"><span><a onclick="window.open('https://gitee.com/gwt805')" target="_blank"><img src="./assets/gitee.svg"></a></span></el-tooltip>
            <el-tooltip content="<img src='/gzh.jpg' style='width:100px;' />" raw-content :hide-after="0"><span><img src="./assets/gzh.svg"></span></el-tooltip>
            <span>Copyright © gwt805</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import "@/assets/bl.js"
import http from "@/utils/axios/index";
import { MenuOutlined } from "@antdv-next/icons";
import { h, ref, onMounted, onUnmounted } from "vue";

const cron = ref();
const date = ref('');
const time = ref('');
const lastTime = ref(performance.now());

const yiyan = ref("");
const displayedText = ref("");
const typingInterval = ref();

const vnode = h(MenuOutlined, { class: 'hover-icon' });

const onClick = (data: any) => {
    if (data.key !== "/") {
        window.location.href = `https://gwt805.github.io/${data.key}`;
    }
}

const getCurrentDateTime = () => {
    const now_date = new Date();
    const year = now_date.getFullYear();
    const month = String(now_date.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的
    const day = String(now_date.getDate()).padStart(2, '0');
    const hours = String(now_date.getHours()).padStart(2, '0');
    const minutes = String(now_date.getMinutes()).padStart(2, '0');
    const seconds = String(now_date.getSeconds()).padStart(2, '0');
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    const weekday = weekdays[now_date.getDay()]; // 获取星期几，注意星期天是0，星期一是1，依此类推
    date.value = `${year}年${month}月${day}日 星期${weekday}`;
    time.value = `${hours}:${minutes}:${seconds}`;
    const now_timestamp = performance.now();
    const dt = now_timestamp - lastTime.value;
    if (dt > 1000) {
        lastTime.value = now_timestamp;
    }
}

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
    cron.value = setInterval(getCurrentDateTime);
    getYiyan();
    handleResize();
    window.addEventListener('resize', handleResize);
});
</script>
<style scoped lang="less">
.container {
    width: 100dvw;
    height: 100dvh;
    user-select: none;
    background-image: url("./assets/background.jpg"); //https://img.8845.top/good
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .header {
        height: 50px;
        display: flex;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.2);
        color: black;
        // box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);

        ::v-deep(.menu) {
            background-color: transparent;
            border-bottom: none;

            .hover-icon {
                color: black;
            }

            .ant-menu-item,
            .ant-menu-overflow-item {
                color: black;
                font-size: 16px;

                &::after,
                &::before {
                    border-bottom: none;
                }
                &:hover {
                    color: white;
                }
            }

            .ant-menu-item-selected,
            .ant-menu-submenu-selected {
                color: white;
                border-bottom: none;
            }
        }

        .datetime {
            display: flex;
            flex-direction: column;
            justify-content: center;
            word-break: keep-all;
            white-space: nowrap;
            text-align: center;
            margin-right: 15px;

            .time {
                font-size: 16px;
                font-weight: bold;
            }

            .date {
                font-size: 14px;
            }
        }
    }
    .z {
        width: 100%;
        height: calc(100dvh - 82px);
        background-color: rgba(255, 255, 255, 0.2);
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
        background-color: rgba(0, 0, 0, 0.4);
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
        img {
            vertical-align: middle;
        }
        span:not(:first-child) {
            margin-left: 10px;
        }
    }
}

</style>
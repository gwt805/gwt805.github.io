<template>
    <div class="main">
        <img src="/src/assets/img/logo.png" alt="Logo" srcset="" draggable="false" @click="$router.push('/')">
        <div class="divr">
            <div>
                <el-text type="info" class="lyb" @click="$router.push('/liuyan')">留言板</el-text>
                <!-- <el-switch class="theme" v-model="themeFlag" :active-action-icon="Moon" inline-prompt :inactive-action-icon="Sunny" active-text="黑" inactive-text="白" @change="themeswitch" /> -->
            </div>
            <el-divider class="vline" direction="vertical" />
            <div>
                <el-text class="mx-1 timeclock" type="info">{{ datetime }}</el-text>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import "@/assets/js/changyan.js";
// import { Sunny, Moon } from '@element-plus/icons-vue';

// const themeFlag = ref(true);
const datetime = ref("");

// window.changyan.api.config({
// appid: 'cywIsvaSf',
// conf: 'prod_b02a6e47a3d85ebef9f9ab62d2d3917b'
// });

// const themeswitch = (flag: boolean) => {
//     if (flag) { document.getElementsByTagName("html")[0].classList.add("dark"); }
//     else { document.getElementsByTagName("html")[0].classList.remove("dark"); }
// };

const timeReplace = (num: number) => {
    if (num < 10) { return "0" + num; }
    else { return num; }
};

const getDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const week = ["日", "一", "二", "三", "四", "五", "六"];
    const weekday = week[day];
    const weekday_month_year_date_time = `${year} 年 ${timeReplace(month)} 月 ${timeReplace(date)} 日 (${weekday}) ${timeReplace(hour)}:${timeReplace(minute)}:${timeReplace(second)}`;

    datetime.value = weekday_month_year_date_time;
};

setInterval(getDateTime, 1000);

</script>

<style scoped lang="less">
.main {
    font-family: var(--fontFamily);
    .lyb {
        font-size: 20px;
        line-height: 50px;
    }
    .vline {
        margin: auto;
    }
    .divr {
        float: right;
        width: 380px;
        display: flex;
        flex-flow: row;

        .theme {
            width: 100%;
            height: 100%;
            vertical-align: middle;
        }

        .timeclock {
            margin-left: 10px;
            line-height: 50px;
            font-size: 20px;
        }
    }
}</style>
<template>
    <div class="common-layout">
        <el-container class="main">
            <el-header class="top">
                <div class="main">
                    <img src="/src/assets/img/logo.png" alt="Logo" srcset="" draggable="false" @click="$router.push('/')">
                    <el-text class="mx-1 timeclock" type="info">{{ datetime }}</el-text>
                </div>
            </el-header>
            <el-main class="middle" id="middle">
                <layout v-for="item in data">
                    <template #hline> {{ item?.name }}</template>
                    <template #layout v-for="dt in item">
                        <el-col class="col" :span="4" v-for="id in dt" @click="npage(id.link)">
                            <el-tooltip :content=id.name hide-after="0">
                                <el-card class="card pt" shadow="hover">
                                    <img :src=id.imgUrl alt="Logo" draggable="false">
                                    <p class="aname" draggable="false">{{ id.name }}</p>
                                </el-card>
                            </el-tooltip>
                        </el-col>
                    </template>
                </layout>
                <el-divider><span class='hline'><el-icon><star-filled /></el-icon> 留言板</span></el-divider>
                <div id="SOHUCS" sid="焘焘导航网"></div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import $ from "jquery";
import { ref, onMounted } from "vue";
import { getData } from "@/api/data";
import { ElLoading } from "element-plus";
import { StarFilled } from "@element-plus/icons-vue";
import layout from "@/components/template/layout.vue";

const data: any = ref([]);
const windows = window as any;
windows.changyan = undefined;
windows.cyan = undefined;

$.getScript('https://changyan.sohu.com/upload/changyan.js', () => {
    windows.changyan.api.config({ appid: 'cyx3JaAA8', conf: '96b5d6c7cc856f0782bdbc5c68e214e4' })
});

onMounted(() => {
    const loadingService = ElLoading.service({fullscreen: true, text: "首次加载数据较慢 请您耐心等待 ~"});
    getData().then((res: any) => {
        loadingService.close();
        data.value = res;
    });
});

const npage = (url: string) => { window.open(url); };

const datetime = ref("");
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

setInterval(() => {
    const phone_input:any = document.getElementsByClassName("phone-input");
    const password_input:any = document.getElementsByClassName("password-input");

    if (phone_input.length != 0) { phone_input[0].style.backgroundColor = "white"; }
    if (password_input.length != 0) { password_input[0].style.backgroundColor = "white"; }
});
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
            position: absolute;
            width: 100%;
            height: calc(100% - 50px);
            left: 0;
            top: 50px;
        }

        .main {
            font-family: var(--fontFamily);

            .timeclock {
                float: right;
                line-height: 50px;
                font-size: 20px;
            }
        }
    }
}
.hline {
    font-size: 20px;
    color: rgba(255, 255, 255);
    font-family: var(--fontFamily);
    filter: opacity(0.7);
}

.col {
    margin-bottom: 20px;
}
</style>public/canvas.js
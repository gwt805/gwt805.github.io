<template>
    <el-container>
        <el-aside id="menuRef">
            <el-menu :default-active="default_active" class="el-menu-vertical-demo" :collapse="false" :collapse-transition="false" router>
                <el-menu-item :id="'side-'+item.name" :index="'#'+item.name" @click="scrollToDiv(item.name)" v-for="item in data">
                    <el-icon><CaretRight /></el-icon><template #title>{{ item.name }}</template>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <div id="bodyRef">
            <el-main>
                <div class="main-body" v-for="item in data" :id="item.name">
                    <div class="card-title"><el-icon :size="20"><Paperclip /></el-icon><span>{{ item.name }}</span></div>
                    <div class="div-card">
                        <el-tooltip :content="db.name" :hide-after="0" raw-content v-for="db in item.data">
                            <div class="div-card-body" @click="npage(db.link)"><img :src="db.imgUrl"><a><p>{{ db.name }}</p></a></div>
                        </el-tooltip>
                    </div>
                </div>
            </el-main>
        </div>
    </el-container>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ElLoading } from "element-plus";
import { getdata } from "@/utils/api/data";
import { Paperclip } from "@element-plus/icons-vue";
import { ref, onMounted, onUnmounted } from "vue";

const route = useRoute();
const data: any = ref([])
const cron = ref();
const default_active = ref("#常用站点")

const scrollToDiv = (id: string) => {
    const testDiv = document.getElementById(id);
    if (testDiv) { testDiv.scrollIntoView(true) }
};
const crontoview = (id: string) => {
    cron.value = setInterval(()=>{
        const testDiv = document.getElementById(id);
        if (testDiv) {
            testDiv.scrollIntoView(true);
            clearInterval(cron.value);
        }
    }, 100)
}
const npage = (url: string) => { window.open(url) };

onMounted(() => {
    document.getElementsByTagName("html")[0].classList.add("dark");
    const loadingService = ElLoading.service({fullscreen: true, text: "正在加载数据 ~"});
    getdata().then((res: any) => { data.value = res; loadingService.close(); });
    if (decodeURIComponent(route.fullPath).indexOf("#")!= -1) {
        default_active.value = '#' + decodeURIComponent(route.fullPath).split("#")[1];
        crontoview(decodeURIComponent(route.fullPath).split("#")[1])
    } else {
        default_active.value = "#常用站点";
        scrollToDiv("常用站点");
    }
    window.addEventListener("hashchange", ()=> {
        if (decodeURIComponent(route.fullPath).indexOf("#") != -1) {
            default_active.value = '#' + decodeURIComponent(route.fullPath).split("#")[1];
            scrollToDiv(decodeURIComponent(route.fullPath).split("#")[1])
            scrollToDiv('side-' + decodeURIComponent(route.fullPath).split("#")[1])
        } else {
            default_active.value = "#常用站点";
            scrollToDiv("常用站点");
            scrollToDiv('side-常用站点')
        }
    })
})
onUnmounted(() => { document.getElementsByTagName("html")[0].classList.remove("dark") })
</script>

<style scoped lang="less">
.el-container {
    width: 100%;
    height: 100%;
    position: absolute;
    user-select: none;
    top: 0;
    left: 0;

    #menuRef {
        width: 200px;
        height: 100%;
        border-right: 1px solid gray;

        div {
            width: 100%;
            height: 30px;
            border-bottom: 1px solid gray;
            display: flex;
            justify-content: center;
        }

        .el-menu-vertical-demo {
            height: 100%;
            overflow: auto;
        }
    }

    #bodyRef {
        width: calc(100% - 200px);
        height: 100%;
        .el-main {
            width: 100%;
            height: 100%;
            .main-body {
                width: 100%;

                .card-title {
                    height: 25px;
                    font-size: 20px;
                    color: skyblue;

                    .el-icon {
                    position: relative;
                    top: 3px;
                    }
                }

                .div-card {
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 10px;

                    &::after {
                    content: '';
                    flex: auto;
                    }

                    @media screen and (max-width: 450px) {
                    .div-card-body {
                        width: 100% !important;
                    }
                    }
                    @media screen and (min-width: 450px) and (max-width: 768px) {
                    gap: 15px;
                    .div-card-body {
                        width: calc(100% / 2 - 10px) !important;
                    }
                    }
                    @media screen and (min-width: 768px) and (max-width: 1024px) {
                    gap: 15px;
                    .div-card-body {
                        width: calc(100% / 3 - 10px) !important;
                    }
                    }
                    
                    .div-card-body {
                    width: calc(100% / 6 - 10px);
                    height: 50px;
                    display: flex;
                    overflow: hidden;
                    background-color: rgba(255, 255, 255, 0.2);
                    opacity: 0.6;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    backdrop-filter: blur(10px);

                    img {
                        width: 30px;
                        height: 30px;
                        margin: auto 0;
                        padding-left: 10px;
                    }

                    a {
                        text-decoration: none;
                        line-height: 50px;
                        padding-left: 10px;
                    }
                    }

                    .div-card-body:hover {
                        opacity: 0.9;
                    }
                }
            }
            .main-body:first-child {
                margin-top: -20px;
            }
        }
    }
}
</style>
<template>
    <el-dialog v-model="changyan_model" title="留言板" center fullscreen append-to-body :close-on-click-modal="false">
        <div id="SOHUCS" sid="WTHOME"></div>
    </el-dialog>
</template>

<script setup lang="ts">
import $ from "jquery";
import { ref, inject, onMounted, onUnmounted } from "vue";

const changyan_model = inject('changyan_model');
const windows = window as any;
const intervel = ref()
const intervel1 = ref()
windows.cyan = undefined;
windows.changyan = undefined;

onMounted(() => {
    document.getElementsByTagName("html")[0].classList.add("dark");
    intervel.value = setInterval(() => {
        if (document.getElementById("SOHUCS") != null) {
            clearInterval(intervel.value);
            $.getScript('https://changyan.sohu.com/upload/changyan.js', () => {
                windows.changyan.api.config({ appid: 'cyx3JaAA8', conf: '96b5d6c7cc856f0782bdbc5c68e214e4' })
            })
        }
    }, 1000)

    intervel1.value = setInterval(() => {
        const lyb_list: any = document.getElementsByClassName("module-cmt-list");
        const lyb_list_block: any = document.getElementsByClassName("type-list"); // *人参与,*条评论
        const lyb_list_block1: any = document.getElementsByClassName("section-service-w");
        const lyb_list_block2: any = document.getElementsByClassName("cmt-list-type");
        // const lyb_list_block3:any = document.getElementsByClassName("block-cont-gw");
        // const lyb_list_block4:any = document.getElementsByClassName("wrap-action-gw");

        if (lyb_list_block.length != 0) {
            lyb_list_block[0].style.display = "none";
        }
        if (lyb_list_block1.length != 0) {
            lyb_list_block1[0].style.display = "none";
        }
        if (lyb_list_block2.length != 0) {
            lyb_list_block2[0].style.display = "none";
        }
        if (lyb_list.length != 0) {
            lyb_list[0].style.position = "fixed";
            lyb_list[0].style.width = "calc(100% - 100px)";
            lyb_list[0].style.minWidth = "350px";
            lyb_list[0].style.height = "calc(100% - 300px)";
            lyb_list[0].style.top = "250px";
            lyb_list[0].style.overflow = "auto";

        }
        // if (lyb_list_block3.length != 0) {
        //   for (let index = 0; index < lyb_list_block3.length; index++) {
        //     lyb_list_block3[index].style.borderBottom = "none";
        //   }
        // }
        // if (lyb_list_block4.length != 0) {
        //   for (let index = 0; index < lyb_list_block4.length; index++) {
        //     lyb_list_block4[index].style.display = "none";
        //   }
        // }
    }, 1000)

    intervel1.value = setInterval(() => {
        const phone_input: any = document.getElementsByClassName("phone-input");
        const password_input: any = document.getElementsByClassName("password-input");
        const identifying_input: any = document.getElementsByClassName("identifying-input");

        if (phone_input.length != 0) { phone_input[0].style.backgroundColor = "white"; }
        if (password_input.length != 0) { password_input[0].style.backgroundColor = "white"; }
        if (password_input.length == 2) { password_input[1].style.backgroundColor = "white"; }
        if (identifying_input.length != 0) { identifying_input[0].style.backgroundColor = "white"; }
    }, 1000)
})
onUnmounted(() => {
    document.getElementsByTagName("html")[0].classList.remove("dark");
    clearInterval(intervel.value);
    clearInterval(intervel1.value);
})
</script>

<style scoped lang="less">
.main-body {
    width: 100%;

    .card-title {
        height: 25px;
        font-size: 20px;
        color: skyblue;
        font-family: var(--fontFamily);

        .el-icon {
            position: relative;
            top: 3px;
        }
    }

    .div-card {
        margin-top: -10px;
    }
}
</style>
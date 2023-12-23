<template>
    <div class="quote">
        <p id="quoteText"> <span class="cursor">_</span></p>
    </div>
</template>

<script setup lang="ts">
import $ from "jquery";

const printword = (data: any) => {
    let index = 0; //data数组的下标
    let strIndex = 0; //data数组每一项字符串的下标
    let start: any = null; //开始的时间或是上一刻的时间
    let interval = 0; //上次操作与现在的时间间隔
    let change = 200; //每次变化的间隔
    let isDelete = false; //现在是否是删除状态
    function blink(time: number) {
        window.requestAnimationFrame(blink);
        if (!start) {
            start = time;
        }
        interval = time - start;
        if (interval > change) {
            //取出数组的某一个字符串
            let str = data[index];
            //不在删除状态
            if (!isDelete) {
                $("#quoteText").html(str.slice(0, ++strIndex));
                $("#quoteText .cursor").remove();
                $("<span class='cursor'>_</span>").appendTo("#quoteText");
            }
            else {
                $("#quoteText").html(str.slice(0, strIndex--));
            }
            start = time;
            if (strIndex == str.length) {
                isDelete = true;
                change = 200;
                start = time + 1000;
            }
            if (strIndex < 0) {
                isDelete = false;
                start = time + 200;
                index++;
            }
            if (index == data.length) {
                index = 0;
            }
        }
    }
    window.requestAnimationFrame(blink);
};

$(document).ready(() => {
    $.ajax({
        type: "get", // 请求类型（get/post）
        url: "https://api.vvhan.com/api/ian?type=json",
        async: true, // 是否异步
        dataType: "json", // 设置数据类型
        success: (res: any) => { printword([res["data"]["vhan"]]); },
        error: () => { printword(["只要抗争下去就能带来奇迹，这是恐怖分子的教诲，你给我记清楚了。"]); }
    });
});
</script>

<style scoped>
@keyframes blink {
    50% {
        opacity: 0;
    }
}

.cursor {
    animation: blink 0.1s step-end infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

#quoteText {
    font-family: var(--fontFamily);
    text-align: center;
    line-height: 50px;
    font-size: 20px;
}
</style>
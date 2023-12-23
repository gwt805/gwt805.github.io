<template>
  <layout v-for="item in data">
    <template #hline> {{ item?.name }}</template>
    <template #layout v-for="dt in item">
      <el-col class="col" :span="4" v-for="id in dt" @click="npage(id.link)">
        <el-card class="card pt" shadow="hover">
          <img :src=id.imgUrl alt="Logo" draggable="false">
          <a :href=id.link target="_blank" class="aname" draggable="false">{{ id.name }}</a>
        </el-card>
      </el-col>
    </template>
  </layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getData } from "@/api/data";
import layout from "@/components/template/layout.vue";

const data: any = ref([]);

onMounted(() => {
  getData().then((res: any) => {
    data.value = res;
  })
});

const npage = (url: string) => { window.open(url); };
</script>
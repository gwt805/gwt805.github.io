<template>
    <el-divider class="zline"><span class='hline'><slot name="hline"></slot></span></el-divider>
    <el-row class="row" :gutter="12">
        <slot name="layout"></slot>
    </el-row>
</template>

<script setup lang="ts"></script>

<style>
.hline {
    font-size: 20px;
    font-family: var(--fontFamily);
}
.zline:first-child {
  margin-top: -10px;
}
.row {
  margin-bottom: 20px;
  overflow: auto !important;
}
.col {
  margin-bottom: 20px;
}
.row .col .card {
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 0.8;
  backdrop-filter: blur(10px);
}
.row .col .card:hover {
  border: 1px solid #409eff;
}
.row .col .card img {
  width: 37px;
  height: 37px;
  float:inline-start;
  margin: -8px 10px 0 0;
  border-radius: 50%;
}
.row .col .card p {
  display: inline-block;
  width: calc(100% - 50px);
  overflow: hidden;
  white-space: nowrap;
}
</style>
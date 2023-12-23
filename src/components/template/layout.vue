<template>
    <el-divider><span class='hline'><el-icon><star-filled /></el-icon><slot name="hline"></slot></span></el-divider>
    <el-row class="row" :gutter="12">
        <slot name="layout"></slot>
    </el-row>
</template>

<script setup lang="ts">
import { StarFilled } from "@element-plus/icons-vue";
</script>

<style>
.hline {
    font-size: 20px;
    color: rgba(255, 255, 255);
    font-family: var(--fontFamily);
    filter: opacity(0.7);
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
  filter: opacity(0.8);
  opacity: 0.8;
  backdrop-filter: blur(10px);
  overflow-wrap:normal;
}
.row .col .pt:hover {
  border: 1px solid #409eff;
  box-shadow:
     3px 3px 3px #409eff,
     3px -3px 3px #409eff,
     -3px 3px 3px #409eff,
     -3px -3px 3px #409eff;
}
.row .col .card img {
  width: 37px;
  float:inline-start;
  margin: -8px 10px 0 0;
  border-radius: 50%;
}
.row .col .card a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  white-space: nowrap;
}
.row .col .card:hover a {
    animation: move 2s infinite alternate linear;
}
@keyframes move {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(calc(-100% + 150px), 0);
    }
}
</style>
<!-- 主体 -->
<template>
  <div class="main-container w" id="main">
    <!-- 通知栏 -->
    <Notice />
    <!-- 赛事活动专区 -->
    <Activity />
    <!-- 编程好工具 -->
    <CodingTool id="labs" />
    <!-- 趣味课程，名师名家带你学 -->
    <Interesting id="courses" />
    <!-- 精彩作品，学以致用 -->
    <Production id="project" />
    <!-- 扣叮动态 -->
    <News id="codingnews" />
    <!-- 校园风采 -->
    <School id="cocase" />
    <!-- 合作伙伴 -->
    <Partner id="cooperator" />
  </div>
</template>

<script setup>
import Notice from './Notice.vue'
import Activity from './Activity.vue'
import CodingTool from './CodingTool.vue'
import Interesting from './Interesting.vue'
import Production from './Production.vue'
import News from './News.vue'
import School from './School.vue'
import Partner from './Partner.vue'
</script>

<style lang="scss" scoped></style>

<!-- 通知栏 -->
<template>
  <div class="notice-container">
    <i class="icon-spr icon-spr-notice"></i>
    <p class="notice-text cursor">{{ curText }}</p>
    <i class="notice-tag hot">Hot</i>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useLoop } from '@/hooks/useLoop.js'

const noticeList = [
  '腾讯编程课进村，这是孩子们创作的“APP”',
  '立项四年，腾讯互娱如何做编程教育',
  '腾讯互娱如何做编程教育',
  '2021腾讯追梦营嘉年华圆满落幕',
  '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据数据测试数据测试数据测试数据测试数据'
]

const { curIndex, loop, killLoop } = useLoop(noticeList, 2000)

const curText = computed(() => noticeList[curIndex.value])

onMounted(loop)
onUnmounted(killLoop)
</script>

<style lang="scss" scoped>
@import '@/styles/layout.scss';
.notice-container {
  margin: 0 auto;
  width: $contentWidth;
  height: 70px;
  background: #fff;
  border-radius: 0 0 12px 12px;
  padding: 0 28px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  .icon-spr {
    display: inline-block;
    background-image: url('@/assets/images/common/spr.png');
    &.icon-spr-notice {
      background-position: 0px -40px;
      width: 138px;
      height: 22px;
    }
  }
  .notice-text {
    max-width: 80%;
    margin: 0 10px 0 14px;
    @include text-overflow();
    &:hover {
      color: #009cff;
    }
  }
  .notice-tag {
    width: 36px;
    height: 16px;
    border-radius: 8px 8px 8px 0;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
    &.hot {
      background: #eb676a;
    }
  }
}
</style>

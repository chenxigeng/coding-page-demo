<!-- Banner -->
<template>
  <div class="banner-container pr w">
    <!-- 切片盒子 -->
    <ul class="slide-wrap w h pa">
      <li
        class="slide-item w h pa"
        @mouseover="killLoop"
        @mouseout="navItemClick(curBannerIndex)"
        :class="{ active: index === curBannerIndex }"
        v-for="(item, index) in bannerList"
      >
        <a class="slide-item-link">
          <img class="slide-item-pic" :src="item.imgSrc" alt="" />
        </a>
      </li>
    </ul>
    <!-- 切片导航 -->
    <div class="slide-nav-box pa">
      <div class="nav-btn cursor prev" @click="navBtnClick('prev')">
        <i class="iconhome iconhome-arrow"></i>
      </div>
      <ul class="nav-list">
        <li class="nav-item" :class="{ active: index === curBannerIndex }" v-for="(item, index) in bannerList" @click="navItemClick(index)">
          <a class="nav-item-link">{{ item.label }}</a>
        </li>
      </ul>
      <div class="nav-btn cursor next" @click="navBtnClick('next')">
        <i class="iconhome iconhome-arrow"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import banner_1 from '@/assets/images/banner/20220909_2huzgbj4onv.png'
import banner_2 from '@/assets/images/banner/20221017_i1n62bthmuobanner.png'
import banner_3 from '@/assets/images/banner/20220901_rz0z7qqh2gtgebanner.jpg'
import banner_4 from '@/assets/images/banner/20220909_9e0choci7rg_20220909101245.jpg'
import banner_5 from '@/assets/images/banner/20211230_u9kh06gxj4a79e15a997c42203c515773168a900f9.jpg'
import { onMounted, onUnmounted } from 'vue'
import { useLoop } from '@/hooks/useLoop.js'

const bannerList = [
  {
    label: '第四届追梦营',
    imgSrc: banner_1
  },
  {
    label: '深圳创客节创意编程赛',
    imgSrc: banner_2
  },
  {
    label: '深圳TGE虚拟机器人挑战赛',
    imgSrc: banner_3
  },
  {
    label: '编程与人工智能活动',
    imgSrc: banner_4
  },
  {
    label: '腾讯游戏年度故事片',
    imgSrc: banner_5
  }
]

const { curIndex: curBannerIndex, countIndex, loop, killLoop } = useLoop(bannerList, 3000)

const navItemClick = index => {
  curBannerIndex.value = index
  loop()
}

const navBtnClick = type => {
  const map = {
    prev: -1,
    next: 1
  }
  curBannerIndex.value = countIndex(map[type])
  loop()
}

onMounted(loop)
onUnmounted(killLoop)
</script>

<style lang="scss" scoped>
@import '@/styles/font/banner-fonticon.css';
@import '@/styles/layout.scss';
.banner-container {
  height: 480px;
  background: #e3ebf3;
  padding-top: 0;
  .slide-wrap {
    left: 0;
    top: 0;
    .slide-item {
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s;
      .slide-item-link {
        display: block;
      }
      .slide-item-pic {
        display: block;
        max-width: 100%;
        margin: 0 auto;
        object-fit: cover;
        object-position: 50% 50%;
      }
      &.active {
        opacity: 1;
      }
    }
  }
  .slide-nav-box {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: $contentWidth;
    height: 50px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    z-index: 9;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    .nav-btn {
      display: block;
      width: 50px;
      line-height: 50px;
      text-align: center;
      position: relative;
      font-size: 16px;
      color: rgba(74, 89, 111, 0.4);
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 6px;
        width: 100%;
        background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
      }

      &:hover {
        background-color: #fff;
        .iconhome {
          color: #009cff;
        }
      }

      &.prev {
        border-right: 1px solid rgba(255, 255, 255, 0.6);
        .iconhome {
          display: inline-block;
          transform: rotate(180deg);
        }
      }
    }
    .nav-list {
      flex: 1;
      height: 50px;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      .nav-item {
        flex: 1;
        text-align: center;
        position: relative;
        line-height: 50px;
        border-right: 1px solid rgba(255, 255, 255, 0.6);
        .nav-item-link {
          display: block;
          color: #4a596f;
          font-size: 16px;
          transition: all 200ms;
        }

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 6px;
          width: 100%;
          background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
        }

        &:hover {
          .nav-item-link {
            color: #009cff;
          }
        }

        &.active {
          .nav-item-link {
            color: #009cff;
          }
          &::after {
            height: 3px;
            background: #009cff;
          }
        }
      }
    }
  }
}
@media (max-width: 1920px) {
  .banner-container {
    padding-top: 25%;
    height: auto;
  }
}
</style>

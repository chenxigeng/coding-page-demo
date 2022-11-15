<!-- 板块 编程好工具 -->
<template>
  <div class="page-container codingTool">
    <section class="page-section">
      <div class="page-section-header">
        <h2 class="page-section-title">编程好工具，学习更轻松</h2>
        <p class="page-section-subtitle">选择适合你的编程神器</p>
      </div>
      <div class="labs-wrap">
        <div class="labs-aside">
          <ul class="labs-nav">
            <li
              class="labs-nav-item cursor"
              :class="{ active: curActiveId === item.id }"
              @click="setIndex('active', item.id)"
              @mouseover="setIndex('hover', item.id)"
              @mouseout="setIndex('hover', -1)"
              v-for="item in curNavList"
              :key="item.id"
            >
              <div
                class="labs-nav-item-icon"
                :style="{
                  backgroundColor: [curHoverId, curActiveId].includes(item.id) ? item.iconBgColor : '#fff'
                }"
              >
                <img class="labs-nav-item-icon-pic" :src="item.iconSrc" alt="icon" />
              </div>
              <div class="labs-nav-item-info">
                <p class="labs-nav-item-title">{{ item.itemTitle }}</p>
                <p class="labs-nav-item-keywords">
                  <span v-for="keyword in item.keywords">{{ keyword }}</span>
                </p>
              </div>
            </li>
          </ul>
          <div class="labs-aside-more">
            <a class="labs-aside-more-btn" :class="{ expand: curPageIndex === 1 }" @click="setPageIndex">
              <i class="iconhome iconhome-more"></i>
            </a>
          </div>
        </div>
        <div class="labs-main">
          <div class="labs-intro w">
            <div class="labs-intro-figure">
              <p class="labs-intro-figure-info">
                <i class="iconhome iconhome-flag"></i>
                {{ curMainData.info }}
              </p>
              <p class="labs-intro-figure-title">{{ curMainData.title }}</p>
              <p class="labs-intro-figure-description">
                {{ curMainData.desc }}
              </p>
              <div class="labs-intro-figure-ctrl" :class="[...curMainData.ctrlBtnClass]">
                <div class="labs-intro-figure-ctrl-btn">
                  <div class="xgame-labs-popover">
                    <img
                      class="xgame-labs-popover-pic"
                      src="https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_jwiemj3etneqrcode.png"
                      alt=""
                    />
                    <p class="xgame-labs-popover-text">扫码下载，立即体验</p>
                  </div>
                  <i
                    v-if="curMainData.ctrlBtnIcon"
                    :style="{
                      background: `url(${curMainData.ctrlBtnIcon}) no-repeat`,
                      backgroundSize: '14px 14px'
                    }"
                    class="labs-intro-figure-ctrl-btn-icon"
                  ></i>
                  {{ curMainData.ctrlBtnText }}
                </div>
                <a v-if="curMainData.hasMore" class="labs-text-more" target="_blank" rel="noopener noreferrer">
                  了解更多
                  <i class="iconhome iconhome-arrow"></i>
                </a>
              </div>
            </div>
            <div class="labs-intro-media img-wrap" :class="{ cursor: curMainData.mediaType === 'image' }">
              <video
                v-if="curMainData.mediaType === 'video'"
                :src="curMainData.mediaSrc"
                autoplay
                playsinline=""
                webkit-playsinline="true"
                mtt-playsinline="true"
                loop="true"
                muted
                style="width: 100%; height: 100%"
              ></video>
              <img class="labs-intro-media-img img-wrap-pic" v-if="curMainData.mediaType === 'image'" :src="curMainData.mediaSrc" alt="media" />
            </div>
          </div>
          <div class="labs-example" v-if="curMainData.exampleList?.length">
            <div class="labs-example-hd">
              <h3 class="labs-example-hd-title">入门学习</h3>
              <a class="labs-text-more" target="_blank" rel="noopener noreferrer">
                更多案例
                <i class="iconhome iconhome-arrow"></i>
              </a>
            </div>
            <div class="labs-example-bd w">
              <ul class="labs-example-list">
                <li class="labs-example-item" v-for="item in curMainData.exampleList.slice(0, 3)">
                  <div class="img-wrap">
                    <a href="javascript:void(0)">
                      <img class="labs-example-item-pic img-wrap-pic" :src="item.imgSrc" alt="course-cover" />
                    </a>
                  </div>
                  <p class="labs-example-item-name">
                    <a href="javascript:void(0)">{{ item.label }}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { navList } from './data/codingTool'
import { ref, computed } from 'vue'

const curHoverId = ref(-1) // 当前悬停的item记录
const curActiveId = ref(1) // 当前选中的item记录

const navLen = navList.length // 数组长度
const pageSize = 7 // 页面数据条数
const curPageIndex = ref(1) // 当前页数

// 当前页数是否为最后一页
const isLastPage = computed(() => curPageIndex.value === Math.ceil(navLen / pageSize))

// 当前侧栏显示的nav数组
const curNavList = computed(() => {
  let result = []
  const startIndex = (curPageIndex.value - 1) * pageSize
  const lastPageSize = navLen % pageSize // 最后一页的数据实际数量
  /**判断当前页数是否为最后一页
   * TODO: 待优化点：当总数据不满一页时需处理
   *  */
  if (navLen > pageSize && isLastPage.value) {
    const front = navList.slice(startIndex, startIndex + lastPageSize)
    const end = navList.slice(0, pageSize - lastPageSize)
    result = [...front, ...end]
  } else {
    result = navList.slice(startIndex, startIndex + pageSize)
  }

  return result
})

// 当前选中的item的data数据
const curMainData = computed(() => {
  return navList.find(item => item.id === curActiveId.value).data
})

const setPageIndex = () => {
  const factor = isLastPage.value ? -1 : 1
  curPageIndex.value = curPageIndex.value + factor
}

const setIndex = (type, id) => {
  switch (type) {
    case 'hover':
      curHoverId.value = id
      break
    case 'active':
      curActiveId.value = id
      break
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/font/banner-fonticon.css';
.codingTool .page-section {
  padding-bottom: 80px;
}
.labs-wrap {
  border-radius: 12px;
  background: #fff;
  height: 600px;
  overflow: hidden;
  display: flex;
  .labs-aside {
    width: 290px;
    padding-bottom: 26px;
    background-color: #009cff;
    .labs-nav {
      .labs-nav-item {
        position: relative;
        display: flex;
        align-items: center;
        height: 82px;
        padding: 0 20px;
        border-bottom: 1px solid #0090ff;
        &::before {
          content: '';
          width: 4px;
          position: absolute;
          left: 0;
          top: 0;
          height: 82px;
          background: #0080ff;
          display: none;
        }

        &-icon {
          position: relative;
          width: 48px;
          height: 48px;
          background: #fff;
          border-radius: 12px;
          text-align: center;
          margin-right: 14px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          .labs-nav-item-icon-pic {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        &-info {
          color: #fff;
        }
        &-title,
        &-keywords {
          width: 180px;
          @include text-overflow();
        }
        &-title {
          font-size: 18px;
        }
        &-keywords {
          font-size: 12px;
          span {
            margin-right: 4px;
          }
        }

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          .labs-nav-item-icon {
            border-radius: 50%;
            .labs-nav-item-icon-pic {
              transform: translate(-50%, -50%) scale(0.9);
            }
          }
        }

        &.active {
          background: #fff;
          &::before {
            display: block;
          }
          .labs-nav-item-icon {
            border-radius: 50%;
          }
          .labs-nav-item-info {
            color: #498ff6;
          }
        }
      }
    }

    .labs-aside-more {
      height: 26px;
      background: #0080ff;
      text-align: center;
      .labs-aside-more-btn {
        display: block;
        line-height: 1.5;
        .iconhome {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          display: inline-block;
          transform: rotate(180deg) scale(0.7);
        }

        &.expand {
          .iconhome {
            transform: scale(0.7);
            color: #fff;
          }
        }

        &:hover {
          .iconhome {
            color: #fff;
          }
        }
      }
    }
  }
  .labs-main {
    flex: 1;
    padding: 0 50px;
    overflow: hidden;
    .labs-text-more {
      color: #4a596f;
      .iconhome {
        font-size: 12px;
      }
      &:hover {
        color: #009cff;
      }
    }
    .labs-intro {
      padding-top: 30px;
      display: flex;
      border-bottom: 1px solid rgba(74, 89, 111, 0.1);
      padding-bottom: 20px;
      margin-bottom: 20px;
      .labs-intro-figure {
        width: 410px;
        .labs-intro-figure-info {
          height: 30px;
          display: flex;
          align-items: center;
          .iconhome {
            margin-right: 10px;
            color: #ffc919;
            font-size: 24px;
          }
        }
        .labs-intro-figure-title {
          font-size: 24px;
          margin: 23px 0 12px;
        }
        .labs-intro-figure-description {
          color: rgba(74, 89, 111, 0.6);
          line-height: 30px;
          height: 90px;
          @include text-overflow(3);
        }
        .labs-intro-figure-ctrl {
          margin-top: 30px;
          display: flex;
          align-items: center;
          height: 40px;
          .labs-intro-figure-ctrl-btn {
            width: 150px;
            height: 40px;
            line-height: 40px;
            background: #0080ff;
            border-radius: 20px;
            color: #fff;
            text-align: center;
            display: block;
            margin-right: 28px;
            .labs-intro-figure-ctrl-btn-icon {
              width: 14px;
              height: 14px;
              display: block;
              margin-right: 6px;
            }
            .xgame-labs-popover {
              display: none;
              position: absolute;
              left: 50%;
              margin-left: -107px;
              bottom: 30px;
              width: 214px;
              height: 243px;
              background: url(data:image/png;base64,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)
                no-repeat;
              padding-top: 32px;
              text-align: center;
              cursor: default;
              .xgame-labs-popover-pic {
                width: 142px;
                height: 142px;
                display: block;
                margin: 0 auto 0;
              }
              .xgame-labs-popover-text {
                color: rgba(77, 90, 109, 0.6);
              }
            }
            &:hover {
              background: #009cff;
            }
          }

          &.xgame-labs {
            .labs-intro-figure-ctrl-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              position: relative;
              &:hover {
                background: #009cff;
                .xgame-labs-popover {
                  display: block;
                }
              }
            }
          }
        }
      }
      .labs-intro-media {
        width: 360px;
        height: 270px;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        margin-left: 40px;
        border: 1px solid rgba(74, 89, 111, 0.1);
        .labs-intro-media-img {
          width: 360px;
          height: 270px;
          object-fit: cover;
        }
      }
    }
    .labs-example {
      .labs-example-hd {
        height: 34px;
        display: flex;
        align-items: center;
        .labs-example-hd-title {
          flex: 1;
          font-size: 18px;
          font-weight: normal;
        }
      }
      .labs-example-bd {
        overflow: hidden;
        .labs-example-list {
          margin-top: 8px;
          display: flex;
          flex-flow: row nowrap;
          .labs-example-item {
            width: 258px;
            height: 200px;
            margin-right: 18px;
            .img-wrap {
              overflow: hidden;
              cursor: pointer;
              border-radius: 4px;
              .labs-example-item-pic {
                width: 258px;
                height: 140px;
                display: block;
                border-radius: 4px;
              }
            }
            .labs-example-item-name {
              margin-top: 8px;
              @include text-overflow(2);
              & > a {
                color: #4a596f;
              }
            }
          }
        }
      }
    }
  }
}
</style>

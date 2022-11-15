<!-- 导航栏 -->
<template>
  <div class="nav-container w">
    <!-- logo盒子 -->
    <div class="logo-box">
      <a class="logo-gnyx" href="https://zhuimeng.qq.com/" target="_blank" rel="noopener noreferrer"></a>
      <span class="logo-line"></span>
      <a class="logo-coding" href="/"></a>
    </div>
    <!-- 导航菜单 -->
    <ul class="menu-box">
      <li
        class="menu-item pr"
        :class="[current === item.id && item.isClick ? 'active' : '', ...item.extraClass]"
        v-for="(item, index) in menuList"
        :key="item.id"
        @click="menuItemClick(item)"
        @mouseover="menuItemHover(item, index, true)"
        @mouseout="menuItemHover(item, index, false)"
      >
        <a class="menu-item-link cursor pr">
          {{ item.label }}
        </a>
        <div class="dropdown-box" v-show="item.showDropdown">
          <ul class="dropdown-list">
            <li class="dropdown-item" v-for="(dropItem, dropIndex) in item.dropdownList" :key="dropIndex">
              <a :href="dropItem.link" class="dropdown-item-link">{{ dropItem.label }}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!-- 右侧操作栏 -->
    <div class="toolbar-box">
      <!-- 立即创作按钮 -->
      <div class="pr ide-select">
        <div class="toolbar-btn cursor">立即创作</div>
        <div class="dropdown-box">
          <div class="dropdown-content">
            <ul class="dropdown-list">
              <li class="dropdown-item" v-for="(item, index) in selectList" :key="index">
                <a class="dropdown-item-link cursor">
                  <i class="ec-header-icon" :class="[item.iconClass]"></i>
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 登录按钮 -->
      <div class="ec-header-login">
        <div class="ec-header-login-content nulogin"><a class="ec-header-login-btn cursor">登录</a></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 默认当前id为1 即首页
const current = ref(1)

// 导航菜单数据
const menuList = ref([
  {
    id: 1,
    label: '首页',
    extraClass: [], // 额外类
    showDropdown: false, // 显示下拉菜单
    dropdownList: [], // 下拉菜单
    isClick: true // 是否可点击
  },
  {
    id: 2,
    label: '实验室',
    extraClass: [],
    showDropdown: false,
    dropdownList: [],
    isClick: true
  },
  {
    id: 3,
    label: '课程',
    extraClass: [],
    showDropdown: false,
    dropdownList: [],
    isClick: true
  },
  {
    id: 4,
    label: '名师团',
    extraClass: [],
    showDropdown: false,
    dropdownList: [],
    isClick: true
  },
  {
    id: 5,
    label: '校园',
    extraClass: [],
    showDropdown: false,
    dropdownList: [],
    isClick: true
  },
  {
    id: 6,
    label: '社区',
    extraClass: [],
    showDropdown: false,
    dropdownList: [],
    isClick: true
  },
  {
    id: 7,
    label: '追梦营',
    extraClass: [],
    showDropdown: false,
    dropdownList: [],
    isClick: true
  },
  {
    id: 8,
    label: 'CodingDay',
    extraClass: [],
    showDropdown: false,
    dropdownList: [],
    isClick: true
  },
  {
    id: 9,
    label: '赛事活动',
    extraClass: ['dropdown'],
    showDropdown: false,
    dropdownList: [
      {
        label: '2022年NOC扣叮创意编程',
        link: 'https://coding.qq.com/noc-2022/'
      },
      {
        label: '深圳创客节创意编程赛',
        link: 'https://coding.qq.com/maker-2022/'
      },
      {
        label: '龙岗区第十四届中小学生科技奥林匹克竞赛活动',
        link: 'https://coding.qq.com/maker-longgang-2022/'
      }
    ],
    isClick: false
  }
])

// 创作按钮下拉数据
const selectList = [
  {
    label: '创意实验室',
    iconClass: 'ec-header-icon-creative-ide'
  },
  {
    label: 'Python实验室',
    iconClass: 'ec-header-icon-python-ide'
  },
  {
    label: '3D实验室',
    iconClass: 'ec-header-icon-3d'
  },
  {
    label: '人工智能实验室',
    iconClass: 'ec-header-icon-ai-ide'
  },
  {
    label: '游戏实验室',
    iconClass: 'ec-header-icon-game-ide'
  },
  {
    label: '艺术(p5)实验室',
    iconClass: 'ec-header-icon-p5-ide'
  },
  {
    label: '硬件实验室',
    iconClass: 'ec-header-icon-hardware-ide'
  },
  {
    label: 'JS实验室',
    iconClass: 'ec-header-icon-js-ide'
  }
]

/**通用菜单项点击事件
 * @param {Object} item 点击菜单项对应数据
 */
const menuItemClick = item => {
  if (!item.isClick) return
  current.value = item.id
}

const menuItemHover = (item, index, visible) => {
  if (Array.isArray(item.dropdownList) && item.dropdownList.length) {
    menuList.value[index].showDropdown = visible
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/font/nav-fonticon.css';
@import '@/styles/layout.scss';
.nav-container {
  height: $navHeight;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  .logo-box {
    width: 380px;
    padding-left: 40px;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    .logo-line {
      height: 25px;
      width: 1px;
      background: #d4dce8;
      display: block;
      margin: 0 10px;
    }
    .logo-gnyx {
      width: 180px;
      height: 52px;
      background: url('@/assets/images/nav/logo_gnyx.png') no-repeat;
      background-size: 100% auto;
    }
    .logo-coding {
      width: 133px;
      height: 57px;
      background: url('@/assets/images/nav/logo_coding.png') no-repeat;
      background-size: 100% auto;
    }
  }
  .menu-box {
    margin-left: 20px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    .menu-item {
      border-radius: 26px;
      transition: all 200ms;

      .menu-item-link {
        padding: 0 28px;
        line-height: 42px;
        color: #4a596f;
      }

      &:hover {
        background: rgba(74, 89, 111, 0.1);
      }

      &.active .menu-item-link {
        color: #0080ff;
        font-weight: bold;
      }
      &.dropdown {
        .menu-item-link {
          color: #0080ff;
          &::after {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #0080ff transparent transparent transparent;
            display: inline-block;
            content: '';
            margin-left: 6px;
            transition: all 200ms;
            vertical-align: 2px;
          }
        }
        .dropdown-box {
          width: 214px;
          .dropdown-item {
            line-height: 1.5;
            .dropdown-item-link {
              padding: 10px 20px;
            }
          }
        }
        &:hover {
          background: #fff;
          .menu-item-link::after {
            transform: rotate(0.5turn);
          }
        }
      }
    }
  }
  .toolbar-box {
    position: absolute;
    right: 40px;
    top: 0;
    height: 60px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    .toolbar-btn {
      transition: all 0.5s ease;
      width: 112px;
      line-height: 34px;
      background-color: #0080ff;
      border-radius: 17px;
      color: #fff;
      text-align: center;
      font-size: 16px;
      &::after {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 4px 0 4px;
        border-color: #fff transparent transparent transparent;
        display: inline-block;
        content: '';
        margin-left: 6px;
        transition: all 200ms;
        vertical-align: 2px;
      }
    }
    .ide-select {
      .dropdown-box {
        display: none;
        .dropdown-item-link:hover .ec-header-icon {
          color: #009cff;
        }
      }
      &:hover {
        .dropdown-box {
          display: block;
        }
        .toolbar-btn::after {
          transform: rotate(0.5turn);
        }
      }
    }
    .ec-header-login {
      margin: 0 0 0 20px;
      line-height: 60px;
      color: rgba(74, 89, 111, 0.6);
      .ec-header-login-btn {
        color: #4a596f;
      }
    }
  }
  .dropdown-box {
    position: absolute;
    z-index: 101;
    background: #fff;
    box-shadow: 0 4px 20px rgb(77 90 109 / 40%);
    border-radius: 8px;
    width: 178px;
    top: 36px;
    left: 50%;
    margin-left: -89px;
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 6px 10px;
      border-color: transparent transparent #fff transparent;
      top: -6px;
      left: 50%;
      margin-left: -10px;
    }
    &::after {
      background: transparent;
      height: 6px;
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      top: -6px;
    }
    .dropdown-list {
      overflow: hidden;
      border-radius: 8px;
      .dropdown-item {
        line-height: 43px;
        position: relative;
        .dropdown-item-link {
          padding: 0 20px;
          font-size: 14px;
          color: #4a596f;
          display: block;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          &:hover {
            background: #f0f3f7;
            color: #009cff;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1460px) {
  .nav-container .menu-box .menu-item .menu-item-link {
    padding: 0 15px !important;
    line-height: 34px !important;
  }
}
</style>

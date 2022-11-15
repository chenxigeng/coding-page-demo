import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
  id: 'sidebar', // id必填，且需要唯一
  state: () => {
    return {
      anchorList: [
        {
          anchor: '#labs',
          text: '实验室',
          iconClass: 'sidebaricon-labs'
        },
        {
          anchor: '#courses',
          text: '学好课',
          iconClass: 'sidebaricon-course'
        },
        {
          anchor: '#project',
          text: '好作品',
          iconClass: 'sidebaricon-works'
        },
        {
          anchor: '#codingnews',
          text: '资讯',
          iconClass: 'sidebaricon-news'
        },
        {
          anchor: '#cocase',
          text: '校园',
          iconClass: 'sidebaricon-campus'
        },
        {
          anchor: '#cooperator',
          text: '合作',
          iconClass: 'sidebaricon-cooperation'
        }
      ],
      anchor: ''
    }
  },
  actions: {
    /** 设置全局锚点
     * @param {String} anchor
     */
    setAnchor(anchor) {
      this.anchor = anchor || ''
    },
    scrollTo(offsetTop) {
      const parent = document.querySelector('#app')
      parent.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    },
    anchorPosition(anchor) {
      const element = document.querySelector(anchor)
      this.scrollTo(element.offsetTop)
    }
  }
})

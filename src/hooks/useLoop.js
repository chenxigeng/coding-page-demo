import { ref } from 'vue'

// 轮播hook
export function useLoop(list, defaultInterval) {
  defaultInterval = defaultInterval || 1000 // 初始轮播间隔
  let timeout = null // 轮播定时器
  const max = Array.isArray(list) ? list.length : 1 // 轮播最大次数
  const curIndex = ref(0) // 轮播的当前索引

  /** 计算向前或向后的index
   * @param {*} factor 加/减系数，1为加法，-1为减法
   */
  const countIndex = factor => {
    let result = curIndex.value + factor
    if (result > max - 1) {
      result = 0
    } else if (result < 0) {
      result = max - 1
    }
    return result
  }

  /**轮播
   * @param {*} interval 间隔时长（ms）
   */
  const loop = (interval = defaultInterval) => {
    killLoop()
    timeout = setTimeout(() => {
      if (timeout) {
        curIndex.value = countIndex(1)
        loop()
      }
    }, interval)
  }

  // 终止轮播
  const killLoop = () => {
    clearTimeout(timeout)
    timeout = null
  }

  return {
    curIndex,
    countIndex,
    loop,
    killLoop
  }
}

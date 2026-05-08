/**
 * 设备判断工具
 */
export const device = {
  /**
   * 判断是否为移动设备
   */
  isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  },

  /**
   * 判断是否为iOS设备
   */
  isIOS(): boolean {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  },

  /**
   * 判断是否为Android设备
   */
  isAndroid(): boolean {
    return /Android/.test(navigator.userAgent)
  },

  /**
   * 判断是否为微信浏览器
   */
  isWeChat(): boolean {
    return /MicroMessenger/i.test(navigator.userAgent)
  },

  /**
   * 获取设备像素比
   */
  getPixelRatio(): number {
    return window.devicePixelRatio || 1
  },

  /**
   * 获取屏幕宽度
   */
  getScreenWidth(): number {
    return window.screen.width
  },

  /**
   * 获取屏幕高度
   */
  getScreenHeight(): number {
    return window.screen.height
  }
}
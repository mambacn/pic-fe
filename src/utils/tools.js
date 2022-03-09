// 判断用户客户端类型
export const isPCUser = () => {
  if (/AppleWebKit.*Mobile/i.test(navigator.userAgent)
    || /Android/i.test(navigator.userAgent)
    || /BlackBerry/i.test(navigator.userAgent)
    || /IEMobile/i.test(navigator.userAgent)
    || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
    if (/iPad/i.test(navigator.userAgent)) {
      // 平板用户
      return false
    } else {
      // 非平板移动端用户（手机）
      return false
    }
  } else {
    // pc用户
    return true
  }
}


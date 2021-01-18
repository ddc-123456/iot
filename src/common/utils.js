export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

/*用于判断目标元素是否出现在了可视区域内*/
export function scrollToListener(el, ifScroll) {

  document.addEventListener('scroll', function handleScroll(E) {

    const pageHeight = document.documentElement.clientHeight; //可视页面的高度
    const contentTop = el.getBoundingClientRect().top; //el相对于可视页面高度的距离
    const contentHeight = el.offsetHeight; //el的高度

    let result = (contentTop < pageHeight && contentTop >= 0) || (contentTop < 0 && (contentTop + contentHeight > 0));

    ifScroll(result);

    if (result) {
      document.removeEventListener('scroll', handleScroll);
    }
  })
}

export function scrollToTarget(index) {
  const
    targetList = document.querySelectorAll('.content'),
    targetOffsetTop = targetList[index].offsetTop,
    STEP = 50;

  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  targetOffsetTop && scrollTop > targetOffsetTop
    ? smoothUp()
    : smoothDown();

  function smoothUp() {
    if (scrollTop > targetOffsetTop) {
      scrollTop - targetOffsetTop >= STEP
        ? scrollTop -= STEP
        : scrollTop = targetOffsetTop;

      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;

      requestAnimationFrame(smoothUp);
    }
  }

  function smoothDown() {
    if (scrollTop < targetOffsetTop) {
      targetOffsetTop - scrollTop >= STEP
        ? scrollTop += STEP
        : scrollTop = targetOffsetTop;

      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;

      requestAnimationFrame(smoothDown);
    }
  }


}

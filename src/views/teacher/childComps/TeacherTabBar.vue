<template>
  <div class="tab-bar-box">
    <div class="img-box"><span>师资风采</span></div>
    <ul>
      <li :class="{active:active === 0}" @click="scrollTo(1)">师资简介</li>
      <li :class="{active:active === 1}" @click="scrollTo(2)">专任教师</li>
      <li :class="{active:active === 2}" @click="scrollTo(3)">兼职教师</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TeacherTabBar",
    data() {
      return {
        position: 0,
        isFixed: false,
        scrollTop: 0,
        active: null
      }
    },
    mounted() {
      // 监听滚动事件
      window.addEventListener('scroll', this.onScroll)
    },
    destroy() {
      // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        /*获取所有锚点元素*/
        const navContents = document.querySelectorAll('#content')

        /*获取说有锚点元素的offsetTop*/
        const offsetTopArr = []
        navContents.forEach(item => {
          offsetTopArr.push(item.offsetTop)
        })

        /*获取当前文档流的scrollTop*/
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

        /*定义当前点亮的下标*/
        let navIndex = 0
        for (let n = 0; n < offsetTopArr.length; n++) {
          // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
          // 那么此时导航索引就应该是 n 了
          if (scrollTop >= offsetTopArr[n]) {
            navIndex = n
          }

          /*把下标赋值给 vue 的 data*/
          // this.active = navIndex
        }

        if (scrollTop < offsetTopArr[0]) {
          this.active = null
        }
      },

      scrollTo(index) {

        const targetList = document.querySelectorAll('#content')
        const targetOffsetTop = targetList[index].offsetTop

        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

        const STEP = 50
        if (scrollTop > targetOffsetTop) {
          smoothUp()
        } else smoothDown()

        function smoothUp() {
          if (scrollTop > targetOffsetTop) {
            if (scrollTop - targetOffsetTop >= STEP) {
              scrollTop -= STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            requestAnimationFrame(smoothUp)
          }
        }

        function smoothDown() {
          // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
          if (scrollTop < targetOffsetTop) {
            // 如果和目标相差距离大于等于 STEP 就跳 STEP
            // 否则直接跳到目标点，目标是为了防止跳过了。
            if (targetOffsetTop - scrollTop >= STEP) {
              scrollTop += STEP
            } else {
              scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop   /*谷歌适配*/
            document.documentElement.scrollTop = scrollTop  /*火狐适配*/
            // 屏幕在绘制下一帧时会回调传给 requestAnimationFrame 的函数
            // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
            requestAnimationFrame(smoothDown)
          }
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-box {
    position: fixed;
    z-index: 9;
    margin-top: 50px;
  }

  .img-box {
    width: 203px;
    height: 49px;
    text-align: center;
    border: solid 1px var(--color-tint);
    border-radius: 15px 2px 15px 2px;
    background: var(--color-title);
  }

  .img-box span {
    line-height: 49px;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  ul {
    margin-top: 27px;
    list-style: none;
  }

  li {
    position: relative;
    width: 203px;
    height: 59px;
    text-align: center;
    line-height: 59px;
    font-weight: bold;
    font-size: 20px;
    color: var(--color-title-font);
    background-color: #fff;
  }

  li:hover {
    background-color: var(--color-tint);
    color: white;
    transition: 0.3s ease;
    transform: scale(1.1);
    z-index: 9;
  }

  .active {
    background-color: var(--color-tint);
    color: white;
  }

  li::after {
    position: absolute;
    content: '';
    width: calc(100% - 72px);
    height: 2px;
    background-color: var(--color-title);
    z-index: 9;
    right: 36px;
    bottom: 0;
    transition: 0.3s ease;
  }

  li:last-child::after {
    background: var(--color-background);
    z-index: -1;
  }

  li:hover::after {
    display: none;
  }

  .fixed {
    /*position: fixed;*/
  }
</style>

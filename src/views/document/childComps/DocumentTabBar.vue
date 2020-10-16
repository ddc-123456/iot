<template>
  <div class="tab-bar-box">
    <div class="img-box"><span>教学文件</span></div>
    <ul>
      <router-link
        to="/document/DocumentTalent"
        :class="{'active':activeIndex === 'DocumentTalent'}"
        tag="li"
      >
        人才培养方案
      </router-link>
      <router-link
        to="/document/DocumentCriterion"
        :class="{'active':activeIndex === 'DocumentCriterion'}"
        tag="li"
      >
        课程标准
      </router-link>
      <router-link
        to="/document/DocumentPlan"
        :class="{'active':activeIndex === 'DocumentPlan'}"
        tag="li"
      >
        教学计划
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: this.$route.name
    }
  },
  watch: {
    '$route' (to, from) {
      this.activeIndex = this.$route.name
      console.log(this.activeIndex);
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
  content: "";
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

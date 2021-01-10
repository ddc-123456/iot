<template>
  <div class="header">
    <span>{{ title }}</span>
    <a href="javascript:;">更多></a>
  </div>
</template>

<script>
  export default {
    name: "BlockHeader",
    props: {
      title: ''
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--line-color);
    margin-bottom: 10px;
  }

  .header span {
    font-size: 24px;
    font-weight: 600;
    border-bottom: 7px solid var(--line-color);
    position: relative;
    top: 4px;
    padding: 2px;
    z-index: 999;
  }

  .header a {
    font-size: 12px;
    color: #3ca59d;
    position: relative;
    top: 21px;
  }
</style>

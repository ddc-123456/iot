<template ref="teacherItem">
  <div>
    <!--标题栏部分-->
    <el-row>
      <el-col class="teacher-title">
        <el-row>
          <el-col :span="5">
            <h5><span><slot name="title-name"/></span></h5>
          </el-col>
          <el-col :span="1" :offset="18">
            <img src="../../../assets/img/setting.png" style="float: right" v-if="isShow" @click="toChangeProfile"
                 id="imgButtonSetting"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!--内容栏部分-->
    <el-row>
      <el-col>
        <slot name="content"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TeacherItem",
    data() {
      return {
        isShow: false
      }
    },
    props: {
      table: ''
    },
    mounted() {
      this.$bus.$on('isShow', res => {
        this.isShow = res
      })
    },
    methods: {
      toChangeProfile() {
        let table = this.table
        const ChangeHomePage = this.$router.resolve({
          name: 'ChangeProfilePage',
          query: {
            table
          }
        })

        window.open(ChangeHomePage.href, "_blank", "name", "height=700, width=1150, top=200, left=50, toolbar=no, menubar=no, scrollbars=no, resizable=yes,location=no, status=no");
      },
    }
  }
</script>

<style scoped>
  .el-col {
    background-color: white;
  }

  .teacher-title {
    /*border-bottom: 1px solid var(--line-color);*/
    line-height: 2;
    position: relative;
  }

  .teacher-title img {
    height: 40px;
    padding: 5px;
    cursor: pointer;
  }


  .teacher-title::after {
    content: '';
    position: absolute;
    width: calc(100% - 10px);
    height: 1px;
    bottom: 0;
    left: 5px;
    background-color: var(--color-title);
  }

  .teacher-title span {
    /*border-bottom: 5px solid var(--line-color);*/
    padding: 5px 8px;
    position: relative;
    z-index: 9;
  }

  .teacher-title span::after {
    content: '';
    position: absolute;
    width: calc(100% - 9px);
    height: 5px;
    bottom: -7px;
    left: 5px;
    background-color: var(--color-title);
  }

</style>

<template>
  <div id="register" class="bg-purple">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="工号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthDay" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="性别">
        <el-switch v-model="form.gender"
                   active-text="女" inactive-text="男"
                   active-color="#ff0000" inactive-color="#0000ff">
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        form: {
          account: '',
          password: '',
          birthDay: '',
          gender: false,
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  #register {
    padding: 50px 400px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>

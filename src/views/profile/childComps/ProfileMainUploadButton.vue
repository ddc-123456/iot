<template>
  <div>
    <input type="file" ref="upload" style="display:none;" @change="uploadChange">
    <img src="~assets/img/Upload-File.png" alt="" @click="upload" v-show="code !== 200">
    <img src="~assets/img/successful.png" alt="" v-show="code === 200">
  </div>

</template>

<script>
  export default {
    name: "ProfileMainUploadButton",
    props:{
      id:''
    },
    data() {
      return {
        code: 0
      }
    },
    methods: {
      upload() {
        this.$refs.upload.click();
      },

      uploadChange(data) {
        console.log(data);

        let file = data.target.files[0]
        if (!file) return

        let formData = new FormData()
        formData.append('upload', file)
        formData.append('id',this.id)

        this.$api.ProfileMainPersonalProfile.BatchExport(formData).then(res => {
          this.code = res.code
          this.code === 200 ? this.$message.success('附件上传成功') : this.$message.error('服务器未知错误')
          data.value = ''
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
  img {
    width: 50%;
    vertical-align: middle;
    cursor: pointer;
  }
</style>

<template>
  <div>
    <input type="file" ref="upload" style="display:none;" @change="uploadChange">
    <img src="~assets/img/Upload-File.png" alt="" @click="upload" v-show="code !== 200">
    <img src="~assets/img/successful.png" alt="" v-show="code === 200">
    <span>{{complete}}</span>
  </div>

</template>

<script>
  export default {
    name: "ProfileMainUploadButton",
    props: {
      mode: ''
    },
    data() {
      return {
        code: 0,
        complete:''
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
        formData.append('mode', this.mode)
        formData.append('t_id', this.$store.state.t_id)

        this.$api.ProfileMainPersonalProfile.BatchExport(formData, complete => {
          this.complete = complete
        }).then(res => {
          this.code = res.code
          this.code === 200 ? this.$message.success('附件上传成功') : this.$message.error('服务器未知错误')
          data.value = ''
          console.log(res);
        }).catch(err => {
          this.$message.error('上传了超过100M大小的文件或服务器未知错误')
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

  span {
    position: absolute;
    margin-left: 3px;
  }
</style>

<template>
  <div id="documentplan">
    <div style="height:126px"></div>
    <!-- 列表 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :fit="true"
      highlight-current-row
    >
      <el-table-column
        prop="id"
        label="ID"
        align="center"
        :resizable="false"
      >
      </el-table-column>
      <el-table-column
        align="center"
        :resizable="false"
        prop="term"
        label="学期"
      >
      </el-table-column>
      <el-table-column
        align="center"
        :resizable="false"
        prop="course_name"
        label="课程名称"
      >
      </el-table-column>
      <el-table-column
        :resizable="false"
        prop="specialty_id"
        label="开设专业"
      >
      </el-table-column>
      <el-table-column
        :resizable="false"
        prop="t_id"
        label="任课教师"
        width="100"
      >
      </el-table-column>
      <el-table-column
        :resizable="false"
        prop="class_hour"
        label="学时"
      >
      </el-table-column>
      <el-table-column
        :resizable="false"
        label="授课计划"
      >
        <template slot-scope="scope">
          {{scope.row.teaching_plan}}
        </template>
      </el-table-column>
      <el-table-column
        :resizable="false"
        prop="submit_state"
        label="提交状态"
      >
      </el-table-column>
      <el-table-column
        :resizable="false"
        prop="address"
        label="提交时间"
      >
      </el-table-column>

      <el-table-column
        :resizable="false"
        label="操作"
        width="180"
        fixed="right"
        align="center"
      >
        <template slot-scope="{row}">
          <!-- 预览 -->
          <el-button
            size="mini"
            icon="el-icon-view"
            @click="viewFile(row)"
          >
          </el-button>
          <!-- 上传 -->
          <el-button
            size="mini"
            icon="el-icon-upload2"
            @click="uploadFile(row)"
          >
          </el-button>
          <input
            type="file"
            ref="upload"
            style="display:none"
            @change="uploadChange"
          >
          <!-- 下载 -->
          <el-button
            size="mini"
            icon="el-icon-download"
            @click="downloadFile(row)"
          >
          </el-button>

          <!--! 测试下载 start -->
          <!-- {{row}} -->
          <!-- <div>
            <a :href="API_URL+'?id='+row.id">
              <i class="el-icon-download"></i>
            </a>
          </div> -->
          <!--! 测试下载 end -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
  data () {
    return {
      tableData: [],
      // $url
      API_URL: 'http://10.18.5.173:8080/courseSet/download',
      row_id: ''
    }
  },
  mounted () {
    this.getCourseSet()
  },
  methods: {
    //! 获取教学计划表数据
    getCourseSet () {
      this.$api.document.getCourseSet().then(res => {
        console.log(res)
        this.tableData = res
      }).catch(e => {
        console.log(e)
      })
    },

    //! xlsx实现读取excel文件进行预览   
    //! 另外阿里云 微软可以实现  需要域名 
    /**
     * $url
     * window.open(
     *  “https://view.officeapps.live.com/op/view.aspx?src=” + API_URL + “/zhengCe?id=” + row.id,
     *  “_blank”);
     */
    viewFile (row) {
      this.$api.document.downLoadFile(row.id).then(res => {
        console.log(1)
        const fileReader = new FileReader()
        let this_ = this
        fileReader.onload = ev => {
          console.log(1)
          try {
            const data = ev.target.result
            const workbook = XLSX.read(data, {
              type: 'binary'
            })
            const exlname = workbook.SheetNames[0] // 取第一张表
            let exl = XLSX.utils.sheet_to_html(workbook.Sheets[exlname])//生成json表格内容
            console.log('表格', exl)
            this.$router.push({
              path: '/document/DocumentView',
              query: { exlHtml: exl }
            })
          } catch (e) {
            console.log('出错了')
            return false
          }
        }
        fileReader.readAsBinaryString(res)
      }).catch(e => {
        console.log(e)
      })
    },

    //! 文件下载
    downloadFile (row) {
      var a = document.createElement('a')
      a.href = this.API_URL + '?id=' + row.id
      a.click()
      document.removeChild(a)
    },
    uploadFile (row) {
      this.$refs.upload.click()
      this.row_id = row.id
    },
    uploadChange (data) {
      console.log(data)
      console.log(this.row_id)
      let file = data.target.files[0]
      if (!file) return
      let formData = new FormData()
      formData.append('teaching_plan', file)
      formData.append('id', this.row_id)
      // formData.append('t_id', this.$store.state.t_id.toString())
      this.$api.document.UploadFile(formData).then(res => {
        file.value = ''
        this.row_id = ''
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
</style>

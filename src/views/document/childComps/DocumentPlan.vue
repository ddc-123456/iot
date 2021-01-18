<template>
  <el-row class="container">
    <el-row class="toolBox">
      <el-row type="flex" justify="end" align="middle">

        <el-col class="plan-version" :span="8">
          <span>班级：</span>
          <el-select v-model="version"
                     size="mini"
                     style="width: 90px">
            <el-option v-for="item of versionList"
                       :key="item.id"
                       :label="item.ver"
                       :value="item.ver"/>
          </el-select>
        </el-col>

        <el-col :span="5">
          <el-button class="search" @click="onSearchButtonClick">查询</el-button>
        </el-col>
      </el-row>
    </el-row>
    <div id="documentplan">
      <!-- 列表 -->
      <div class="table-container" ref="tab">
        <div ref="elTab">
          <el-table
            v-loading="loading"
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
              align="center"
              prop="specialty_id"
              label="开设专业"
            >
            </el-table-column>
            <el-table-column
              :resizable="false"
              align="center"
              prop="t_id"
              label="任课教师"
              width="100"
            >
            </el-table-column>
            <el-table-column
              align="center"
              :resizable="false"
              prop="class_hour"
              label="学时"
            >
            </el-table-column>
            <el-table-column
              align="center"
              :resizable="false"
              :show-overflow-tooltip="true"
              label="授课计划"
            >
              <template slot-scope="scope">
                {{scope.row.teaching_plan}}
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :resizable="false"
              prop="submit_state"
              label="提交状态"
            >
            </el-table-column>
            <el-table-column
              align="center"
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
      </div>
      <el-pagination
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next"
        :page-size="pagesize"
        :current-page="currentPage"
        :total="total"
        :page-count="pageCount"
        background
      ></el-pagination>
      <input
        type="file"
        ref="upload"
        style="display:none"
        v-if="isInputShow"
        @change="uploadChange"
      />
      <el-dialog
        title="预览"
        :visible.sync="dialogVisible"
        width="60%"
        top="5vh"
        :before-close="handleClose"
        @open="scrollListener"
        destroy-on-close>
        <div class="preview-container" ref="preview">
          <document-view :src="url"
                         :page="currentPagePDF"/>
        </div>
        <span slot="footer" class="dialog-footer">
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
  </el-row>
</template>
<script>
  import XLSX from 'xlsx'
  import DocumentView from "./DocumentView";
  import pdf from 'vue-pdf'

  export default {
    components: {DocumentView},
    data() {
      return {
        tableData: [],
        // $url
        API_URL: 'http://10.18.5.173:8080/courseSet/download',
        row_id: '',
        dialogVisible: false,
        url: '',
        complete: '',
        pageNum: 0,//pdf
        pagesize: 0,//分页
        currentPage: 1,
        total: 0,
        pageCount: 0,
        tags: [],
        isInputShow: true,
        loading: true,
        classSelect:0
      }
    },
    mounted() {
    },

    created() {
      this.getList({page: this.currentPage, query: this.tags})
    },
    methods: {
      //! 获取教学计划表数据
      getCourseSet() {
        this.$api.document.getCourseSet().then(res => {
          this.tableData = res;
        }).catch(e => {
          console.log(e)
        })
      },

      scrollListener() {
        this.$nextTick(() => {
          const box = this.$refs.preview
          box.addEventListener('scroll', () => {
            if (box.scrollTop + box.clientHeight === box.scrollHeight) {
              this.$notify.info({
                title: '提示',
                message: '已到达底部，预览功能最多预览5页',
                offset: 400
              });
            }
          })
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
      //预览
      async viewFile(row) {
        this.dialogVisible = true
        const {map} = await this.$api.document.getPreview(row.id).catch()
        this.url = this.$url + map.fileUrl
        this.pageNum = map.pages
      },

      handleClose(done) {
        done()
      },
      //! 文件下载
      downloadFile(row) {
        var a = document.createElement('a')
        a.href = this.API_URL + '?id=' + row.id;
        a.click();
        document.removeChild(a);
      },

      uploadFile(row) {
        this.$refs.upload.click();
        this.row_id = row.id;
      },

      uploadChange(data) {
        this.isInputShow = false
        let file = data.target.files[0]
        console.log(file);
        if (!file) return
        let formData = new FormData()
        formData.append('upload', file)
        formData.append('id', this.row_id)
        // formData.append('t_id', this.$store.state.t_id.toString())
        this.$api.document.UploadFile(formData, (complete) => {
          this.complete = complete
          console.log(this.complete);
        }).then(res => {
          this.isInputShow = true;
          if (res.meta.status === 200) {
            this.$notify({
              title: '提醒',
              message: res.meta.msg,
              type: 'success'
            })
          } else {
            this.isInputShow = true;
            this.$notify({
              title: '提醒',
              message: res.meta.msg,
              type: 'error'
            })
            file.value = ''
            this.row_id = ''
            console.log(res);
          }
        }).catch(err => {
          this.$message.error('上传了超过100M大小的文件或服务器未知错误')
          console.log(err);
        })
      },

      handleCurrentChange(currentPage) {
        const query = Object.assign([], this.tags)
        this.currentPage = currentPage;
        this.getList({page: currentPage, query})
      },

      getList(data) {
        this.$api.document.fetchList(data).then(res => {

          this.tableData = res.message;
          this.total = res.listQuery.total;
          this.currentPage = res.listQuery.pageNum;
          this.pagesize = res.listQuery.pageSize;
          this.pageCount = res.listQuery.pages;

          this.loading = false;
        })
      },

      async onSearchButtonClick() {
        this.tableData = await this.$api.document.fetchSearch(classSelect);
        console.log(this.tableData);
      }
    },
    computed: {
      currentPagePDF: function () {
        if (this.pageNum > 10) {
          return 10
        } else return this.pageNum;
      }
    },
    watch: {
      tableData: function () {
        this.$nextTick(() => {
          const size = this.$refs.tab;
          const preSize = this.$refs.elTab;
          size.style.height = preSize.clientHeight + 'px';
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  .container {
    margin-top: 100px;

    .toolBox {
      background-color: #E6CDA4;
      padding: 10px 0;
      border-radius: 10px 10px 0 0;

      .plan-version {
      }

      .apartment {
      }

      .search {
      }

      .reset {
      }

    }
  }

  .table-container {
    transition: all 0.5s ease;
    width: 100%;
    overflow-y: hidden;
  }

  .preview-container {
    height: 70vh;
    overflow: auto;
  }
</style>

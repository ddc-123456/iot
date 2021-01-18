<template xmlns:el-col="http://www.w3.org/1999/html">
  <el-row class="container">
    <el-row class="toolBox">
      <el-row type="flex" justify="end" align="middle">

        <el-col class="plan-version" :span="8">
          <span>培养方案版本号：</span>
          <el-select v-model="version"
                     size="mini"
                     style="width: 90px">
            <el-option v-for="item of versionList"
                       :key="item.version_id"
                       :label="item.version"
                       :value="item.version_id"/>
          </el-select>
        </el-col>

        <el-col class="apartment" :span="8">
          <span>上课院系：</span>
          <el-select v-model="department"
                     size="mini">
            <el-option v-for="item of departmentList"
                       :key="item.dep_id"
                       :label="item.t_department"
                       :value="item.dep_id"/>
          </el-select>
        </el-col>

        <el-col :span="5">
          <el-button class="search" @click="onSearchButtonClick">查询</el-button>
          <el-button class="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-row>
    <el-main class="table-main">
      <el-row class="table-box">
        <el-col :span="20">

          <el-row class="table-tool">
            <el-button class="add-course" size="mini" @click="dialogVisible = true">增加课程</el-button>
            <el-button class="import-course" size="mini">导入体系课程</el-button>
            <el-button class="point-setting" size="mini">课程体系学分设置</el-button>
            <el-button class="class-progress" size="mini">教学进程安排查询</el-button>
            <el-button class="toReview" size="mini">送审</el-button>
            <el-button class="print" size="mini">打印</el-button>
          </el-row>

          <el-row class="table">
            <el-col>
              <el-table :data="tableData"
                        border
                        style="width: 100%;">

                <el-table-column prop="cou_system"
                                 label="课程体系"/>

                <el-table-column prop="cou_quality"
                                 label="课程性质"/>

                <el-table-column prop="cou_property"
                                 label="课程属性"/>

                <el-table-column prop="cou_category"
                                 label="课程类别"/>

                <el-table-column prop="cou_number"
                                 label="课程编号"/>

                <el-table-column prop="cou_name"
                                 width="100%"
                                 label="课程名称"/>

                <el-table-column prop="sum_period"
                                 width="70"
                                 label="总学时"/>

                <el-table-column prop="credit"
                                 width="50"
                                 label="学分"/>

                <el-table-column prop="cou_unit"
                                 label="开课单位"/>

              </el-table>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-dialog
        class="dialog"
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-row>
          <el-col :span="12">
            <el-row>
              <el-col :span="8"><span>课程体系:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.cou_system"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>课程性质:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.cou_quality"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>课程属性:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.cou_property"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>课程类别:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.cou_category"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>课程编号:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.cou_number"/>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="8"><span>课程名称:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.cou_name"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>总学时:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.sum_period"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>学分:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.credit"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>开课单位:</span></el-col>
              <el-col :span="14">
                <el-input size="mini" v-model="add.cou_unit"/>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>培养方案版本号:</span></el-col>
              <el-col :span="14">
                <el-select size="mini" v-model="add.version">
                  <el-option v-for="item of versionList"
                             :key="item.version_id"
                             :label="item.version"
                             :value="item.version_id"/>
                </el-select>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><span>上课院系:</span></el-col>
              <el-col :span="14">
                <el-select size="mini" v-model="add.t_department">
                  <el-option v-for="item of departmentList"
                             :key="item.dep_id"
                             :label="item.t_department"
                             :value="item.dep_id"/>
                </el-select>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="onCheckButtonClick">确 定</el-button>
          </span>
      </el-dialog>

    </el-main>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        version: '',
        versionList: [],
        department: '',
        departmentList: [],
        tableData: [],
        dialogVisible: false,
        add: {
          cou_system: '',
          cou_quality: '',
          cou_property: '',
          cou_category: '',
          cou_number: '',
          cou_name: '',
          sum_period: '',
          credit: '',
          cou_unit: '',
          version: '',
          t_department: ''
        }
      }
    },
    mounted() {
      this.getTalentDocument();
      this.getTableData({});
    },
    methods: {
      async getTableData() {
        this.tableData = await this.$api.document.fetchSearch(...arguments);
      },

      async getTalentDocument() {
        const {t_version, t_department} = await this.$api.document.fetchTalentDocument();
        this.versionList = t_version;
        this.departmentList = t_department;
      },

      onSearchButtonClick() {
        this.getTableData({version: this.version, t_department: this.department});
      },

      onCheckButtonClick() {
        try {
          this.$api.document.postAddClass({...this.add});
          this.add = {
            cou_system: '',
            cou_quality: '',
            cou_property: '',
            cou_category: '',
            cou_number: '',
            cou_name: '',
            sum_period: '',
            credit: '',
            cou_unit: '',
            version: '',
            t_department: ''
          }
        } catch (e) {

        }
        this.dialogVisible = false;
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      }
    }
  }
</script>
<style scoped lang="scss">
  .container {
    background-color: white;
    margin-top: 100px;
    border-radius: 10px;
    min-width: 878px;

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

    .table-main {
      .table-box {
        display: flex;
        justify-content: center;

        .table-tool {
          padding-bottom: 10px;
        }

        .table {
        }
      }
    }

    .dialog {
      .el-row {
        padding: 10px;
      }
    }
  }
</style>

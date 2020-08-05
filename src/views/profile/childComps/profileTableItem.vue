<template>
  <div id="content">
    <el-row style="margin-bottom: 8px" id="buttonGroup">
      <el-col :offset="21">
        <el-button
          size="mini"
          type="primary"
          v-show="isShow"
          @click="handInsert">添加
        </el-button>
        <el-button
          size="mini"
          type="danger"
          v-show="isShow"
          @click="handDeleteChoose">删除
        </el-button>
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      :row-style="{height:'65px'}"
      border
      style="width: 100%"
      highlight-current-row
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="42"/>
      <el-table-column
        type="index"
        width="50"
        label="序号">
        <template slot-scope="scope">
          <p style="text-align: center">{{scope.$index+1}}</p>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item,index) in titleList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        show-overflow-tooltip>

        <template slot-scope="scope">
          <span v-show="!scope.row.show">{{scope.row[item.prop]}}</span>
          <el-input v-model="scope.row[item.prop]" class="input" v-show="scope.row.show"></el-input>
        </template>

      </el-table-column>
      <el-table-column
        label="操作"
        width="80">
        <template slot-scope="scope">
          <el-button
            v-show="!scope.row.show"
            type="primary" plain
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            v-show="scope.row.show"
            type="primary"
            size="mini"
            @click="handleComplete(scope.$index, scope.row)">完成
          </el-button>
          <!--          <el-button-->
          <!--            size="mini"-->
          <!--            type="danger"-->
          <!--            @click="handleDelete(scope.$index, scope.row)">删除-->
          <!--          </el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "profileTableItem",
    data() {
      return {
        // table: this.$route.query.table,
        tableData: [],
        titleItem: {},
        titleList: [],
        multipleSelection: [],
        newCol: {},
        isShow: true
      }
    },

    props: {
      table: ''
    },
    created() {
      this.getTeacherProfileList()
      this.buttonShow(this.$route.query.table)
    },
    methods: {

      /*拿到要展示的数据，并初步处理*/
      getTeacherProfileList() {
        this.$api.profile.getTeacherProfileList(this.$store.state.t_id).then(res => {
          console.log(res);

          let data = res[this.table]
          console.log(this.table);
          this.newCol = res.tableTitle[this.table]
          this.newCol.show = true

          data.forEach(e => {
            e.show = false
          })
          this.tableData = data

          /*从表头格式里取数据格式*/
          for (let key in this.newCol) {
            switch (key) {
              case 'id':
              case 't_id':
              case 'table':
              case 'show':
              case 'validitycontract':
              case 'settlement':
              case 'construction_period':
              case 'funding':
              case 'project_state':
              case 'attend_state':
              case 'attachment':
              case 'coreCategories':
              case 'publicationNo':
                continue
            }
            let titleItem = new Object()

            titleItem.prop = key
            titleItem.label = this.getTitleName(key)
            this.titleList.push(titleItem)
            // console.log(this.titleList);
          }

        }).catch(err => {
          console.log(err);
        })
      },

      /*得到需要展示的表头*/
      getTitleName(title) {
        switch (title) {

          /*工作经历*/
          case 'start_time':
            return '开始时间'
          case 'end_time':
            return '结束时间'
          case 'unit':
            return '单位'
          case 'position':
            return '职位'
          case 'remarks':
            return '备注'

          /*学习经历*/
          case 't_personalprofile':
            return '简介'

          case 'school':
            return '学校'
          case 'eduction':
            return '学历'
          case 'degree':
            return '学位'
          case 'specialty':
            return '专业'

          /*横向课题*/
          case 'topic':
            return '横向课题名称'
          case 'money':
            return '金额'
          case 'client':
            return '立项单位'
          case 'topic_time':
            return '立项时间'

          /*科研课题*/
          case 'project_name':
            return '科研课题名称'
          case 'project_unit':
            return '立项单位'

          /*教学课题*/
          case 'topics_name':
            return '教学课题'
          case 'topics_unit':
            return '教学课题'

          /*职业资格证书*/
          case  'certificate':
            return '职业资格证书'

          /*论文*/
          case 'author':
            return '作者'
          case 'title':
            return '论文题目'
          case 'journalName':
            return '期刊名称'
          case 'yearOfPublication':
            return '出版年份'
          case 'volumeNum':
            return '卷号（期号）'
          case 'pageNum':
            return '起止页码'
          case 'ifcore':
            return '是否核心'

          /*专利*/
          case 'country':
            return '国家'
          case 'inventor':
            return '专利发明人'
          case 'category':
            return '专利类别'
          case 'patent_name':
            return '专利名称'
          case 'patent_status':
            return '专利状态'
          case 'request_Num':
            return '申请号'
          case 'empower_date':
            return '授权日期'
          case 'empower_Num':
            return '授权号'

          /*软件著作权*/
          case 'software_name':
            return '软件著作名称'
          case 'register_num':
            return '登记号'
          case 'software_date':
            return '获著作权日期'

          /*带学生比赛*/
          case 'award_name':
            return '获奖作品名称'
          case 'award_grade':
            return '奖励等级'
          case 'issue_time':
            return '颁发时间'
          case 'issuance_Unit':
            return '颁奖单位'
          case 'award_results':
            return '比赛成果'

          /*个人荣誉*/
          case 'honour_name':
            return '奖励名称（荣誉称号）'
          case 'honour_grade':
            return '奖励等级'
          case 'results':
            return '奖励成果'

          /*工作记录*/
            case 'work_name':
              return '名称'
            case 'work_date':
              return '名称'
            case '时间':
              return '名称'
            case 'reference_person':
              return '证明人'
            case 'exposition':
              return '阐述'

        }
      },

      buttonShow(table) {
        switch (table) {
          case 'teacher':
            this.isShow = false
            return

        }
      },

      /*行被选中时*/
      handleSelectionChange(val) {
        this.multipleSelection = val
        console.log(this.multipleSelection);
      },

      /*编辑按钮*/
      handleEdit(index, row) {
        row.show = true
        // console.log(index, row);
      },

      /*完成按钮点击事件*/
      handleComplete(index, row) {
        console.log(row);
        this.$api.profile.insertProfile(row).then(res => {
          if (res.code === 200) {
            this.$message.success('修改成功!')
          } else this.$message.error('添加数据失败，请检查网络')
        }).catch(err => {
          this.$message.error('服务器未知错误，请检查网络')
          console.log(err);
        })
        row.show = false

      },

      /*单行删除按钮，需求原因，目前废弃不用*/
      handleDelete(index, row) {
        this.tableData.splice(index, 1)
        console.log(index, row);
      },

      /*批量删除按钮*/
      handDeleteChoose() {

        if (this.multipleSelection.length === 0) {
          this.$message.error('请先至少选择一项')
          return
        }

        this.$api.profile.deleteChoose(this.multipleSelection).then(res => {

          if (res.code === 200) {
            /*给tableData的每一项增加一个ID，与multipleSelection里面的ID匹配*/
            for (let i = 0; i < this.tableData.length; i++) {
              const element = this.tableData[i];
              element.num = i
            }

            this.multipleSelection.forEach(element => {
              this.tableData.forEach((e, i) => {
                if (element.num === e.num) {
                  this.tableData.splice(i, 1)
                  this.$message.success('删除成功')
                }
              });
            });
          } else this.$message.error('数据删除失败，请检查网络！')
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      },

      /*添加一行空数据*/
      handInsert() {
        let list = new Object()
        for (let item in this.newCol) {
          list[item] = this.newCol[item]
        }
        list.id = new Date().getTime()
        this.tableData.push(list)
        // console.log(this.tableData);

        // this.$api.profile.insertProfile(row).then(res=>{
        //   console.log(res);
        // }).catch(err=>{
        //   console.log(err);
        // })
      },
    }
  }
</script>

<style scoped>
  body {
    min-width: 1150px;
  }

  #content {
    /*background-color: red;*/
    padding: 30px;
    /*width: 1150px;*/
  }

  #buttonGroup .el-button {
    margin-left: 10px;
  }

  .el-button + .el-button {
    margin-left: 0;
  }
</style>

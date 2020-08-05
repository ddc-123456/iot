<!--
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
          &lt;!&ndash;          <el-button&ndash;&gt;
          &lt;!&ndash;            size="mini"&ndash;&gt;
          &lt;!&ndash;            type="danger"&ndash;&gt;
          &lt;!&ndash;            @click="handleDelete(scope.$index, scope.row)">删除&ndash;&gt;
          &lt;!&ndash;          </el-button>&ndash;&gt;
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "ProfileChangeHomePage",
    data() {
      return {
        table: this.$route.query.table,
        tableData: [],
        titleItem: {},
        titleList: [],
        multipleSelection: [],
        newCol: {},
        isShow:true
      }
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
        }
      },

      buttonShow(table){
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
-->


<template>
  <div>
    <profile-table-item v-for="item of table" :table="item"/>
  </div>
</template>

<script>
  import ProfileTableItem from "./profileTableItem";

  export default {
    name: "ProfileChangeHomePage",
    components: {ProfileTableItem},
    data() {
      return {
        table: this.$route.query.table,
      }
    },

    created() {
      /*若要使用组件tableitem就必须传入数组，但若数组里只有一个数，$route.query就会把它当作字符串处理*/
      if (Array.isArray(this.$route.query.table)) {
        this.table = this.$route.query.table
      } else {
        let list = new Array()
        list.push(this.$route.query.table)
        this.table = list
        console.log(list);
      }
    }
  }
</script>

<style scoped>

</style>

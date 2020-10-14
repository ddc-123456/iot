<template>
  <div id="container">
    <el-row id="personal-profile-content">
      <el-col :offset="1">

        <el-row>

          <el-col :span="3">
            <span>姓名：</span>
          </el-col>
          <el-col :span="3">
            <el-input v-model="t_name"/>
          </el-col>

          <el-col :span="3">
            <span>性别：</span>
          </el-col>
          <el-col :span="1">
            <p>{{t_sex}}</p>
          </el-col>

          <el-col :span="3">
            <span>工号：</span>
          </el-col>
          <el-col :span="3">
            <p>{{t_id}}</p>
          </el-col>


        </el-row>

        <el-row>

          <el-col :span="3">
            <span>出生日期：</span>
          </el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="t_birthday"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
              style="width: 100%"/>
          </el-col>

          <el-col :span="3">
            <span>邮箱：</span>
          </el-col>
          <el-col :span="6">
            <el-input v-model="t_email"/>
          </el-col>

        </el-row>

        <el-row>

          <el-col :span="3">
            <span>手机号：</span>
          </el-col>
          <el-col :span="6">
            <el-input v-model="t_phone"/>
          </el-col>
          <el-col :span="3">
            <span>学历：</span>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="t_education"
              style="width: 100%">
              <el-option v-for="(item,index) of educationList"
                         :key="index"
                         :label="item.t_education"
                         :value="item.t_education"></el-option>
            </el-select>
          </el-col>
          <el-col :span="1">
            <profile-main-upload-button :mode="0"/>
          </el-col>

        </el-row>

        <el-row>

          <el-col :span="3">
            <span>职务：</span>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="t_post"
              style="width: 100%">
              <el-option v-for="(item,index) of postListL"
                         :key="index"
                         :label="item.t_post"
                         :value="item.t_post"></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <span>学位：</span>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="t_degree"
              style="width: 100%">
              <el-option v-for="(item,index) of degreeList"
                         :key="index"
                         :label="item.t_degree"
                         :value="item.t_degree"></el-option>
            </el-select>
          </el-col>
          <el-col :span="1">
            <profile-main-upload-button :mode="1"/>
          </el-col>

        </el-row>

        <el-row>

          <el-col :span="3">
            <span>岗位：</span>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="t_stationt_"
              style="width: 100%">
              <el-option v-for="(item,index) of stationList"
                         :key="index"
                         :label="item.t_stationt_"
                         :value="item.t_stationt_"></el-option>
            </el-select>
          </el-col>

          <el-col :span="3">
            <span>职称：</span>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="t_title"
              style="width: 100%">
              <el-option v-for="(item,index) of positional_title_List"
                         :key="index"
                         :label="item.t_title"
                         :value="item.t_title"></el-option>
            </el-select>
          </el-col>
          <el-col :span="1">
            <profile-main-upload-button :mode="2"/>
          </el-col>

        </el-row>

        <el-row>

          <el-col :span="3">
            <span>二级学院：</span>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="t_department"
              @change="specialtySelect"
              :loading="departmentLoading"
              style="width: 100%">
              <el-option v-for="(item,index) of departmentList"
                         :key="index"
                         :label="item.t_department"
                         :value="item.t_department"></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <span>所在专业：</span>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="t_specialtyName"
              style="width: 100%">
              <el-option v-for="(item,index) of specialtyList"
                         :key="index"
                         :label="item.specialtyName"
                         :value="item.specialtyName"></el-option>
            </el-select>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="8">
            <el-button @click="postProfile" type="primary">确认修改</el-button>
          </el-col>

          <el-col :span="7">
            <el-button @click="cancel" type="primary">取消</el-button>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
  </div>

</template>

<script>

  import ProfileMainUploadButton from "./ProfileMainUploadButton";

  export default {
    name: "ProfileMainPersonalProfile",
    components: {ProfileMainUploadButton},
    data() {
      return {
        t_name: '',
        t_sex: '',
        t_id: '',
        t_phone: '',
        t_email: '',
        t_birthday: '',
        t_education: {},
        t_post: {},
        t_degree: {},
        t_stationt_: {},
        t_title: {},
        t_department: {},
        t_specialtyName: {},
        educationList: {},
        postListL: {},
        degreeList: {},
        stationList: {},
        positional_title_List: {},
        departmentList: {},
        specialtyList: {},
        departmentLoading: false,
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        }
      }
    },
    created() {
      this.getTeacherProfile()
    },
    methods: {
      getTeacherProfile() {
        this.$api.profile.getTeacherProfile(this.$store.state.t_id).then(res => {
          console.log(res);
          this.t_name = res.teacher.t_name
          this.t_sex = res.teacher.t_sex
          this.t_id = res.teacher.t_id
          this.t_birthday = res.teacher.t_birthday
          this.t_email = res.teacher.t_email
          this.t_phone = res.teacher.t_phone
          this.t_education = res.teacher.t_education
          this.t_post = res.teacher.t_post
          this.t_degree = res.teacher.t_degree
          this.t_stationt_ = res.teacher.t_stationt_
          this.t_title = res.teacher.t_title
          this.t_department = res.teacher.t_department
          this.t_specialtyName = res.teacher.specialtyName
          this.educationList = res.educations
          this.postListL = res.posts
          this.degreeList = res.degrees
          this.stationList = res.stations
          this.positional_title_List = res.positionaltitles
          this.departmentList = res.departSpecia
          this.getSpecialtyList()
        }).catch(err => {
          this.$message.error('网络状态异常，请检查网络设备')
          console.log(err);
        })
      },

      cancel() {
        this.$api.profile.getTeacherProfile(this.$store.state.t_id).then(res => {
          this.t_name = res.teacher.t_name
          this.t_sex = res.teacher.t_sex
          this.t_id = res.teacher.t_id
          this.t_birthday = res.teacher.t_birthday
          this.t_email = res.teacher.t_email
          this.t_phone = res.teacher.t_phone
          this.t_education = res.teacher.t_education
          this.t_post = res.teacher.t_post
          this.t_degree = res.teacher.t_degree
          this.t_stationt_ = res.teacher.t_stationt_
          this.t_title = res.teacher.t_title
          this.t_department = res.teacher.t_department
          this.t_specialtyName = res.teacher.specialtyName

          this.$message.success('已返回上一次修改的值')
        }).catch(err => {
          this.$message.error('网络状态异常，请检查网络设备')
          console.log(err);
        })
      },

      specialtySelect(value) {
        this.departmentLoading = true

        if (value === '') {
          this.departmentLoading = false
          return this.$message.error('服务器未知错误')
        }

        for (let item of this.departmentList) {
          if (item.t_department === value) {
            this.specialtyList = item.specialtyName
            this.t_specialtyName = item.specialtyName[0].specialtyName
            this.departmentLoading = false
            break
          }
        }
      },

      getSpecialtyList() {
        for (let item of this.departmentList) {
          if (item.t_department === this.t_department) {
            this.specialtyList = item.specialtyName
            break
          }
        }
      },

      postProfile() {
        this.$api.profile.postProfile(
          this.t_name,
          this.t_sex,
          this.t_id,
          this.t_birthday,
          this.t_email,
          this.t_phone,
          this.t_education,
          this.t_post,
          this.t_degree,
          this.t_stationt_,
          this.t_title,
          this.t_department,
          this.t_specialtyName).then(res => {
          if (res.code === 200) {
            window.localStorage.setItem('t_name',this.t_name)
            this.$store.commit('setName',this.t_name)
            this.$message.success('资料已提交')
          }else this.$message.warning('资料提交失败，请检查网络')
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
  #container {
    background-color: #fff;
    /*padding-bottom: 50px;*/
    margin-top: 30px;
    overflow-x: hidden;
  }

  #container span {
    color: black;
    font-weight: bold;
  }

  #personal-profile-content {
    padding-top: 50px;

  }

  #personal-profile-content .el-col {
    text-align: right;
    margin-bottom: 50px;
    line-height: 40px;
  }

  #personal-profile-content img {
    width: 50%;
    vertical-align: middle;
    cursor: pointer;
  }

</style>
<style>
  #personal-profile-content .d {

  }
</style>

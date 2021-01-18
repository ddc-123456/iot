/*
  这里是所有数据请求的唯一入口
*/

// 使用示例：this.$api.login.login()
import login from "./login";
import index from "./index";
import teacher from "./teacher";
import teacherProfile from "./teacherProfile";
import app from "./app";
import profile from "./profile";
import document from './document';
import feature from './feature';

export default {
  login,
  index,
  teacher,
  teacherProfile,
  app,
  profile,
  document,
  feature
}

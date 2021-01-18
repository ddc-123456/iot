<template>
  <div id="feature">
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="19" class="feature-main">
          <el-row class="tab-bar slideDown">
            <el-col :span="6" :offset="1">
              <ul>
                <li class="tab-item" @click="onTabBarClick(0)"><span
                  :class="this.activeTab  === 0 ? 'active':''">专业简介</span></li>
                <li class="tab-item" @click="onTabBarClick(1)"><span
                  :class="this.activeTab  === 1 ? 'active':''">研究领域</span></li>
                <li class="tab-item" @click="onTabBarClick(2)"><span
                  :class="this.activeTab  === 2 ? 'active':''">优秀专利</span></li>
              </ul>
            </el-col>
          </el-row>
          <el-row class="introduce slideDown content">

            <el-row class="title"><p>专业特色介绍</p></el-row>

            <!-- 专业介绍和配图 -->
            <el-row>
              <el-col class="introduce-main" :span="12">
                <div class="text-box">
                  <span>学校科学研究坚持“三个面向”一面向国际学术前沿、 面向国家重大战略需求、面向国家和区域经济社会需求,
全面深度实施“三个对接”一主动对接广 州和粤港澳大湾区建设、对接广州和粤港澳大湾区创新、对接广州和粤港澳
大湾区开放;不断强化科研项目管理，优化和搭建研究平台，培育和组建学术团队，增强产学研合作能力，加强内涵建
设和特色发展，全力助推学校高水平大学建设,为促进粤港澳大湾区经济社会的建调与发展贡献力...
</span>
                </div>
                <el-button class="more" round size="small">
                  <span>查看详情<span class="iconfont icon-miniconsarrowdownround"/></span>
                </el-button>
              </el-col>
              <el-col :span="12">
                <div class="img-box">
                  <img :src='$url+specialty.picture' alt=""/>
                </div>
              </el-col>
            </el-row>

            <!--专业一些荣誉的数据-->
            <el-row class="honer-bar">
              <div class="honer-item">
                <p>2016年获得教育部人文社科项目</p>
                <div class="nums-box">
                  <span class="nums">2</span>
                  <span class="unit">个</span>
                </div>
              </div>
              <div class="honer-item">
                <p>2017年获得市级比赛奖项</p>
                <div class="nums-box">
                  <span class="nums">9</span>
                  <span class="unit">个</span>
                </div>
              </div>
              <div class="honer-item">
                <p>2018年获得省级比赛奖项</p>
                <div class="nums-box">
                  <span class="nums">3</span>
                  <span class="unit">个</span>
                </div>
              </div>
            </el-row>
          </el-row>
          <el-row class="field slideDown content">

            <el-row class="title"><p>重点研究领域</p></el-row>
            <div class="field-box">
              <div class="field-item" v-for="(item,index) of domains">
                <div class="img-box" :class="`clip-path-${index === 0 || index === 1 ? '1' : '2'}`">
                  <img :src="$url+item.picture" alt="">
                </div>
                <div class="text-box">
                  <p class="col-1">{{item.title}}</p>
                  <!--                  <p class="col-2">批准单位:科技部</p>-->
                </div>
              </div>
              <el-button class="more" round size="small">
                <span>查看详情<span class="iconfont icon-miniconsarrowdownround"/></span>
              </el-button>
            </div>

          </el-row>
          <el-row class="patents slideDown content">

            <el-row class="title"><p>优秀专利</p></el-row>

            <div class="patent-box">
              <div class="parent-item" v-for="item of patents">
                <div class="img-box">
                  <img :src="$url+item.picture" alt="">
                </div>
                <div class="parent-name">
                  <p>{{item.title}}</p>
                </div>
              </div>
            </div>

            <el-button class="more" round size="small">
              <span>查看全部专利<span class="iconfont icon-miniconsarrowdownround"/></span>
            </el-button>

          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
  import {animeInit} from "@/common/anime";
  import {scrollToTarget} from "@/common/utils";

  export default {
    name: "Feature",
    data() {
      return {
        activeTab: 0,
        domains: [],
        patents: [],
        specialty: {}
      }
    },
    mounted() {
      animeInit();
      this.dataInit();
    },
    methods: {
      onTabBarClick(index) {
        this.activeTab = index;
        scrollToTarget(index);
      },
      async dataInit() {
        const {domains, patents, specialty} = await this.$api.feature.fetchFeatureList();

        this.domains = domains.slice(0, 4);
        this.patents = patents.slice(0, 4);
        this.specialty = specialty;
      }
    },
    watch: {
      activeTab: () => {

      }
    }
  }
</script>

<style scoped lang="scss">

  .clip-path-1 {
    clip-path: polygon(100% 0, 70% 100%, 0 100%, 0 0);
  }

  .clip-path-2 {
    clip-path: polygon(0 100%, 0 0, 70% 0, 100% 100%);
  }


  @mixin title {
    text-align: center;
    font-size: 1.7em;
    letter-spacing: 4px;
    line-height: 80px;
  }

  @mixin more {
    margin-left: 70px;
    border-color: var(--line-color);

    &:hover {
      .icon-miniconsarrowdownround {
        animation: arrowJump ease-in-out .3s;
      }
    }

    @keyframes arrowJump {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    span {
      color: var(--line-color);
      letter-spacing: 1px;
      padding: 0 40px;
      position: relative;
      line-height: 17px;
    }

    .icon-miniconsarrowdownround {
      position: absolute;
      left: 80px;
    }

  }

  .feature-main {
    background-color: white;
    color: var(--line-color);

    .tab-bar {
      line-height: 80px;

      .tab-item {
        float: left;
        margin-left: 20px;

        span {
          font-size: 1.1em;
          font-weight: 400;
          padding-bottom: 5px;
          letter-spacing: 2px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .active {
        border-bottom: 4px solid var(--line-color);
      }
    }

    .introduce {

      .title {
        @include title;
      }


      .introduce-main {
        .text-box {
          padding: 20px 70px;
          line-height: 37px;
          letter-spacing: 2px;
          text-indent: 2em;
        }

        .more {
          @include more;
        }

      }

      .img-box {
        width: 60%;
        padding-top: 20px;
        margin: 0 auto;

        img {
          width: 100%;
        }
      }

      .honer-bar {
        padding: 20px 70px;

        .honer-item {
          height: 195px;
          width: 300px;
          padding: 20px 70px;
          float: left;
          text-align: center;
          position: relative;

          &:nth-child(1) {
            border-left: 1px solid var(--line-color);
          }

          &:nth-child(2) {
            border-left: 1px solid var(--line-color);
            border-right: 1px solid var(--line-color);
          }

          &:nth-child(3) {
            border-right: 1px solid var(--line-color);
          }

          p {
            line-height: 30px;
          }

          .nums-box {
            position: absolute;
            width: 100%;
            bottom: 28px;
            left: 0;

            .nums {
              font-weight: bold;
              font-size: 2.5em;
            }

            .unit {

            }
          }

        }
      }

    }

    .field {
      background-color: #D9DBE1;

      .title {
        @include title;
      }

      .field-box {
        float: left;
        padding: 10px 80px 40px 80px;

        .field-item {
          width: 49%;
          height: 200px;
          background-color: white;
          float: left;
          overflow-y: hidden;

          &:nth-child(1),
          &:nth-child(2) {
            margin-bottom: 2%;
          }

          &:nth-child(2n - 1) {
            margin-right: 2%;
          }

          .img-box {
            float: left;
            width: 50%;
            height: 100%;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .text-box {
            float: left;
            width: 50%;
            padding-top: 10%;


            .col-1 {
              text-align: center;
              font-size: 1.2em;


            }

            .col-2 {
              margin-top: 5px;
              text-align: center;
              font-size: 1em;

            }
          }

        }
      }

      .more {
        @include more;
        margin-top: 40px;
        margin-left: calc(50% - 130px);
        width: 260px;
      }

    }

    .patents {
      .title {
        @include title;
      }

      .patent-box {
        width: 100%;
        padding: 40px;
        overflow: hidden;

        .parent-item {
          width: 25%;
          padding: 0 30px;
          float: left;

          .img-box {
            width: 100%;
            height: 200px;
            box-shadow: 0 0 4px black;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .parent-name {
            margin-top: 15px;

            p {
              text-align: center;
            }
          }
        }
      }

      .more {
        @include more;
        width: 190px;
        margin-left: calc(50% - 95px);
        margin-bottom: 40px;
      }
    }

  }
</style>

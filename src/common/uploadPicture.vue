<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">

          <el-row>
            <el-col :span="5">
              <span>预览：</span>
              <div class="before"></div>
            </el-col>
            <el-col :span="4">
              <input type="file" accept="image/png,image/jpeg" ref="upload" style="display:none;" @change="uploadChange">
              <el-row>
                <el-button @click="upLoadPicture">选择图片</el-button>
              </el-row>
              <!--              <el-row>-->
              <!--                <el-button @click="sureSava">裁剪</el-button>-->
              <!--              </el-row>-->
            </el-col>
          </el-row>

          <div class="container">
            <div class="img-container">
              <img src="../assets/img/ImagePlaceholder.png" ref="image" alt="">
            </div>
          </div>

        </el-col>
        <!--        <el-col :span="7">-->
        <!--          <span>裁剪后：</span>-->
        <!--          <div class="afterCropper">-->
        <!--            <img :src="afterImg" alt="">-->
        <!--          </div>-->
        <!--        </el-col>-->
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import Cropper from 'cropperjs'
  import 'cropperjs/dist/cropper.css'

  export default {
    name: "uploadPicture",
    data() {
      return {
        myCropper: null,
        Img: '',
        afterImg: ''
      }
    },
    mounted() {
      // this.afterImg = require("../assets/img/ImagePlaceholder.png")
    },
    methods: {
      init() {
        this.myCropper = new Cropper(this.$refs.image, {
          viewMode: 1, //定义cropper的视图模式
          dragMode: 'none',//定义cropper的拖拽模式。
          initialAspectRatio: 1,
          aspectRatio: 1, //裁剪框的宽高比
          preview: '.before', //添加额外的元素(容器)以供预览
          background: true,//显示容器的网格背景。（就是后面的马赛克）
          autoCropArea: 0.6,//定义自动裁剪面积大小(百分比)和图片进行对比
          zoomOnWheel: false,//是否可以通过移动鼠标来放大图像。
          responsive: true,//在调整窗口大小的时候重新渲染cropper
          restore: true,//在调整窗口大小后恢复裁剪的区域。
          modal: true,//显示图片上方的黑色模态并在裁剪框下面。
          guides: true,//显示在裁剪框上方的虚线。
          center: true,//裁剪框在图片正中心。
          highlight: false,//在裁剪框上方显示白色的区域(突出裁剪框)。
          autoCrop: true,//当初始化时，可以自动生成图像。（就是自动显示裁剪框，改成false裁剪框自动消失）
          movable: true,//是否允许可以移动后面的图片
          rotatable: true,//是否允许旋转图像。
          scalable: true,//是否允许缩放图像。
          zoomable: true,//是否允许放大图像
          zoomOnTouch: true,//是否可以通过拖动触摸来放大图像。
          wheelZoomRatio: 0.1,//用鼠标移动图像时，定义缩放比例。
          minContainerWidth: 200,//容器的最小宽度。
          minContainerHeight: 100,//容器的最小高度。
          minCanvasWidth: 0,//canvas的最小宽度。
          minCanvasHeight: 0,//canvas的最小高度。
          minCropBoxWidth: 0,//裁剪层的最小宽度。
          minCropBoxHeight: 0,//裁剪层的最小高度。
          ready:this.sureSava,
          cropend: this.sureSava
        })
      },

      sureSava() {

        if (!this.Img) {
          this.$message.warning('请先上传图片')
          return
        }
        this.afterImg = this.myCropper.getCroppedCanvas({
          imageSmoothingQuality: 'high'
        }).toDataURL('image/png')
      },

      getImg() {
        return this.afterImg
      },

      upLoadPicture() {
        this.$refs.upload.click()
      },

      uploadChange(data) {
        if (this.myCropper) this.myCropper.destroy()

        const rule = /(.*)\.(jpg|jpeg|png)$/i

        let file = data.target.files[0]
        if (!file) return

        if (!rule.test(file.name)) {
          this.$message.error('错误的文件格式，文件格式只接受jpg、png')
          return;
        }
        let fileReader = new FileReader()

        fileReader.readAsDataURL(file)
        fileReader.onload = result => {
          let src = result.target.result

          this.init()
          this.Img = src
          this.myCropper.replace(src, false)

        }
      }
    }
  }
</script>

<style scoped>
  .before {
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #666;

    overflow: hidden;
    /* 这个属性可以得到想要的效果 */
  }

  .img-container {
    height: 300px;
    overflow: hidden;
  }

  .img-container img {
    width: 100%;
  }

  .afterCropper {
    margin-top: 10px;
    border: 4px solid var(--color-text);
    box-shadow: 0 0 10px rgba(68, 87, 143, 0.7);
    text-align: center;
    width: 100%;
  }

  .afterCropper img {
    display: block;
    line-height: 0;
    width: 100%;
  }

  .el-button {
    margin-top: 20px;
    margin-left: 20px;
  }

</style>

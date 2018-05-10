<template>
  <div>
    <el-upload
      ref="upload"
      :auto-upload="false"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-change="handleonChange"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
function blobToDataURL(blob, callback) {
  var a = new FileReader();
  a.onload = function (e) { callback(e.target.result); };
  a.readAsDataURL(blob);
}
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleonChange (file) {
      console.log(file)
      blobToDataURL(file.raw, (data) => {
        console.log(data);
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>

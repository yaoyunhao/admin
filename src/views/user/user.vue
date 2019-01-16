<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="100"></el-table-column>
      <el-table-column label="头像" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" style="width:100%">
        </template>
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="100"></el-table-column>
      <el-table-column prop="profile" label="简介" width="150"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="160"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="current"
      @current-change="handleChange"
      background
      :pager-count="13"
      layout="prev,pager,next"
      :total="100"
    ></el-pagination>
    <el-dialog title="提示" :visible.sync="showDialog" width="60%" center :before-close="handleClose">
      <el-form
        :model="currentUser"
        label-position="right"
        label-width="80px"
        :rules="editRules"
        ref="form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="currentUser.username"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload action="123" class="avatar-uploader" :show-file-list="false">
            <img v-if="currentUser.avatar" :src="currentUser.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="简介" prop="profile">
          <el-input v-model="currentUser.profile"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="currentUser.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="currentUser.email"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    const profileValidator = (rule, value, callback) => {
      if (!value || value.length < 20) {
        callback(new Error("个人简介不能低于20个字"));
      } else {
        callback();
      }
    };
    const phoneValidator = (rule, value, callback) => {
      if (
        !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    const emailValidator = (rule, value, callback) => {
      if (
        !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    return {
      current: 1,
      currentUser: {},
      showDialog: false,
      editRules: {
        username: [{ trigger: "blur", required: true, message: "用户名必填" }],
        profile: [
          { trigger: "blur", required: true, validator: profileValidator }
        ],
        phone: [{ trigger: "blur", required: true, validator: phoneValidator }],
        email: [{ trigger: "blur", required: true, validator: emailValidator }]
      }
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.list.list
    })
  },
  created() {
    this.getUserList();
  },
  methods: {
    ...mapActions({
      getUserList: "list/getUserList",
      updateUserInfo: "list/updateUserInfo",
      deleteUser:'list/deleteUser'
    }),
    handleEdit(index, row) {
      console.log("index...", index, row);
      this.currentUser = { ...row };
      this.showDialog = true;
    },
    handleDelete(index, row) {
      let {id} = row;
       this.deleteUser({uid:id})
            .then(res => {
              this.$message({
                message: res,
                center: true,
                type: "success"
              });
              this.getUserList({ page: this.current });
            })
            .catch(err => {
              this.$message({
                message: err,
                center: true,
                type: "error"
              });
            });
    },
    handleClose() {
      this.showDialog = false;
    },
    handleChange(page) {
      console.log("page...", page);
      this.current = page;
      this.getUserList({ page });
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          let { id, username, profile, email, phone } = this.currentUser;
          this.updateUserInfo({ id, username, profile, email, phone })
            .then(res => {
              this.$message({
                message: res,
                center: true,
                type: "success"
              });
              this.getUserList({ page: this.current });
            })
            .catch(err => {
              this.$message({
                message: err,
                center: true,
                type: "error"
              });
            });
          this.showDialog = false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar-uploader /deep/ .avatar {
  width: 40px;
}
</style>

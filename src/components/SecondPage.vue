<template>
  <div class="hello">
    <h1 @click="info" :class="color">{{ msg }}</h1>
    <label>{{userInfo.userName}}</label>
    <button @click="backtoPage">Back</button>
    <button @click="getuserDetail">获取详情</button>
    <ul>
    <li><router-link to="/">Root</router-link></li>
    <li><router-link to="/Three">Three</router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "secondPage",
  data() {
    return {
      msg: "我是Hello组件",
      color: "color"
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    info() {
      console.log("你点击了我");
    },
    getuserDetail() {
      this.getUserInfo();
    },
    backtoPage() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.color {
  color: #630;
}
</style>
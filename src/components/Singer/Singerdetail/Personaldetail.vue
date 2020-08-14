<template>
  <div id="personaldetail">
    <div class="wrap">
      <h4>基本信息</h4>
      <p>昵称：{{personal.name}}</p>
      <p v-show="isshow">别名:{{alias}}</p>
      <p>简介:{{personal.briefDesc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "personaldetail",
  data() {
    return {
      personal: [],
      alias: "",
      isshow: true
    };
  },
  props: ["gid"],
  methods: {
    getpersonal(id) {
      this.axios.get("/artists?id=" + id).then(res => {
        this.personal = res.data.artist;
        this.alias = this.personal.alias[0];
        if (this.personal.alias.length == 0) {
          this.isshow = false;
        } else {
          return;
        }
      });
    }
  },
  mounted() {
    this.getpersonal(this.gid);
  }
};
</script>
<style scoped>
.wrap {
  margin: 10px 20px;
}
p {
  font-size: 0.6rem;
}
</style>
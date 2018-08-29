<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div class="col">
      <ul  v-for="todo in todos" >
        <li v-text="todo.text">
      </li>
      </ul>
       <p>{{ message }}</p>
       <input v-model="message"/>
      <div>
        <input v-model="userInfo.userName"/>
        <input v-model="userInfo.Aage"/>
      </div>
      <button @click="reverseMessage">Reverse Message</button>
    </div>
    <hr>
    <ul>
    <li><router-link to="/">Root</router-link></li>
    <li><router-link to="/Second">Second</router-link></li>
    </ul>
  </div>
</template>

<script>
import { SOME_MUTATION } from "../constant/ActionTypes";
import { mapState, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App ,Just doing",
      message: "Hello Vue.js!",
      userInfo: { userName: "", Aage: 0 },
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  },
  methods: {
    ...mapMutations([SOME_MUTATION]),
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    "userInfo.userName": function(val, oldval) {
      this.message = "Waiting for you to stop typing...";
      this.SOME_MUTATION(this.userInfo);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

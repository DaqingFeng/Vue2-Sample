 <template>
  <div >
    <h1>详情</h1>
    <hr>
     名称
    <label>{{userDetail.Name}}</label>
     描述
    <label>{{userDetail.Description}}</label>
    <li><router-link to="/">Root</router-link></li>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "secondPage",
  computed: {
    ...mapState(["userDetail"])
  }
};
</script>
<style>
.color {
  color: #630;
}
</style>
<template>
  <section>
    <exeo-header/>
    <div class="wrapper">
      <main class="login">
        <div v-if="error.statusCode === 404" class="login_inr">
          <h1 class="login_logo">404</h1>
          <h1>このページは見つかりません </h1>
          <br></br>
          <div v-if="error.statusCode === 404" class="login_btn_area">
            <button><a class="back-top" href="https://stg.kids-parks.com/">TOPに戻る</a></button>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>

import ExeoForm from "~/components/form/ExeoForm.vue"
import ExeoHeader from "~/components/other/ExeoHeader.vue"

export default {
  components: {
    ExeoForm,
    ExeoHeader
  },
  props: ['error'],
  layout: 'error'
}
</script>
<style scoped>
/* @import "~/assets/admin/css/reset.css";
@import "~/assets/admin/css/common.css";
@import "~/assets/admin/css/login.css"; */

.back-top {
  text-decoration: none;
}
.login_btn_area button {
  width: 100%;
}
.login_logo {
  font-size: 100px;
  margin: 0;
}
.login {
  text-align: center;
}
</style>

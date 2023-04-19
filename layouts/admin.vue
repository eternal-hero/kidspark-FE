<template>
  <section>
    <exeo-header />
    <div class="wrapper" id="main-content">
      <exeo-sidemenu/>
      <nuxt />
    </div>
  </section>
</template>
<script>
import ExeoHeader from "~/components/other/ExeoHeader"
import ExeoSidemenu from "~/components/other/ExeoSidemenu"
export default {
  middleware({app, redirect}) {
    if (!app.$cookies.get('auth_token')) {
      return redirect('admin/login');
    }
  },
  components: {
    ExeoHeader,
    ExeoSidemenu,
  },
  head: {
    script: [
      { src: '/app/admin/js/setting.js', type: 'text/javascript', body: true },
      { src: '/app/admin/js/jquery-2.2.4.min.js', type: 'text/javascript', body: true },
      { src: '/app/admin/js/jquery.easing-1.3.min.js', type: 'text/javascript', body: true },
      { src: '/app/admin/js/slick.min.js', type: 'text/javascript', body: true },
    ],
    titleTemplate: "%s | Kids Park",
  }
}
</script>
<style>
@import url('~/assets/admin/css/reset.css');
@import url('~/assets/admin/css/common.css');
@import url('~/assets/admin/css/styles.css');
@import url('~/assets/admin/css/dashboard.css');
</style>



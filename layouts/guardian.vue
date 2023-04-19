<template>
  <section>
    <exeo-guardian-page-header />
      <nuxt />
    <exeo-guardian-footer/>
  </section>
</template>
<script>
import ExeoGuardianPageHeader from "~/components/guardian/ExeoGuardianPageHeader.vue"
import ExeoGuardianFooter from "~/components/guardian/ExeoGuardianFooter.vue"
export default {
  middleware({app, redirect}) {
    if (!app.$cookies.get('auth_token')) {
      return redirect('guardian/login');
    }
  },
  head: {
    script: [
      { src: "/app/guardian/js/slick.min.js" },
      { src: '/app/guardian/js/setting.js', type: 'text/javascript', body: true },
    ],
    titleTemplate: "%s | Kids Park",
  },
  components: {
      ExeoGuardianPageHeader,
      ExeoGuardianFooter,
  },
  methods: {
    async postLogout() {
      try {
        const data = await AuthService.postLogout(this);
        this.$cookies.set('auth_token', null);
        this.$router.push("/guardian/login");
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style>
@import url('@/assets/guardian/css/styles.css');
@import url("@/assets/guardian/js/slick/slick.css");
@import url("@/assets/guardian/js/slick/slick-theme.css");
@import url("@/assets/guardian/fonts/css/all.min.css");
</style>

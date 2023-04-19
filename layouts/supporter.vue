<template>
  <section>
    <exeo-supporter-page-header />
    <div class="wrapper">
      <nuxt />
    </div>
    <exeo-supporter-footer/>
  </section>
</template>
<script>
import ExeoSupporterPageHeader from "~/components/supporter/ExeoSupporterPageHeader.vue"
import ExeoSupporterFooter from "~/components/supporter/ExeoSupporterFooter.vue"
export default {
    middleware({app, redirect}) {
      if (!app.$cookies.get('auth_token')) {
        return redirect('supporter/login');
      }
    },
    components: {
        ExeoSupporterPageHeader,
        ExeoSupporterFooter,
    },
    head: {
      script: [
        { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" },
		    { src: "https://unpkg.com/popper.js@1" },
        { src: "https://unpkg.com/tippy.js@5" },
        { src: "/app/supporter/js/slick.min.js" },
        { src: '/app/supporter/js/setting.js', type: 'text/javascript', body: true },
      ],
      titleTemplate: "%s | Kids Park",
    }
}
</script>
<style>
@import url('~/assets/supporter/css/styles.css');
@import url("~/assets/supporter/js/slick/slick.css");
@import url("~/assets/supporter/js/slick/slick-theme.css");
@import url("~/assets/supporter/fonts/css/all.min.css");
</style>

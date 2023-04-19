<template>
  <section>
    <header class="form_header">
      <div class="form_header_inr">
        <div class="form_header_logo">
          <a href="/"><img src="@/assets/before-login/img/common/logo.png" alt="Kisd Park"></a>
        </div>
      </div>
    </header>
    <nuxt/>
    <footer class="form_footer">
		<div class="form_footer_inr">
			<div class="form_footer_logo">
				<a href="/"><img src="@/assets/before-login/img/common/logo.png" alt="Kisd Park"></a>
			</div>
			<div class="form_footer_copyright">
				<small>Copyright ©Kids Park All Rights Reserved.</small>
			</div>
		</div>
	</footer>
  </section>
</template>
<script>
export default {
  head: {
      script: [
        { src: '/before-login/js/jquery-2.2.4.min.js', type: 'text/javascript', body: true },
        { src: '/before-login/js/jquery.easing-1.3.min.js', type: 'text/javascript', body: true },
        { src: '/before-login/js/common.js', type: 'text/javascript', body: true },
        { src:"https://yubinbango.github.io/yubinbango-core/yubinbango-core.js"}
        ]
    }
}
</script>
<style>
  @import url('~/assets/before-login/css/reset.css');
  @import url('~/assets/before-login/css/common.css');
  @import url('~/assets/before-login/css/form.css');
  @import url('~/assets/before-login/css/slick.css');
</style>

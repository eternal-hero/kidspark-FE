<template>
  <main id="page-U019-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細(単発)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細(単発)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="request-box">
              <h2 class="c-ttl__02">お断り内容を確認してください</h2>
            </div>
            <form action="method">
              <div class="request-form request-form--confirm  request-form--02">
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> お断り理由<span>※</span>
                  </div>
                  <div class="request-form__ct"> ご自身の体調不良 </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">サポーターに開示されます</span>
                  </div>
                  <div class="request-form__ct"> 38.5℃の熱が出てしまった為キャンセルいたします。 </div>
                </div>
              </div>
              <div class="request-note"> お仕事リクエストのお断りは、送信後の変更、取り消しは出来かねますのでご注意ください。 </div>
              <div class="c-control--submit">
                <a href="./U019.html" class="btn_back w100">もどる</a>
                <a href="./U019-3.html" class="btn_entry">お断りする</a>
              </div>
            </form>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="3"></guardian-right-menu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";

export default {
  components: {
    GuardianRightMenu,
  },
  layout: 'guardian',
}
</script>

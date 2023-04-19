<template>
  <main id="page-U059-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細(Web事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細(Web事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="request-box">
              <h2 class="c-ttl__02">取り消し内容を確認してください</h2>
            </div>
            <form action="method">
              <div class="request-form request-form--confirm">
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 取り消し理由<span>※</span>
                    <span class="disclosure">サポーターに開示されます</span>
                  </div>
                  <div class="request-form__ct"> 予定が変わった </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">サポーターに開示されます</span>
                  </div>
                  <div class="request-form__ct"> 申し訳ありません、必要なくなりましたのでキャンセルです </div>
                </div>
              </div>
              <div class="request-note"> 予約リクエストの取り消しは、送信後の変更、取り消しは出来かねますのでご注意ください。 </div>
              <div class="c-control--submit">
                <a :href="$router.resolve({name:'guardian-reservation-detail-web-pre-interview-cancel-request-reason'}).href" class="btn_back w100">もどる</a>
                <a :href="$router.resolve({name:'guardian-reservation-detail-web-pre-interview-cancel-request-canceled'}).href" class="btn_entry">取り消す</a>
              </div>
            </form>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="3" :steps="$STEP_PRE_INTERVIEW_GUARDIAN"></guardian-right-menu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
export default {
  components: { GuardianRightMenu },
  layout: 'guardian',
}
</script>

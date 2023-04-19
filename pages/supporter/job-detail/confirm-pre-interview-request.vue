<template>
  <main id="page-P089-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(Web事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(Web事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="request-box">
              <h2 class="c-ttl__02">お断り内容を確認してください</h2>
            </div>
            <form action="method">
              <div class="request-form request-form--confirm">
                <div class="request-form__item">
                  <div class="request-form__ttl"> お断り理由<span>※</span>
                    <span class="disclosure --off">ユーザーに非公開</span>
                  </div>
                  <div class="request-form__ct"> 前後に他の依頼があり間に合わない為 </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">ユーザーに開示されます</span>
                  </div>
                  <div class="request-form__ct"> 移動距離を考えると難しい為。 </div>
                </div>
              </div>
              <div class="request-note"> 事前面談リクエストのお断りは、送信後の変更、取り消しは出来かねますのでご注意ください。 </div>
              <div class="c-control--submit">
                <a href="./P089.html" class="btn_back w100">もどる</a>
                <a href="./P089-3.html" class="btn_entry">お断りする</a>
              </div>
            </form>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="1"></supporter-right-menu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
export default {
  layout: 'supporter',
  components: {
    SupporterRightMenu
  },
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
}
</script>

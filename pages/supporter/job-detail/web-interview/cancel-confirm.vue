<template>
  <main id="page-P091-2" class="wrapper">
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
              <h2 class="c-ttl__02">キャンセル内容を確認してください。</h2>
            </div>
            <form action="method">
              <div class="request-form request-form--confirm">
                <div class="request-form__item">
                  <div class="request-form__ttl"> 確認事項<span>※</span>
                  </div>
                  <div class="request-form__ct"> サポーター都合のキャンセルです<br>ユーザーの了承を得ています </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> キャンセル理由<span>※</span>
                    <span class="disclosure --off">ユーザーに非公開</span>
                  </div>
                  <div class="request-form__ct"> サポーターの体調不良 </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">ユーザーに開示されます</span>
                  </div>
                  <div class="request-form__ct"> 38.5℃の熱が出てしまった為キャンセルいたします。 </div>
                </div>
              </div>
              <div class="request-note"> キャンセル手続きは、送信後の変更、取り消しは出来かねますのでご注意ください。 </div>
              <div class="c-control--submit">
                <NuxtLink to="cancel" class="btn_back w100">もどる</NuxtLink>
                <NuxtLink to="cancel-completion" class="btn_entry">キャンセルする</NuxtLink>
              </div>
            </form>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="3"></supporter-right-menu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";

export default {
  components: { SupporterRightMenu },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
}
</script>

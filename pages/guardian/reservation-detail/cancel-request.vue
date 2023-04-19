<template>
  <main id="page-U026" class="wrapper">
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
              <h2 class="c-ttl__02 mbpc-15">キャンセルする</h2>
              <hr class="hr mbpc-15">
              <p class="c-txt__01"> 予約確定後のキャンセルはキャンセル料が掛かる場合がございます。詳しくは<a href="https://www.kids-parks.com/faq/cancel/55/" target="_blank">キャンセル規定</a>をご確認ください。 </p>
            </div>
            <div class="questions-box mbpc-24 mbsp-24">
              <h3 class="questions-box__ttl">
                <img src="@/assets/guardian/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/cancel/55/" target="_blank">キャンセル規定について</a></li>
              </ul>
            </div>
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02 c-fc--or mb-0"> 予約2日前（48時間前）までのキャンセルは無料 </h2>
            </div>
            <ExeoTableGuardianCancelForm></ExeoTableGuardianCancelForm>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="4"></GuardianRightMenu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import ExeoTableGuardianCancelForm from "@/components/table/ExeoTableGuardianCancelForm";

export default {
  layout: 'guardian',
  components: {
    GuardianRightMenu,
    ExeoTableGuardianCancelForm
  }
}
</script>

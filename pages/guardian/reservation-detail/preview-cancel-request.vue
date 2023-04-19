<template>
  <main id="page-U026-2" class="wrapper">
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
              <h2 class="c-ttl__02">キャンセル内容を確認してください。</h2>
            </div>
            <ExeoTableGuardianPreviewCancelForm
              confirm-item="ユーザー都合のキャンセルです<br>パークサポーターの了承を得ています "
              reason-cancel="ご自身の体調不良"
              reason-detail="38.5℃の熱が出てしまった為キャンセルいたします。"
              review-cancel-note="キャンセル手続きは、送信後の変更、取り消しは出来かねますのでご注意ください。"
            ></ExeoTableGuardianPreviewCancelForm>

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
import ExeoTableGuardianPreviewCancelForm from "@/components/table/ExeoTableGuardianPreviewCancelForm";

export default {
  layout: 'guardian',
  components: {
    GuardianRightMenu,
    ExeoTableGuardianPreviewCancelForm
  }
}
</script>

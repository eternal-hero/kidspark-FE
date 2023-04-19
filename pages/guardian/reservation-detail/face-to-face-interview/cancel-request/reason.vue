<template>
  <main id="page-U060" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細(対面事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細(対面事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="request-box">
              <h2 class="c-ttl__02 mbpc-15">事前面談リクエストを取り消す</h2>
              <hr class="hr mbpc-15">
              <p class="c-txt__01"> 取り消し理由をご記入ください。 </p>
            </div>
            <question-box :questions="questions" add-class="mbpc-24 mbps-24"></question-box>
            <form action="method">
              <div class="request-form request-form--02">
                <div class="request-form__item">
                  <div class="request-form__ttl"> 取り消し理由<span>※</span>
                    <span class="disclosure">サポーターに開示されます</span>
                  </div>
                  <div class="request-form__ct">
                    <div class="form_part_select form_part_select--287">
                      <exeo-select :options="$RESERVATION_REASON_CANCELLATION_OPTIONS" value=""></exeo-select>
                    </div>
                  </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">サポーターに開示されます</span>
                  </div>
                  <div class="request-form__ct">
                    <textarea class="form-edit__textarea h170" name="request" cols="30" rows="10" placeholder="理由詳細をご記入ください。"></textarea>
                    <div class="request-form__ct-right">
                      <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                      <div class="c-example__cont js-acc-cont">
                        <span class="c-example__close js-acc-close">×</span>
                        <p class="c-txt__01">
                        </p>
                        <p><strong>例1）</strong><br> 38.5℃の熱が出てしまった為キャンセルさせていただきます。 </p><br>
                        <p>
                          <strong>例2）</strong><br> 体調が優れないため、一旦キャンセルします。<br>体調が戻りましたら、また予約させていただきます。
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="c-control--submit">
                <NuxtLink to="/guardian/reservation-detail/request-detail/quote-approval" class="btn_back w100">もどる</NuxtLink>
                <NuxtLink to="/guardian/reservation-detail/face-to-face-interview/cancel-request/review" class="btn_entry">確認ページへ</NuxtLink>
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
import QuestionBox from '~/components/block/QuestionBox.vue';
import ExeoSelect from '@/components/action/ExeoSelect.vue'

export default {
  components: { ExeoSelect, GuardianRightMenu, QuestionBox },
  layout: 'guardian',
  data() {
    return {
      questions: [
        {
          'name': '予約リクエストの内容変更、取り消しについて',
          'url': 'https://www.kids-parks.com/faq/request/177/',
        },
      ],
    }
  }
}
</script>

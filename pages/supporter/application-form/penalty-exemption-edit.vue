<template>
  <main id="page-P051-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">申請フォーム</span>
      </div>
    </div>
    <div class="main-content">
      <div class="inner">
        <h2 class="c-ttl__01">申請フォーム</h2>
        <div class="l-content">
          <div class="l-content__body">
            <h3 class="c-ttl__02">ペナルティ免除申請</h3>
            <p class="c-txt__01 mbpc-15 mbsp-15"> パークサポーターの都合による直前キャンセルが発生した場合は、予約日より2週間以内に証明書の提出が必須です。画像の添付がない場合は免除申請を承れませんのでご了承ください。<br> ペナルティの免除については<a href="https://www.kids-parks.com/faq/" target="_blank">よくある質問</a>をご参照ください。 </p>
            <question-box :questions="questions"></question-box>
            <form class="request-form request-form--02" id="id-form">
              <div class="request-form__item">
                <div class="request-form__ttl">関連依頼<span>※</span>
                </div>
                <div class="request-form__ct">
                  <p class="c-txt__01 mbpc-15 mbsp-15"> 直前キャンセルから2週間以内の依頼のみ保険申請が可能です。下記から該当の依頼を選択してください。 </p>
                  <div class="form_part_select form_part_select--287">
                    <exeo-select :options="relateRequires" v-model="relateRequire"></exeo-select>
                  </div>
                </div>
              </div>
              <div class="request-form__item">
                <div class="request-form__ttl">キャンセル理由<span>※</span>
                </div>
                <div class="request-form__ct">
                  <div class="form_part_select form_part_select--287">
                    <exeo-select :options="$JOB_REASON_CANCELLATION_OPTIONS" v-model="cancelReason"></exeo-select>
                  </div>
                </div>
              </div>
              <div class="request-form__item">
                <div class="request-form__ttl">詳細状況<span>※</span>
                </div>
                <div class="request-form__ct">
                  <textarea name="" cols="30" rows="10" class="form-edit__textarea h170 h362sp checkbt" placeholder="当時の状況など詳細をご記入ください。" required></textarea>
                  <div class="request-form__ct-right">
                    <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                    <div class="c-example__cont js-acc-cont" style="display: none;">
                      <span class="c-example__close js-acc-close">×</span>
                      <div class="c-txt__01">
                        <p> サポート前日から喉の痛みを感じ、当日の朝に38度の高熱がでてしまったため病院を受診しPCR検査を行ったところコロナ陽性の診断を受けました。<br> 保護者様にご連絡し、キャンセルの了承をいただいて、キャンセルさせていただきました。 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h2 class="quote-list__ttl mbpc-12 mbsp-18 mtpc-23 mtsp-23">証明書の提出</h2>
                <div class="c-txt__04 mbpc-25 mbsp-25 lh2-2 c-fw--md"> ※アップロードいただけるファイル　jpg / jpeg / png / heic /pdf <br>※災害などが原因で計画運休になった場合は公共交通機関の運行情報画面のスクショなどを提出してください。 <br>※ご自身、ご家族の病気の場合は診断書または受診した際の領収書などの提出をお願いします。 <br>※コロナ感染拡大予防のキャンセルの場合は体温計の写真、PCR検査を証明できる用紙等を提出してください。 </div>
                <list-file></list-file>
              </div>
              <ul class="request-note">
                <li>・申請受理まで30分から最大2営業日ほどかかる場合がございます。</li>
                <li>・申請が受理されるとメールにて通知され、自動的に売上金へ反映されます。</li>
              </ul>
              <div class="c-control--submit mw-500">
                <a href="./P049.html" class="btn_back w155 w140-sp">申請一覧へもどる</a>
                <a href="./P051-3.html" class="btn_entry js-able" id="button" disabled="disabled">確認ページへ</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import QuestionBox from '@/components/block/QuestionBox.vue'
import ListFile from '@/components/block/ListFile.vue'
import ExeoSelect from "@/components/action/ExeoSelect";

export default {
  name: 'quotion-edit',
  layout: 'supporter',
  components: { QuestionBox, ExeoSelect, ListFile },
  head() {
    return {
      title: '申請フォーム'
    }
  },
  data () {
    return {
      relateRequire: '',
      relateRequires: [
        {
          value: '',
          label: '選択してください',
        },
        {
          value: '2022年8月26日(金) 10:00-16:00  木村　花子',
          label: '2022年8月26日(金) 10:00-16:00  木村　花子',
        },
        {
          value: '2022年8月28日(日) 14:00-17:00 佐藤　七海',
          label: '2022年8月28日(日) 14:00-17:00 佐藤　七海',
        },
      ],
      cancelReason: '',
      questions: [
        {
          'name': 'ペナルティ免除について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'サポーター都合の直前キャンセルポリシー',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': '予約のキャンセルについて',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>
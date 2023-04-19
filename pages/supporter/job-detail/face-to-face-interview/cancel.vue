<template>
  <main id="page-P092" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(対面事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(対面事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="request-box">
              <h2 class="c-ttl__02 mbpc-15">キャンセルする</h2>
              <hr class="hr mbpc-15">
              <p class="c-txt__01"> 確定した予約についてはパークサポーター都合によるキャンセル（解約）は原則行えません。ですが、事情により万が一、サポート開始48時間以内の予約についてパークサポーターからのキャンセルが必要になった場合には規定のペナルティが発生します。できるだけ早いキャンセルのお手続きをお願いします。 </p>
            </div>
            <question-box :questions="questions" addClass="mbpc-24 mbsp-24"></question-box>
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02 c-fc--or mb-0"> 48時間を切っている為、5,000円のペナルティ料がかかります。 </h2>
            </div>
            <form action="method">
              <div class="request-form request-form--02">
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 確認事項<span>※</span>
                  </div>
                  <div class="request-form__ct">
                    <ul class="form-check form-check--02 mbpc-15">
                      <div class="form-check__item mbpc-15">
                        <label class="form-edit__checkbox">
                          <input type="checkbox" class="checks">
                          <span class="checkmark"></span>パークサポーター都合のキャンセルです </label>
                      </div>
                      <div class="form-check__item">
                        <label class="form-edit__checkbox">
                          <input type="checkbox" class="checks">
                          <span class="checkmark"></span>ユーザーの了承を得ています </label>
                      </div>
                    </ul>
                    <p class="c-txt__04">※ユーザー都合のキャンセルの場合は必ずユーザー側からキャンセルしていただくようにしてください。<br> ※ペナルティ回避のためにユーザーにキャンセル手続きを依頼することは禁止です。万が一、発覚した場合はキッズパークの登録継続ができなくなる可能性がございます。<br> ※必ずユーザーの了承を得てからキャンセルしてください。<br>
                      <span>※台風などの自然災害でキャンセルの場合、サポーター側からキャンセルをしてください。ペナルティ料が発生する場合は免除申請をサポーターが行ってください。</span>
                    </p>
                  </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl"> キャンセル理由<span>※</span>
                    <span class="disclosure --off">ユーザーに非公開</span>
                  </div>
                  <div class="request-form__ct">
                    <div class="form_part_select form_part_select--287">
                      <select>
                        <option value="">選択してください</option>
                        <option value="ご自身の体調不良または怪我">ご自身の体調不良または怪我</option>
                        <option value="家族・親族の体調不良や葬儀">家族・親族の体調不良や葬儀</option>
                        <option value="台風などの自然災害">台風などの自然災害</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">ユーザーに開示されます</span>
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
                          <strong>例2）</strong><br> 台風による電車の運休により、お伺いすることが難しいためキャンセルさせていただきます。
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="request-note">
                <p class="c-txt__01"> 直前キャンセルによるペナルティは、正当な理由があればペナルティの免除が申請できます。予約日より2週間以内に証明書の提出が必須です。<br> ペナルティ料が発生した場合は、受け取り金から自動的に差し引かれます。ペナルティの免除については<a href="./P059.html">よくある質問</a>をご参照ください。 </p>
              </div>
              <div class="c-control--submit">
                <a href="./P073.html" class="btn_back w100">もどる</a>
                <NuxtLink to="/supporter/job-detail/face-to-face-interview/cancel-confirm" class="btn_entry">確認ページへ</NuxtLink>
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
import QuestionBox from '~/components/block/QuestionBox.vue';
import Tab from '~/components/block/Tab.vue';

export default {
  components: { SupporterRightMenu, QuestionBox, Tab },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(対面事前面談)'
    }
  },
  data() {
    return {
      questions: [
        {
          'name': 'キャンセル規定について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'サポーターによる直前キャンセルについて',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': '直前キャンセルのペナルティ免除になる場合とは',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
      ],
    }
  },
}
</script>
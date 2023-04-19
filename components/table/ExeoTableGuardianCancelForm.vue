<template>
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
                <span class="checkmark"></span>ユーザー都合のキャンセルです </label>
            </div>
            <div class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>パークサポーターの了承を得ています </label>
            </div>
          </ul>
          <p class="c-txt__04">※48時間以内のパークサポーター都合のキャンセルの場合は、必ずパークサポーター側からキャンセルしていただくようにしてください。<br>※パークサポーターの了承を得てからキャンセルしてください。<br>
            <span>※台風などの自然災害でキャンセルの場合、サポーター側からキャンセルをお願いしてください。ユーザーからキャンセルするとキャンセル料が発生します。</span>
          </p>
        </div>
      </div>
      <div class="request-form__item">
        <div class="request-form__ttl"> キャンセル理由<span>※</span>
          <span class="disclosure">サポーターに開示されます</span>
        </div>
        <div class="request-form__ct">
          <div class="form_part_select form_part_select--287">
            <select>
              <option v-for="reason in reasons" :value="reason.value" v-model="selectedReason">{{ reason.label }}</option>
            </select>
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
    <div class="request-note">
      <p class="c-txt__01" v-html="reasonNote"></p>
    </div>
    <div class="c-control--submit">
      <a href="./U024.html" class="btn_back w100">もどる</a>
      <a href="./U026-2.html" class="btn_entry">確認ページへ</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "ExeoTableGuardianCancelForm",
  props: {
    reasons: {
      type: Object,
      default: [
        {label: '選択してください', value: ''},
        {label: '予定が変わった', value: '予定が変わった'},
        {label: 'お子さまの体調不良', value: 'お子さまの体調不良'},
        {label: 'ご自身の体調不良', value: 'ご自身の体調不良'},
        {label: 'その他', value: 'その他'},
      ]
    },
    reasonNote: {
      type: String,
      default: '・キャンセル料が発生した場合は、キャンセル確定した時点でご利用のクレジットカードに対し処理が行われます。 '
    },
  },
  data() {
    return {
      selectedReason: '',
    }
  },
}
</script>

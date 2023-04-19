<template>
  <div class="modal-main" id="M006">
    <div class="modal-block modal-block--02">
      <span class="modal-block__close"></span>
      <h2 class="modal-block__ttl"><img src="@/assets/guardian/img/U007/icon-bar02.svg" alt="絞り込み" width="17">絞り込み</h2>
      <div class="modal-ct">
        <form id="configform" name="input" action="#" method="get">
          <h3 class="modal-ct__ttl c-txt__01">ステータス</h3>
          <ul class="form-check form-check--02">
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>予約確定 </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>リクエスト </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>見積もり提示 </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>期限切れ </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>キャンセル </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>完了 </label>
            </li>
          </ul>
          <h3 class="modal-ct__ttl c-txt__01">依頼カテゴリー</h3>
          <ul class="form-check form-check--02">
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>ベビーシッター </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>産前産後 </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>病児保育 </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="checkbox" class="checks">
                <span class="checkmark"></span>家事代行 </label>
            </li>
          </ul>
          <h3 class="modal-ct__ttl c-txt__01">お名前で絞り込む</h3>
          <div class="form_part_select">
            <select>
              <option value="" selected="selected">選択してください</option>
            </select>
          </div>
          <div class="modal-ct__btn">
            <input type="reset" id="configreset" value="クリア">
            <button class="btn_entry btn_entry--arrow">絞り込む</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'M006G',
  data () {
    return {}
  },
  methods: {},
}
</script>

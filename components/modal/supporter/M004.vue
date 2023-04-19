<template>
  <div class="modal-main" id="M004">
    <div class="modal-block">
      <span class="modal-block__close"></span>
      <h2 class="modal-block__ttl">自動登録設定</h2>
      <div class="modal-ct">
        <div class="c-txt__01 modal-ct__desc"> 自動登録設定に時間を登録しておくと、毎月5日に自動で翌月のスケジュールが登録されます。 </div>
        <div class="auto-registration">
          <div class="auto-registration__option">
            <dl class="auto-registration__option-item">
              <dt class="auto-registration__option-label">日</dt>
              <dd class="auto-registration__option-ct">
                <button class="c-btn__add js-show-option" data-label="日">時間を追加する</button>
                <ul class="form-check form-check--02">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" name="radio">
                      <span class="checkmark"></span><img src="~/assets/supporter/img/common/icn_close_02.png" alt="" width="11">受入不可 </label>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="auto-registration__option-item">
              <dt class="auto-registration__option-label">月</dt>
              <dd class="auto-registration__option-ct">
                <button class="c-btn__add js-show-option" data-label="月">時間を追加する</button>
                <ul class="form-check form-check--02">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" name="radio">
                      <span class="checkmark"></span><img src="~/assets/supporter/img/common/icn_close_02.png" alt="" width="11">受入不可 </label>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="auto-registration__option-item">
              <dt class="auto-registration__option-label">火</dt>
              <dd class="auto-registration__option-ct">
                <button class="c-btn__add js-show-option" data-label="火">時間を追加する</button>
                <ul class="form-check form-check--02">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" name="radio">
                      <span class="checkmark"></span><img src="~/assets/supporter/img/common/icn_close_02.png" alt="" width="11">受入不可 </label>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="auto-registration__option-item">
              <dt class="auto-registration__option-label">水</dt>
              <dd class="auto-registration__option-ct">
                <button class="c-btn__add js-show-option" data-label="水">時間を追加する</button>
                <ul class="form-check form-check--02">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" name="radio">
                      <span class="checkmark"></span><img src="~/assets/supporter/img/common/icn_close_02.png" alt="" width="11">受入不可 </label>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="auto-registration__option-item">
              <dt class="auto-registration__option-label">木</dt>
              <dd class="auto-registration__option-ct">
                <button class="c-btn__add js-show-option" data-label="木">時間を追加する</button>
                <ul class="form-check form-check--02">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" name="radio">
                      <span class="checkmark"></span><img src="~/assets/supporter/img/common/icn_close_02.png" alt="" width="11">受入不可 </label>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="auto-registration__option-item">
              <dt class="auto-registration__option-label">金</dt>
              <dd class="auto-registration__option-ct">
                <button class="c-btn__add js-show-option" data-label="金">時間を追加する</button>
                <ul class="form-check form-check--02">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" name="radio">
                      <span class="checkmark"></span><img src="~/assets/supporter/img/common/icn_close_02.png" alt="" width="11">受入不可 </label>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="auto-registration__option-item">
              <dt class="auto-registration__option-label">土</dt>
              <dd class="auto-registration__option-ct">
                <button class="c-btn__add js-show-option" data-label="土">時間を追加する</button>
                <ul class="form-check form-check--02">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" name="radio">
                      <span class="checkmark"></span><img src="~/assets/supporter/img/common/icn_close_02.png" alt="" width="11">受入不可 </label>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="auto-registration__list-item option-item option-add">
            <span class="auto-registration__list-day">日</span>
            <exeo-select-accept-time start_hour="12" end_hour="19" />
            <div class="auto-registration__list-btn">
              <button class="c-btn__delete js-delete-option02">削除</button>
            </div>
          </div>
        </div>
        <div class="modal-ct__control">
          <button class="btn_entry">時間を追加する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ExeoSelectAcceptTime from "@/components/action/ExeoSelectAcceptTime.vue";

export default {
  name: "M004",
  components: {ExeoSelectAcceptTime},
};

</script>

<style scoped>

</style>

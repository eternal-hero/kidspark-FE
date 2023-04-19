<template>
  <div class="modal-main" id="M002">
    <div class="modal-block">
      <span class="modal-block__close"></span>
      <h2 class="modal-block__ttl">2022年08月15日</h2>
      <div class="modal-ct">
        <div class="accept-time">
          <ul class="accept-time__status">
            <li class="accept-time__status-item">
              <input type="radio" name="status[]" value="登録する" checked="checked">
              <label class="c-btn__status">登録する</label>
            </li>
            <li class="accept-time__status-item">
              <input type="radio" name="status[]" value="終日不可">
              <label class="c-btn__status c-btn__status--available">終日不可</label>
            </li>
          </ul>
          <p class="c-txt__01 accept-time__desc">受け入れ可能時間</p>
          <div class="accept-time__list option-list">
            <div class="accept-time__list-item option-item">
              <exeo-select-accept-time start_hour="12" end_hour="12"></exeo-select-accept-time>
              <div class="accept-time__list-btn">
                <div class="c-btn__delete js-delete-option">削除</div>
              </div>
            </div>
          </div>
          <div class="accept-time__add c-al--c">
            <button class="c-btn__add js-add-option">時間を追加する</button>
          </div>
          <div class="accept-time__list-item option-item option-add">
            <exeo-select-accept-time start_hour="12" end_hour="12" :option_minutes="$MINUTES_SELECT_OPTION_STEP_5" />
            <div class="accept-time__list-btn">
              <div class="c-btn__delete js-delete-option">削除</div>
            </div>
          </div>
        </div>
        <div class="modal-ct__control">
          <button class="btn_entry">保存する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ExeoSelectAcceptTime from "@/components/action/ExeoSelectAcceptTime.vue";

export default {
  components: {ExeoSelectAcceptTime}
};

</script>

<style scoped>

</style>

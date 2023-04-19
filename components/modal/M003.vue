<template>
  <div>
    <button class="btn_style_05" @click="isShowing = true">絞り込む</button>
    <div class="popup-main" :class="{ open: isShowing }">
      <div class="popup-block">
        <span class="popup-block__close" @click="isShowing = false"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
          <form id="configform" name="input" action="#" method="get">
            <div class="form-narrow">
              <div class="form-narrow__item">
                <div class="form-narrow__txt">日程</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
                <small>〜</small>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">公開応募ID</div>
                <input
                  type="text"
                  placeholder="入力してください"
                  class="form-narrow__input"
                />
                <span class="form-narrow__name">ステータス</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="statuses"
                    v-model="status"
                  ></exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">ユーザー</div>
                <input
                  type="text"
                  placeholder="IDまたは名前を入力"
                  class="form-narrow__input"
                />
                <span class="form-narrow__name">定/単</span>
                <exeo-checkbox
                  :options="tanteiOptions"
                  v-model="tanteis"
                ></exeo-checkbox>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">依頼カテゴリー</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="requestCategories"
                    v-model="requestCategory"
                  ></exeo-select>
                </div>
                <span class="form-narrow__name">応募数</span>
                <exeo-checkbox
                  v-model="applyStatus"
                  :options="applyStatusOptions"
                ></exeo-checkbox>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">募集期限</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
                <small>まで</small>
              </div>
            </div>
            <div class="popup-ct__btn tc">
              <button class="btn_style_04">絞り込む</button>
              <input
                type="reset"
                id="configreset"
                value="すべてリセットする"
                class="btn_style_02"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoCheckbox from "@/components/action/ExeoCheckbox.vue";

export default {
  name: "M003",
  components: { ExeoCheckbox, ExeoSelect },
  data() {
    return {
      isShowing: false,
      statuses: [
        { label: "すべて", value: "" },
        { label: "募集中", value: 0 },
        { label: "期限切れ", value: 1 },
        { label: "キャンセル", value: 2 },
        { label: "募集終了", value: 3 },
      ],
      status: "",
      requestCategories: [
        { label: "すべて", value: "" },
        { label: "シッター", value: 0 },
        { label: "産前産後", value: 1 },
        { label: "病児保育", value: 2 },
        { label: "家事代行", value: 3 },
      ],
      requestCategory: "",
      applyStatusOptions: [
        { label: "応募あり", value: 1 },
        { label: "応募なし", value: 0 },
      ],
      applyStatus: [],
      tanteiOptions: [
        { label: "単発", value: 0 },
        { label: "定期", value: 1 },
      ],
      tanteis: [],
    };
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <button class="btn_style_05" @click="isShowing = true">絞り込む</button>
    <div class="popup-main" v-bind:class="{ open: isShowing }">
      <div class="popup-block">
        <span class="popup-block__close" @click="isShowing = false"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
          <form id="configform" name="input" action="#" method="get">
            <div class="form-narrow">
              <div class="form-narrow__item">
                <div class="form-narrow__txt">開始日</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.dateRangeStart"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
                <small>〜</small>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.dateRangeEnd"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">公開応募ID</div>
                <exeo-form
                  v-model="modalData.publicApplicationID"
                  type="text"
                  placeholder="入力してください"
                  class="form-narrow__input"
                ></exeo-form>
                <span class="form-narrow__name">ステータス</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    v-model="modalData.status"
                    :options="$APPLY_STATUSES"
                  >
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">パークサポーター</div>
                <exeo-form
                  type="text"
                  v-model="modalData.supporter"
                  placeholder="IDまたは名前を入力"
                  class="form-narrow__input"
                />
                <span class="form-narrow__name">定/単</span>
                <exeo-checkbox
                  v-model="modalData.payment"
                  :options="$PAYMENT_TYPES"
                ></exeo-checkbox>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">ユーザー</div>
                <exeo-form
                  type="text"
                  v-model="modalData.username"
                  placeholder="IDまたは名前を入力"
                  class="form-narrow__input"
                />
                <span class="form-narrow__name">依頼カテゴリー</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    v-model="modalData.requestCategory"
                    :options="$REQUEST_CATEGORIES"
                  >
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">都道府県</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    v-model="modalData.prefecture"
                    :options="$PREFECTURES"
                  >
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
                <span class="form-narrow__name">応募数</span>
                <exeo-checkbox
                  :options="applicationOptions"
                  v-model="modalData.hasApplication"
                ></exeo-checkbox>
              </div>
            </div>
            <div class="popup-ct__btn tc">
              <button class="btn_style_04" @click.prevent="search">
                絞り込む
              </button>
              <input
                type="reset"
                id="configreset"
                value="すべてリセットする"
                class="btn_style_02"
                @click="resetModal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoForm from "@/components/form/ExeoForm.vue";
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoCheckbox from "@/components/action/ExeoCheckbox.vue";

export default {
  name: "M002",
  components: { ExeoCheckbox, ExeoSelect, ExeoForm },
  data() {
    return {
      isShowing: false,
      applicationOptions: [
        { label: "応募あり", value: 1 },
        { label: "応募なし", value: 0 },
      ],
      modalData: {
        dateRangeStart: "",
        dateRangeEnd: "",
        publicApplicationID: "",
        supporter: "",
        status: "",
        payment: [],
        username: "",
        requestCategory: "",
        hasApplication: [],
        prefecture: "",
      },
    };
  },
  methods: {
    resetModal() {
      this.modalData = {
        dateRangeStart: "",
        dateRangeEnd: "",
        publicApplicationID: "",
        supporter: "",
        status: "",
        payment: [],
        username: "",
        requestCategory: "",
        hasApplication: [],
        prefecture: "",
      };
    },
    search() {
      this.$emit("submit", this.modalData);
    },
  },
};
</script>

<style scoped></style>

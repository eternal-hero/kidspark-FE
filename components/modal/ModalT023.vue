<template>
  <div>
    <button class="btn_style_05 js-popup" @click="isShowing = true">
      絞り込む
    </button>
    <div class="popup-main" :class="{ open: isShowing }">
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
                    v-model="modalData.rangeDateStart"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
                <small>〜</small>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.rangeDateEnd"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">ファイルID</div>
                <input
                  type="text"
                  v-model="modalData.file_id"
                  placeholder="入力してください"
                  class="form-narrow__input"
                />
                <span class="form-narrow__name">ステータス</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select :options="$IDENTITY_APPLICATION_STATUSES" v-model="modalData.status">
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">カテゴリー</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select :options="$IDENTITY_DOCUMENT_TYPES" v-model="modalData.category">
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">有効期限</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.expiration_on"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
                <small>まで</small>
              </div>
            </div>
            <div class="popup-ct__btn tc">
              <button class="btn_style_04" @click.prevent="submit">絞り込む</button>
              <input
                type="reset"
                @click.prevent="resetModal"
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

export default {
  name: "Modal-T023",
  components: {ExeoSelect},
  data() {
    return {
      isShowing: false,
      modalData: {},
    };
  },

  methods: {
    submit() {
      this.$emit("submit", this.modalData);
    },
    resetModal() {
      this.modalData = {
        rangeDateStart: "",
        rangeDateEnd: "",
        file_id: "",
        status: "",
        category: "",
        expiration_on: ""
      };
    },
  },
  created() {
    this.resetModal();
  },
};
</script>

<style scoped></style>

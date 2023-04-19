<template>
  <div class="application-block__btn">
    <button class="btn_style_05 js-popup" @click.prevent="isShowing = true">
      絞り込む
    </button>
    <div class="popup-main" :class="{ open: isShowing }">
      <div class="popup-block">
        <span
          class="popup-block__close"
          @click.prevent="isShowing = false"
        ></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
          <form id="configform" name="input" action="#" method="get">
            <div class="form-narrow">
              <div class="form-narrow__item">
                <div class="form-narrow__txt">申請日</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.applicationDateFrom"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
                <small>〜</small>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.applicationDateTo"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">ファイルID</div>
                <exeo-form
                  type="text"
                  v-model="modalData.fileId"
                  placeholder="入力してください"
                  class="form-narrow__input"
                />
                <span class="form-narrow__name">ステータス</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="$APPLICATION_STATUSES"
                    v-model="modalData.applicationStatus">
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">名称</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select :options="$APPLICATION_TYPES" v-model="modalData.applicationType">
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">有効期限</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.expirationDate"
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
                @click="resetModal"
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
import ExeoForm from "@/components/form/ExeoForm.vue";

export default {
  name: "M014",
  components: {
    ExeoForm,
    ExeoSelect
  },
  data() {
    return {
      isShowing: false,
      modalData: {}
    };
  },
  methods: {
    resetModal() {
      this.modalData = Object.assign({}, this.modalData, {
        applicationDateFrom: "",
        applicationDateTo: "",
        fileId: "",
        applicationStatus: "",
        applicationType: "",
        expirationDate: "",
      })
    },
    submit() {
      this.$emit('submit', this.modalData);
    }
  },
  created() {
    this.resetModal();
  }
};
</script>

<style scoped></style>

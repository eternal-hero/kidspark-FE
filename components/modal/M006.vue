<template>
  <div>
    <button class="btn_style_05" @click="showModal">絞り込む</button>
    <div class="popup-main" v-bind:class="{ open: isShowing }">
      <div class="popup-block">
        <span class="popup-block__close" @click="closeModal"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
          <form id="configform" name="input" action="#" method="get">
            <div class="form-narrow">
              <div class="form-narrow__item">
                <div class="form-narrow__txt">投稿日</div>
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
                <div class="form-narrow__txt">ユーザー</div>
                <exeo-form
                  type="text"
                  placeholder="IDまたは名前を入力"
                  class="form-narrow__input"
                  v-model="modalData.username"
                ></exeo-form>
                <span class="form-narrow__name">お仕事ID</span>
                <div class="form-narrow__select">
                  <exeo-form
                    type="text"
                    placeholder="入力してください"
                    class="form-narrow__input"
                    v-model="modalData.jobId"
                  ></exeo-form>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">公開</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="publishOptions"
                    v-model="modalData.publishStatus"
                  ></exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">評価</div>
                <exeo-checkbox
                  :options="evaluationOptions"
                  v-model="modalData.evaluations"
                >
                </exeo-checkbox>
              </div>
            </div>
            <div class="popup-ct__btn tc">
              <button class="btn_style_04" @click.prevent="search">絞り込む</button>
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
import ExeoCheckbox from "@/components/action/ExeoCheckbox.vue";
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoForm from "@/components/form/ExeoForm.vue";

export default {
  name: "M006",
  components: {
    ExeoForm,
    ExeoSelect,
    ExeoCheckbox,
  },
  data() {
    return {
      isShowing: false,
      evaluationOptions: [
        { value: 5, label: "5つ星" },
        { value: 4, label: "4つ星" },
        { value: 3, label: "3つ星" },
        { value: 2, label: "2つ星" },
        { value: 1, label: "1つ星" },
        { value: 0, label: "なし" },
      ],
      publishOptions: [
        { value: "", label: "すべて" },
        { value: 0, label: "予約中" },
        { value: 1, label: "欠席" },
        { value: 2, label: "キャンセル" },
        { value: 3, label: "受講済み" },
      ],
      modalData: {
        evaluations: [],
        publishStatus: "",
        jobId: "",
        username: "",
      },
    };
  },
  methods: {
    showModal() {
      this.isShowing = true;
    },
    closeModal() {
      this.isShowing = false;
    },
    resetModal() {
      this.modalData = {
        evaluations: [],
        publishStatus: "",
        jobId: "",
        username: "",
      };
    },
    search() {
      this.$emit('submit', this.modalData);
    },
  },
};
</script>

<style scoped></style>

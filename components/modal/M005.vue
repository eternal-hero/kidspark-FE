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
                <div class="form-narrow__txt">パークサポーター</div>
                <exeo-form type="text" placeholder="IDまたは名前を入力" class="form-narrow__input"
                  v-model="modalData.username"></exeo-form>
                <span class="form-narrow__name">稼働実績</span>
                <exeo-radio name="recode" value="" v-model="modalData.result" :options="resultOptions"></exeo-radio>
              </div>

              <div class="form-narrow__item">
                <div class="form-narrow__txt">都道府県</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select v-model="modalData.prefecture" :options="$PREFECTURES">
                    <option value="">都道府県</option>
                  </exeo-select>
                </div>
                <span class="form-narrow__name">性別</span>
                <exeo-radio name="gender" value="" v-model="modalData.gender" :options="genderOptions"></exeo-radio>
              </div>

              <div class="form-narrow__item">
                <div class="form-narrow__txt">シッター</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select name="sitter" :options="selectOptions" v-model="modalData.sitter"></exeo-select>
                </div>
              </div>

              <div class="form-narrow__item">
                <div class="form-narrow__txt">病児保育</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select name="sickChildren" :options="selectOptions"
                    v-model="modalData.sickChildren"></exeo-select>
                </div>
                <span class="form-narrow__name">家事代行</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select name="housework" :options="selectOptions" v-model="modalData.housework"></exeo-select>
                </div>
              </div>

              <div class="form-narrow__item">
                <div class="form-narrow__txt">産前産後</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select :options="selectOptions" v-model="modalData.childbirth"></exeo-select>
                </div>
              </div>

              <div class="popup-ct__btn tc">
                <button class="btn_style_04" @click.prevent="search">
                  絞り込む
                </button>
                <input type="reset" id="configreset" value="すべてリセットする" class="btn_style_02" @click="resetModal" />
              </div>
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
import ExeoRadio from "../action/ExeoRadio.vue";

export default {
  name: "M005",
  components: {
    ExeoForm,
    ExeoSelect,
    ExeoCheckbox,
    ExeoRadio,
  },
  data() {
    return {
      isShowing: false,
      resultOptions: [
        { value: 1, label: "ある" },
        { value: 0, label: "なし" },
        { value: '', label: "すべて" },
      ],
      genderOptions: [
        { value: 1, label: "男性" },
        { value: 0, label: "女性" },
        { value: '', label: "すべて" },
      ],

      selectOptions: [
        { label: "すべて", value: "" },
        { label: "選考中", value: 1 },
        { label: "書類未", value: 2 },
        { label: "公開中（予約受付可）", value: 3 },
        { label: "公開中（予約停止）", value: 4 },
        { label: "非公開", value: 5 },
        { label: "不採用", value: 6 },
      ],

      modalData: {
        username: "",
        result: '',
        prefecture: "",
        sitter: "",
        gender: "",
        housework: "",
        childbirth: "",
        sickChildren: ""
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
        username: "",
        result: '',
        prefecture: "",
        sitter: "",
        gender: "",
        housework: "",
        childbirth: "",
        sickChildren: ""
      };
    },
    search() {
      this.$emit("submit", this.modalData);
      this.isShowing = false;
    },
  },
};
</script>

<style scoped></style>

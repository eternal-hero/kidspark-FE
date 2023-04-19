<template>
  <div>
    <div class="application-block__btn">
      <button class="btn_style_05 js-popup" @click="isShowing = true">絞り込む</button>
    </div>
    <div class="popup-main" :class="{ open: isShowing }">
      <div class="popup-block">
        <span class="popup-block__close" @click="isShowing = false"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
          <form id="configform" name="input" action="#" method="get">
            <div class="form-narrow">
              <div class="form-narrow__item">
                <div class="form-narrow__txt">更新日</div>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.updatedFrom"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
                <small>〜</small>
                <label class="form-narrow__date">
                  <input
                    type="date"
                    v-model="modalData.updatedTo"
                    placeholder="日付を選択してください"
                    class="form-narrow__input form_part_date_input"
                  />
                </label>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">申請ID</div>
                <input
                  type="text"
                  v-model="modalData.request_id"
                  placeholder="入力してください"
                  class="form-narrow__input"
                />
                <span class="form-narrow__name">ステータス</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select :options="applicationStatuses" v-model="modalData.status">
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">件名</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select :options="request_application_types"
                               v-model="modalData.type">
                    <option value="">すべて</option>
                  </exeo-select>
                </div>
                <span class="form-narrow__name">ユーザー</span>
                <input
                  type="text"
                  v-model="modalData.guardian"
                  placeholder="IDまたは名前を入力"
                  class="form-narrow__input"
                />
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
  name: "ModalT081",
  components: {ExeoSelect},
  data() {
    return {
      isShowing: false,
      modalData: {},
      applicationStatuses: [
        {value: 0, label: '未対応'},
        {value: 1, label: '対応済み'},
        {value: 2, label: '不受理'},
      ],
      request_application_types: [
        {value: 0, label: "住所変更申請"},
        {value: 1, label: "氏名変更申請"},
        {value: 2, label: "住所・氏名変更申請"},
        {value: 3, label: "保険申請"},
        {value: 4, label: "ポイント購入申請"},
        {value: 5, label: "退会申請"},
        {value: 6, label: "見守りカメラレンタル申請"},
        {value: 7, label: "内政府ベビーシッター割引券申請(法人)"}
      ]
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.modalData);
    },
    resetModal() {
      this.modalData = {
        updatedFrom: "",
        updatedTo: "",
        request_id: "",
        status: "",
        type: "",
        guardian: "",
      };
    },
  },
  created() {
    this.resetModal();
  },
}
</script>

<style scoped>

</style>

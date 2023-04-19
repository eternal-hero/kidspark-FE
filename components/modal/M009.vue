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
                <div class="form-narrow__txt">受講日</div>
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
                <div class="form-narrow__txt">講座ID</div>
                <exeo-form
                  type="text"
                  v-model="modalData.courseId"
                  placeholder="入力してください"
                  class="form-narrow__input"
                ></exeo-form>
                <span class="form-narrow__name">カテゴリー</span>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    :options="$COURSE_CATEGORIES"
                    v-model="modalData.category"
                  ></exeo-select>
                </div>
              </div>
              <div class="form-narrow__item">
                <div class="form-narrow__txt">受講状況</div>
                <div class="form-narrow__select form_part_select">
                  <exeo-select
                    v-model="modalData.attendanceStatus"
                    :options="$ATTENDANCE_STATUSES"
                  ></exeo-select>
                </div>
                <span class="form-narrow__name">講座名</span>
                <exeo-form
                  type="text"
                  v-model="modalData.courseName"
                  placeholder="入力してください"
                  class="form-narrow__input"
                ></exeo-form>
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
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoForm from "@/components/form/ExeoForm.vue";

export default {
  name: "M009",
  components: {ExeoForm, ExeoSelect},
  data() {
    return {
      isShowing: false,
      modalData: {
        courseId: '',
        category: '',
        attendanceStatus: '',
        courseName: '',
        expirationDate: '',
        rangeDateStart: '',
        rangeDateEnd: ''
      },
    };
  },
  methods: {
    submit() {
      this.$emit('submit', this.modalData);
    },
    resetModal() {
      this.modalData = {
        courseId: '',
        category: '',
        attendanceStatus: '',
        courseName: '',
        expirationDate: '',
        rangeDateStart: '',
        rangeDateEnd: ''
      }
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="tableblock_scroll">
    <table class="table_style_02 table_style_02--style7 looksort_table">
      <thead>
        <tr>
          <th>
            <ul class="list-checkbox">
              <li class="list-checkbox__item list-checkbox__item--full">
                <form>
                  <label class="checkbox-custom">
                    <input id="checkAll" type="checkbox" name="lang" value="checkall" v-model="selectAll"
                      @click="select" />
                    <span class="checkmark"></span>
                  </label>
                </form>
              </li>
            </ul>
          </th>
          <th>ユーザーID</th>
          <th>名前</th>
          <th>緊急連絡先</th>
          <th>都道府県</th>
          <th>最寄り駅</th>
          <th>お子様の年齢</th>
          <th>カメラ設置</th>
          <th>利用回数</th>
          <th>メモ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guardian in this.guardians" :key="guardian.id">
          <td>
            <ul class="list-checkbox">
              <li class="list-checkbox__item list-checkbox__item--full">
                <label class="checkbox-custom">
                  <input type="checkbox" :value="guardian" v-model="selected" class="checks" />
                  <span class="checkmark"></span>
                </label>
              </li>
            </ul>
          </td>
          <td class="looksort_table_id">{{ guardian.id }}</td>
          <td class="looksort_table_user">
            <NuxtLink :to="`/admin/guardian/${guardian.id}/info`">{{ guardian.last_name }} {{
              guardian.first_name
            }}<br /> {{
  guardian.last_kana
}} {{ guardian.first_kana }}</NuxtLink>
          </td>
          <td class="looksort_table_phone">
            {{ guardian.emergency_contact_phone_number }}
          </td>
          <td class="looksort_table_prefectures">{{ guardian.prefecture }}</td>
          <td class="looksort_table_station">
            {{ guardian.near_station }}
          </td>
          <td class="looksort_table_age">{{ guardian.children }}</td>
          <td class="looksort_table_camera" v-if="guardian.is_camera">◯</td>
          <td class="looksort_table_camera" v-else></td>
          <td class="looksort_table_number">{{ guardian.access_count }}</td>
          <td class="looksort_table_memo">{{ guardian.memo }}</td>
          <td>
            <NuxtLink :to="`/admin/guardian/${guardian.id}/info`" class="btn_style_02 decoration-none">詳細</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Web from "../../const/web";

export default {
  name: "ExeoTableGuardian",
  props: {
    guardians: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: () => ({
    items: [],
    selected: [],
    selectAll: false
  }),
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.$props.guardians) {
          const data = this.selected;
          data.push(this.$props.guardians[i]);
        }
      }
    },
  },
  watch: {
    selected: function (val) {
      this.selected = val;
      this.$emit('excelData', this.selected);
    }
  }
};
</script>
<!--GuardianService.getListGuardian(this,)-->

<template>
  <div class="col2_block_main">
    <form action="" class="form-edit">
      <h2 class="cmn-ttl-01"><span>基本情報</span></h2>
      <table class="table_style_01 form-edit__table">
        <tbody>
        <tr>
          <th class="looksort_table_info">名前</th>
          <td>
            <div class="form-edit__group">
              <ExeoForm class="form-edit__input form-edit__input-name" v-model="formData.last_name"/>
              <ExeoForm class="form-edit__input form-edit__input-name" v-model="formData.first_name"/>
            </div>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">ふりがな</th>
          <td>
            <div class="form-edit__group">
              <ExeoForm class="form-edit__input form-edit__input-name" v-model="formData.last_kana"/>
              <ExeoForm class="form-edit__input form-edit__input-name" v-model="formData.first_kana"/>
            </div>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">ニックネーム</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.nickname"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">性別</th>
          <td>
            <div class="radio-group form-edit__radio">
              <ExeoRadio :name="'gender'" :options="$GENDER" v-model="formData.gender"/>
            </div>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">お子様との続柄</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.relation"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">生年月日</th>
          <td>
            <label class="form_part_date">
              <input type="date" class="form_part_date_input" v-model="formData.birthday">
            </label>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">郵便番号</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.post_code"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">都道府県</th>
          <td>
            <div class="form-edit__select form_part_select">
              <ExeoSelect :name="'pref_name'" :options="$PREFECTURES" v-model="formData.prefecture"/>
            </div>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">市区町村</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.municipality"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">丁目・番地・号</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.street_name"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">建物名</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.building"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">連絡先電話番号</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.contact_phone_number"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">メールアドレス</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.mail_address"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">勤務先</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.workspace"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">家族構成</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.family_structure"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">ペットの有無</th>
          <td>
            <div class="radio-group form-edit__radio">
              <ExeoRadio :name="'pets'" :options="$IS_PET" v-model="formData.is_pets"/>
            </div>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">住居形態</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.housing_type"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">カメラ設置</th>
          <td>
            <div class="radio-group form-edit__radio">
              <ExeoRadio :name="'camera'" :options="$IS_CAMERA" v-model="formData.is_camera"/>
            </div>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">緊急連絡先の名前</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.emergency_contact_name"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">緊急連絡先の電話番号</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.emergency_contact_phone_number"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">登録者との関係</th>
          <td>
            <ExeoForm class="form-edit__input" v-model="formData.emergency_contact_relation"/>
          </td>
        </tr>
        <tr>
          <th class="looksort_table_info">ユーザーID</th>
          <td><strong>{{ formData.id }}</strong></td>
        </tr>
        </tbody>
      </table>
      <div class="form-edit__control">
        <button class="btn_style_04" @click.prevent="updateGuardianInfo">保存する</button>
      </div>
    </form>
  </div>
</template>

<script>
import ExeoRadio from '../action/ExeoRadio.vue';
import ExeoForm from '../form/ExeoForm.vue';
import ExeoSelect from '../action/ExeoSelect.vue';

export default {
  components: {
    ExeoRadio,
    ExeoForm,
    ExeoSelect
  },
  props: {
    guardian: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formData: {},
    }
  },
  created() {
    this.formData = {...this.guardian};
  },
  methods: {
    updateGuardianInfo() {
      this.$emit('submit', this.formData);
    }
  },
}
</script>

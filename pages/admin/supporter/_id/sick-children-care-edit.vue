<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>病児保育設定</li>
      </ul>
    </nav>
    <exeo-headline>プロフィール〈病児保育設定〉</exeo-headline>
    <supporter-header :isEditing="true" :user="supporter"/>
    <div class="col2_block f-ai-start">
      <exeo-supporter-navigation-window />
      <div class="col2_block_main">
        <form action="" class="form-edit supportmanagement-form">
          <exeo-table-sick-childen-care-edit
            v-model="setting"
          />
          <!-- <table
            class="
              table_style_02 table_style_02--style5 table_style_02--no-striped
              form-edit__table form-edit__table--styles02 form-edit__add-option
              looksort_table--small
            "
            :class="[setting.is_sick_child_care ? 'table' : 'table-hide']"
          >
            <thead>
              <tr>
                <th>オプション設定</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="form-edit__status has-card" id="other">
                <td class="looksort_table_info">病児保育オプション</td>
                <td>
                  <div class="add-option">
                    <button class="form_part_add_option js-add-option">
                      オプションを追加する
                    </button>
                  </div>
                  <div class="add-option__item">
                    <div
                      class="
                        add-option__wrapper add-option__wrapper--styles02
                        flex flex--center
                      "
                      style="display: none"
                    >
                      <input
                        type="text"
                        class="
                          form-edit__input form-edit__input--shorter
                          option
                        "
                        name="option"
                        value=""
                        placeholder="(例)オプションを入れてください"
                      />
                      <div class="form_part_unit form_part_unit--styles02">
                        <input
                          type="text"
                          name="price"
                          value=""
                          placeholder="（例）1800"
                          class="price"
                        />
                        <span class="form_part_unit_label">円</span>
                      </div>
                      <div class="tableform_select">
                        <select class="hour">
                          <option value="1時間あたり">1時間あたり</option>
                          <option value="1回当たり">1回あたり</option>
                        </select>
                      </div>
                      <button class="btn_style_01 js-send-result">保存</button>
                    </div>
                    <div class="add-option__result flex" style="display: none">
                      <p class="add-option__result-txt">
                        <span id="option"></span
                        ><span id="price"></span>円/<span
                          id="hour-other"
                        ></span>
                      </p>
                      <div class="btn_area">
                        <button class="btn_style_02 js-edit-result">
                          編集
                        </button>
                        <button class="btn_style_03 js-remove-result">
                          削除
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="looksort_table_note">
                  <div class="statuschips js-tooltip-02">
                    <span>入力例</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td colspan="2">
                  <div class="form-edit__card">
                    <button
                      class="form-edit__card-close js-close-tooltip"
                    ></button
                    >入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
                  </div>
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>対応可能設定</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="form-edit__status has-card">
                <td class="looksort_table_info">受け入れ条件</td>
                <td>
                  <textarea
                    name="memo"
                    rows="2"
                    cols="40"
                    class="form_part_txt form-edit__textarea"
                    placeholder="受け入れ条件を入力してください"
                  ></textarea>
                </td>
                <td class="looksort_table_note">
                  <div class="statuschips js-tooltip-02">
                    <span>入力例</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td colspan="2">
                  <div class="form-edit__card">
                    <button
                      class="form-edit__card-close js-close-tooltip"
                    ></button
                    >入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
                  </div>
                </td>
              </tr>
            </tbody>
          </table> -->
          <div class="form-edit__control">
            <button class="btn_style_04" @click.prevent="updateSetting">保存する</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import ExeoHeadline from "~/components/other/ExeoHeadline.vue";
import SupporterHeader from "~/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "~/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableSickChildenCareEdit from "~/components/table/ExeoTableSickChildenCareEdit.vue";
import SickChildCareService from "~/services/admin/supporter/SickChildCareService.js";
import SupporterService from "~/services/admin/supporter/SupporterInfoService.js";

export default {
  layout: "admin",
  components: {
    ExeoHeadline,
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoTableSickChildenCareEdit,
  },
  head() {
    return {
      title: 'プロフィール〈病児保育設定〉'
    }
  },
  async asyncData(context) {
    let {setting} = await SickChildCareService.getSetting(context,context.params.id)
    if(setting == null) {
      setting = {
        id: null,
        settings_id: null,
        supporter_user_id: parseInt(context.params.id),
        is_sick_child_care: false,
        single_fee: null,
        regular_fee: null,
        special: null,
        service: null
      }
    }
    await context.store.dispatch('admin/supporter/info/initData', {supporter_id : context.params.id, context:context});
    const supporter = context.store.getters['admin/supporter/info/supporter']
    return {setting : setting, supporter: supporter}
  },
  data() {
    return {}
  },
  methods: {
    async updateSetting() {
      if (this.setting['updated_at']){
        delete this.setting['updated_at']
      }
      const data = await SickChildCareService.updateSetting(this,this.$route.params.id, this.setting)
      if(data.statusCode==400){
        alert("入力内容に誤りがあります。")
        return false;
      }
      this.$router.push({
        name: 'admin-supporter-id-sick-children-care',
        params: {
          message: '保存しました'
        },
      })
    }
  },
};
</script>

<style>
</style>

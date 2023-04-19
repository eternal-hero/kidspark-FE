<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>家事代行設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>プロフィール〈家事代行設定〉</span></h1>
    <SupporterHeader :user="user" :isEditing="true"/>
    <div class="col2_block f-ai-start">
      <ExeoSupporterNavigationWindow />
      <div class="col2_block_main">
        <form action="" class="form-edit supportmanagement-form">
          <exeo-table-housekeeper-edit v-model="housekeeping_setting"/>
          <table
            class="
              table_style_02 table_style_02--style5 table_style_02--no-striped
              form-edit__table form-edit__table--styles02 form-edit__add-option
              looksort_table--small
            "
            :class="[housekeeping_setting.is_housework ? 'table' : 'table-hide']"
          >
            <thead>
              <tr>
                <th>オプション設定</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="form-edit__status" id="other">
                <td class="looksort_table_info">家事代行オプション</td>
                <td colspan="2">
                  <div class="add-option">
                    <div class="form_part_add_option" @click="option.show = true">
                      オプションを追加する
                    </div>
                  </div>
                  <div class="add-option__item" v-if="option.show">
                    <div
                      class="
                        add-option__wrapper add-option__wrapper--styles02
                        flex flex--center
                      "
                      :class="{'is-active': option.show}"
                      style="display: flex"
                    >
                      <input
                        type="text"
                        class="
                          form-edit__input form-edit__input--shorter
                          option
                        "
                        name="option"
                        v-model="option.option_content"
                        placeholder="(例)オプションを入れてください"
                      />
                      <div class="form_part_unit form_part_unit--styles02">
                        <input
                          type="number"
                          name="price"
                          v-model="option.additional_fee"
                          placeholder="（例）1800"
                          class="price"
                        />
                        <span class="form_part_unit_label">円</span>
                      </div>
                      <div class="tableform_select">
                        <select class="hour" v-model="option.unit">
                          <option :value="0">1時間あたり</option>
                          <option :value="1">1回あたり</option>
                        </select>
                      </div>
                      <div class="btn_style_01" @click="addOption()">保存</div>
                    </div>
                  </div>
                  <div class="add-option__item" v-for="(content,index) in options" :key="index">
                    <div class="flex" style="padding-top: 21px;">
                      <p class="add-option__result-txt">
                        <span id="option">{{content.option_content}}</span><span id="price">{{content.additional_fee}}</span>円/<span id="hour-other">{{content.unit == 0 ? '1時間あたり' : '1回あたり'}}</span>
                      </p>
                      <div class="btn_area">
                        <div class="btn_style_02" @click="editOption(index)">編集</div>
                        <div class="btn_style_03" @click="options.splice(index,1)">削除</div>
                      </div>
                    </div>
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
              <tr class="form-edit__status">
                <td class="looksort_table_info">受け入れ条件</td>
                <td colspan="2">
                  <textarea
                    name="memo"
                    rows="2"
                    cols="40"
                    class="form_part_txt form-edit__textarea"
                    placeholder="受け入れ条件"
                    v-model="supports.acceptance_condition"
                  ></textarea>
                </td>
              </tr>
              <tr class="form-edit__status has-card">
                <td class="looksort_table_info">対応可能サービス</td>
                <td>
                  <div class="box-selectgroup">
                    <div class="box-selectgroup__item form-narrow">
                      <span class="form-narrow__name">料理</span>
                      <ul class="form-narrow__check">
                        <li class="form-narrow__check-item" v-for="cooking in cookingOptions" :key="cooking.value">
                          <div class="pure-input">
                            <input
                              :id="'radio'+cooking.value"
                              name="radio"
                              type="checkbox"
                              class="radio"
                              v-model="checkedService"
                              :value="cooking.value"
                            />
                            <label :for="'radio'+cooking.value">{{cooking.label}}</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="box-selectgroup__item form-narrow">
                      <span class="form-narrow__name">掃除・洗濯</span>
                      <ul class="form-narrow__check">
                        <li class="form-narrow__check-item" v-for="cleaning in cleaningOptions" :key="cleaning.value">
                          <div class="pure-input">
                            <input
                              :id="'radio'+cleaning.value"
                              name="radio"
                              type="checkbox"
                              class="radio"
                              v-model="checkedService"
                              :value="cleaning.value"
                            />
                            <label :for="'radio'+cleaning.value">{{cleaning.label}}</label>
                          </div>
                        </li>
                      </ul>
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
                    ></button>
                    入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-edit__control">
            <button class="btn_style_04" @click.prevent="updateSetting">保存する</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import SupporterHeader from "@/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableHousekeeperEdit from "@/components/table/ExeoTableHousekeeperEdit.vue";
import SupporterHousekeeperSettingService from "@/services/admin/supporter/SupporterHousekeeperSettingService.js"

export default {
  layout: "admin",
  components: {
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTableHousekeeperEdit,
  },
  head() {
    return {
      title: 'プロフィール〈家事代行設定〉'
    }
  },
  async asyncData(context) {
    let {setting} = await SupporterHousekeeperSettingService.getSetting(context,context.params.id)
    let options = await SupporterHousekeeperSettingService.getSettingOptions(context,context.params.id)
    let supports = await SupporterHousekeeperSettingService.getSettingSupports(context,context.params.id)
    if(setting == null) {
      setting = {
        id: null,
        settings_id: 4,
        supporter_user_id: context.params.id,
        is_housework: 0,
        single_fee: null,
        regular_fee: null,
        special: null,
        service: null
      }
    }

    var checkedService = []
    if(supports == null) {
      supports = {
        settings_id: 4,
        supporter_user_id: context.params.id,
        acceptance_condition: null,
        supported_service: '',
      }
    } else {
      checkedService = supports.supported_service == '' ? [] : supports.supported_service.split(',')
    }

    await context.store.dispatch('admin/supporter/info/initData', {supporter_id : context.params.id, context:context});
    const supporter = context.store.getters['admin/supporter/info/supporter']


    return {
      housekeeping_setting : setting,
      options: options,
      supports: supports,
      checkedService: checkedService,
      user : supporter
    }
  },
  data() {
    return {
      option: {
        show: false,
        option_content: null,
        additional_fee: null,
        unit: 0
      },
      cookingOptions: [
        {value: 0, label: "作り置き"},
        {value: 1, label: "パーティー料理"},
        {value: 2, label: "お買い物"},
      ],
      cleaningOptions: [
        {value: 3, label: "リビング"},
        {value: 4, label: "寝室"},
        {value: 5, label: "子供部屋"},
        {value: 6, label: "廊下"},
        {value: 7, label: "クローゼット"},
        {value: 8, label: "風呂場"},
        {value: 9, label: "トイレ"},
        {value: 10, label: "洗面所"},
        {value: 11, label: "キッチン"},
        {value: 12, label: "庭"},
        {value: 13, label: "洗濯"},
        {value: 14, label: "アイロンがけ"},
        {value: 15, label: "収納アドバイス"},
      ]
    }
  },
  methods: {
    async updateSetting() {
      if (this.checkedService.length > 0) {
        this.supports.supported_service = this.checkedService.join(',')
      }
      await SupporterHousekeeperSettingService.updateSetting(this,this.$route.params.id, this.housekeeping_setting)
      await SupporterHousekeeperSettingService.updateAllSettingOptions(this,this.$route.params.id, this.options)
      if(this.supports.id) {
        await SupporterHousekeeperSettingService.updateSettingSupports(this,this.$route.params.id, this.supports)
      } else {
        await SupporterHousekeeperSettingService.createSettingSupports(this,this.$route.params.id, this.supports)
      }
      this.$router.push({
        name: 'admin-supporter-id-housekeeper',
        params: {
          message: '保存しました'
        },
      })
    },
    addOption() {
      if(this.option.option_content == null || this.option.additional_fee == null) return;
      var data = {
        settings_id: 4,
        subject_type: 0,
        option_content: this.option.option_content,
        additional_fee: this.option.additional_fee,
        unit: this.option.unit,
      };
      this.option.show = false
      this.options.push(data)
    },
    editOption(index) {
      this.option.show = true
      this.option.option_content = this.options[index].option_content
      this.option.additional_fee = this.options[index].additional_fee
      this.option.unit = this.options[index].unit
      this.options.splice(index,1)
    },
  }
};
</script>

<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>シッター設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>プロフィール〈シッター設定〉</span></h1>
    <SupporterHeader :user="user" :isEditing="true"/>
    <div class="col2_block f-ai-start">
      <ExeoSupporterNavigationWindow />
      <div class="col2_block_main">
        <form action="" class="form-edit supportmanagement-form">
          <exeo-table-sitter-setting-edit
            v-model="setting"
          />
          <table
            class="
              table_style_02 table_style_02--style5 table_style_02--no-striped
              form-edit__table form-edit__table--styles02 form-edit__add-option
              looksort_table--small
            "
            :class="[setting.is_supporter ? 'table' : 'table-hide']"
          >
            <thead>
              <tr>
                <th>オプション設定</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="form-edit__status" id="child">
                <td class="looksort_table--small_info">保育人数</td>
                <td colspan="2">
                  <div class="add-option">
                    <div class="form_part_add_option" @click="option.number.show = true">
                      オプションを追加する
                    </div>
                  </div>
                  <div class="add-option__item" v-if="option.number.show">
                    <div class="add-option__wrapper flex flex--center" :class="{'is-active': option.number.show}" style="display:flex !important">
                      <div class="form_part_unit form_part_unit--styles02">
                        <input type="number" name="qty" v-model="option.number.option_content" placeholder="（例）1" class="qty"/>
                        <span class="form_part_unit_label">人</span>
                      </div>
                      <span>預かる場合</span>
                      <div class="form_part_unit">
                        <input type="number" name="price" v-model="option.number.additional_fee" placeholder="（例）1800" class="price"/>
                        <span class="form_part_unit_label">円／1時間あたり</span>
                      </div>
                      <button type="button" class="btn_style_01" @click="addOption(0)">保存</button>
                    </div>
                  </div>
                  <div class="add-option__item" v-for="(option,index) in options.filter(item => item['subject_type'] === 0)" :key="index">
                    <div style="padding-top: 21px; display:flex">
                      <p class="add-option__result-txt">
                          <span id="qty">{{option.option_content}}</span>人預かる場合　+<span id="price">{{option.additional_fee}}</span>円/1時間あたり
                        </p>
                        <div class="btn_area">
                          <div class="btn_style_02" @click="editOption(index,0)">編集</div>
                          <div class="btn_style_03" style="margin-left: 15px;" @click="deleteOption(index,0)">削除</div>
                        </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="form-edit__status" id="hour_day">
                <td class="looksort_table--small_info">保育時間帯</td>
                <td colspan="2">
                  <div class="add-option">
                    <div class="form_part_add_option" @click="option.time.show = true">
                      オプションを追加する
                    </div>
                  </div>
                  <div class="add-option__item" v-if="option.time.show">
                    <div class="add-option__wrapper flex flex--center" :class="{'is-active': option.time.show}" style="display:flex !important">
                      <div class="flex flex--center">
                        <div class="tableform_select form-edit__select--shorter">
                          <select class="hour-to" v-model="option.time.content_start">
                            <option v-for="time in TIME_OPTIONS" :key="time.value" :value="time.value">{{time.label}}</option>
                          </select>
                        </div>
                        <span class="form-edit__icn-between">〜</span>
                        <div
                          class="tableform_select form-edit__select--shorter"
                        >
                          <select class="hour-to" v-model="option.time.content_end">
                            <option v-for="time in TIME_OPTIONS" :key="time.value" :value="time.value">{{time.label}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="form_part_unit">
                        <input
                          type="number"
                          name="price"
                          placeholder="（例）1800"
                          class="price"
                          v-model="option.time.additional_fee"
                        />
                        <span class="form_part_unit_label"
                          >円／1時間あたり</span
                        >
                      </div>
                      <button class="btn_style_01" @click="addOption(2)">保存</button>
                    </div>
                  </div>
                  <div class="add-option__item" v-for="(option,index) in options.filter(item => item['subject_type'] === 2)" :key="index">
                    <div style="padding-top: 21px; display:flex">
                      <p class="add-option__result-txt">
                        <span id="hour-from">{{option.option_content.split(',')[0]}}</span>時〜<span id="hour-to">{{option.option_content.split(',')[1]}}</span>時は+<span id="price">{{option.additional_fee}}</span>円/1時間あたり
                      </p>
                      <div class="btn_area">
                        <button class="btn_style_02" @click="editOption(index,2)">編集</button>
                        <button class="btn_style_03" style="margin-left: 15px;" @click="deleteOption(index,2)">削除</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="form-edit__status" id="other">
                <td class="looksort_table--small_info">その他の設定</td>
                <td colspan="2">
                  <div class="add-option">
                    <div class="form_part_add_option" @click="option.other.show = true">
                      オプションを追加する
                    </div>
                  </div>
                  <div class="add-option__item" v-if="option.other.show">
                    <div class="add-option__wrapper add-option__wrapper--styles02 flex flex--center" :class="{'is-active': option.other.show}" style="display:flex !important">
                      <input
                        type="text"
                        class="form-edit__input form-edit__input--shorter option"
                        name="option"
                        placeholder="(例)オプションを入れてください"
                        v-model="option.other.option_content"
                      />
                      <div class="form_part_unit form_part_unit--styles02">
                        <input
                          type="number"
                          name="price"
                          v-model="option.other.additional_fee"
                          placeholder="（例）1800"
                          class="price"
                        />
                        <span class="form_part_unit_label">円</span>
                      </div>
                      <div class="tableform_select">
                        <select class="hour" v-model="option.other.unit">
                          <option :value="0">1時間あたり</option>
                          <option :value="1">1回あたり</option>
                        </select>
                      </div>
                      <button class="btn_style_01" @click="addOption(3)">保存</button>
                    </div>
                  </div>
                  <div class="add-option__item" v-for="(option,index) in options.filter(item => item['subject_type'] === 3)" :key="index">
                    <div style="padding-top: 21px; display:flex">
                      <p class="add-option__result-txt">
                        <span id="option">{{option.option_content}}  </span><span id="price">{{option.additional_fee}}</span>円/<span id="hour-other">{{option.unit == 0 ? '1時間あたり' : '1回あたり'}}</span>
                      </p>
                      <div class="btn_area">
                        <button class="btn_style_02" @click="editOption(index,3)">編集</button>
                        <button class="btn_style_03" style="margin-left: 15px;" @click="deleteOption(index,3)">削除</button>
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
              <tr>
                <td class="looksort_table--small_info">お子様の撮影対応</td>
                <td colspan="2">
                  <div class="radio-group form-edit__radio">
                    <div class="pure-input pure-input--styles02">
                      <input
                        type="radio"
                        name="photo"
                        :value="1"
                        v-model="supports.shooting_support"
                        id="radio01"
                      />
                      <label for="radio01">撮影する</label>
                    </div>
                    <div class="pure-input pure-input--styles02">
                      <input
                        type="radio"
                        name="photo"
                        :value="0"
                        v-model="supports.shooting_support"
                        id="radio02"
                      />
                      <label for="radio02">撮影しない</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="form-edit__status has-card">
                <td class="looksort_table--small_info">受け入れ条件</td>
                <td>
                  <textarea
                    name="memo"
                    rows="2"
                    cols="40"
                    class="form_part_txt form-edit__textarea"
                    placeholder="受け入れ条件"
                    v-model="supports.acceptance_condition"
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
                    <button class="form-edit__card-close js-close-tooltip"></button>
                    (例)<br>
                    短時間から長時間まで柔軟に対応します。<br>
                    1歳からのお子さんをサポートいたします。<br>
                    最低時間は1時間からでお願いいたします。<br>
                    当日サポート予約もできる限り対応させて頂きます。<br>
                    アレルギー体質のため、ペットお飼いの場合お申し付けお願いいたします。場合によって引き受けお断りすることございますのでご了承ください。<br><br>

                    (例)<br>
                    より多くのリクエストにお応えできるよう、サポーター自宅から1時間以内の方を優先でお引き受けしております。<br><br>

                    (例)<br>
                    0歳6ヶ月から5歳までのお子さんのシッターをお引き受けしております。<br>
                    ご自宅以外でのサポートの場合は事前にご連絡をお願いします。<br>
                    基本は自家用車で、ご利用料金に交通費をプラスして頂戴いたします。<br>
                    駐車場に関して、有料駐車場使用の場合は、利用時間分を頂戴いたします。
                  </div>
                </td>
              </tr>
              <tr class="form-edit__status">
                <td class="looksort_table--small_info" rowspan="5">
                  対応可能サービス
                </td>
                <td colspan="2">
                  <div class="flex flex--center form-edit__service">
                    <span class="form-edit__service-title"
                      >送迎サポート（送迎のみ）</span
                    >
                    <div class="radio-group form-edit__radio">
                      <div class="pure-input pure-input--styles02">
                        <input
                          type="radio"
                          name="pickup01"
                          :value="1"
                          v-model="supports.transportation_support"
                          id="radio015"
                        />
                        <label for="radio015">対応する</label>
                      </div>
                      <div class="pure-input pure-input--styles02">
                        <input
                          type="radio"
                          name="pickup01"
                          :value="0"
                          v-model="supports.transportation_support"
                          id="radio025"
                        />
                        <label for="radio025">対応しない</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="flex flex--center form-edit__service">
                    <span class="form-edit__service-title"
                      >早朝対応（6-9時）</span
                    >
                    <div class="flex flex--center">
                      <div class="tableform_select form-edit__select--shorter">
                        <select v-model="supports.early_response_lower_limit">
                          <option :value="null">– –</option>
                          <option :value="6">6時</option>
                          <option :value="7">7時</option>
                          <option :value="8">8時</option>
                        </select>
                      </div>
                      <span class="form-edit__icn-between">〜</span>
                      <div class="tableform_select form-edit__select--longer">
                        <select v-model="supports.early_response_upper_limit">
                          <option :value="null">– –</option>
                          <option :value="7">7時</option>
                          <option :value="8">8時</option>
                          <option :value="9">9時</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="flex flex--center form-edit__service">
                    <span class="form-edit__service-title"
                      >夜間対応（20-24時）</span
                    >
                    <div class="flex flex--center">
                      <div class="tableform_select form-edit__select--shorter">
                        <select v-model="supports.nighttime_lower_limit">
                          <option :value="null">– –</option>
                          <option :value="20">20時</option>
                          <option :value="21">21時</option>
                          <option :value="22">22時</option>
                          <option :value="23">23時</option>
                        </select>
                      </div>
                      <span class="form-edit__icn-between">〜</span>
                      <div class="tableform_select form-edit__select--longer">
                        <select v-model="supports.nighttime_upper_limit">
                          <option :value="null">– –</option>
                          <option :value="21">21時</option>
                          <option :value="22">22時</option>
                          <option :value="23">23時</option>
                          <option :value="24">24時</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="flex flex--center form-edit__service">
                    <span class="form-edit__service-title"
                      >お泊り保育（0時以降）</span
                    >
                    <div class="flex flex--center">
                      <div class="tableform_select form-edit__select--shorter">
                        <select v-model="supports.overnight_care_lower_limit">
                          <option :value="null">– –</option>
                          <option :value="24">0時</option>
                          <option :value="1">1時</option>
                          <option :value="2">2時</option>
                          <option :value="3">3時</option>
                          <option :value="4">4時</option>
                          <option :value="5">5時</option>
                        </select>
                      </div>
                      <span class="form-edit__icn-between">〜</span>
                      <div class="tableform_select form-edit__select--longer">
                        <select v-model="supports.overnight_care_upper_limit">
                          <option :value="null">– –</option>
                          <option :value="1">1時</option>
                          <option :value="2">2時</option>
                          <option :value="3">3時</option>
                          <option :value="4">4時</option>
                          <option :value="5">5時</option>
                          <option :value="6">6時</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="flex flex--center form-edit__service">
                    <span class="form-edit__service-title"
                      >外国籍ユーザー対応可能</span
                    >
                    <div class="radio-group form-edit__radio">
                      <div class="pure-input pure-input--styles02">
                        <input
                          type="radio"
                          name="pickup02"
                          :value="1"
                          v-model="supports.is_foreign_user_support"
                          id="radio011"
                        />
                        <label for="radio011">対応する</label>
                      </div>
                      <div class="pure-input pure-input--styles02">
                        <input
                          type="radio"
                          name="pickup02"
                          :value="1"
                          v-model="supports.is_foreign_user_support"
                          id="radio021"
                        />
                        <label for="radio021">対応しない</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="looksort_table--small_info">
                  障がい児対応 <span class="form-edit__label">管理者</span>
                </td>
                <td colspan="2">
                  <div class="flex flex--center form-edit__service">
                    <div class="radio-group form-edit__radio">
                      <div class="pure-input pure-input--styles02">
                        <input
                          type="radio"
                          name="approval"
                          :value="1"
                          v-model="supports.is_handicapped_children_approval"
                          id="radio013"
                          @input="supports.is_handicapped_children_support = 1"
                        />
                        <label for="radio013">引受可能(申請受理済み)</label>
                      </div>
                      <div class="pure-input pure-input--styles02">
                        <input
                          type="radio"
                          name="approval"
                          :value="0"
                          v-model="supports.is_handicapped_children_approval"
                          id="radio023"
                        />
                        <label for="radio023">引受不可(申請未受理)</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-show="supports.is_handicapped_children_approval">
                <td class="looksort_table--small_info"></td>
                <td colspan="2">
                  <div class="flex flex--center form-edit__service">
                    <div class="radio-group form-edit__radio">
                      <div class="pure-input pure-input--styles02">
                        <input
                          type="radio"
                          name="child"
                          :value="1"
                          v-model="supports.is_handicapped_children_support"
                          id="radio014"
                        />
                        <label for="radio014">対応する</label>
                      </div>
                      <div class="pure-input pure-input--styles02">
                        <input
                          type="radio"
                          name="child"
                          :value="0"
                          v-model="supports.is_handicapped_children_support"
                          id="radio024"
                        />
                        <label for="radio024">対応しない</label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="looksort_table--small_info">レッスン対応</td>
                <td colspan="2">
                  <ul class="form-narrow__check">
                    <li class="form-narrow__check-item">
                      <div class="pure-input">
                        <input
                          id="radio1"
                          name="radio"
                          type="checkbox"
                          class="radio"
                          :checked="supports.lesson_support_bitflag & LESSON.ENGLISH"
                          :value="LESSON.ENGLISH"
                          @change="supports.lesson_support_bitflag ^= LESSON.ENGLISH"
                        />
                        <label for="radio1">英語レッスン</label>
                      </div>
                    </li>
                    <li class="form-narrow__check-item">
                      <div class="pure-input">
                        <input
                          id="radio2"
                          name="radio"
                          type="checkbox"
                          class="radio"
                          :checked="supports.lesson_support_bitflag & LESSON.MUSIC"
                          :value="LESSON.MUSIC"
                          @change="supports.lesson_support_bitflag ^= LESSON.MUSIC"
                        />
                        <label for="radio2">音楽レッスン</label>
                      </div>
                    </li>
                    <li class="form-narrow__check-item">
                      <div class="pure-input">
                        <input
                          id="radio3"
                          name="radio"
                          type="checkbox"
                          class="radio"
                          :checked="supports.lesson_support_bitflag & LESSON.SPORTS"
                          :value="LESSON.SPORTS"
                          @change="supports.lesson_support_bitflag ^= LESSON.SPORTS"
                        />
                        <label for="radio3">スポーツレッスン</label>
                      </div>
                    </li>
                    <li class="form-narrow__check-item">
                      <div class="pure-input">
                        <input
                          id="radio4"
                          name="radio"
                          type="checkbox"
                          class="radio"
                          :checked="supports.lesson_support_bitflag & LESSON.DRAWING"
                          :value="LESSON.DRAWING"
                          @change="supports.lesson_support_bitflag ^= LESSON.DRAWING"
                        />
                        <label for="radio4">絵・工作レッスン</label>
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
              <!-- <tr>
                <td class="looksort_table--small_info">
                  内閣府割引券対象
                  <span class="form-edit__label">管理者</span>
                </td>
                <td colspan="2">
                  <div class="radio-group form-edit__radio">
                    <div class="pure-input pure-input--styles02">
                      <input
                        type="radio"
                        name="notaccept"
                        value="対象者"
                        id="radio051"
                        checked="checked"
                      />
                      <label for="radio051">対象者</label>
                    </div>
                    <div class="pure-input pure-input--styles02">
                      <input
                        type="radio"
                        name="notaccept"
                        value="なし"
                        id="radio052"
                      />
                      <label for="radio052">なし</label>
                    </div>
                  </div>
                </td>
              </tr> -->
            </tbody>
            <thead>
              <tr>
                <th>経験</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="looksort_table--small_info">子育て経験</td>
                <td colspan="2">
                  <div class="radio-group form-edit__radio">
                    <div class="pure-input pure-input--styles02">
                      <input
                        type="radio"
                        name="exp"
                        :value="1"
                        id="radio053"
                        v-model="experience.parenting_experience"
                      />
                      <label for="radio053">あり</label>
                    </div>
                    <div class="pure-input pure-input--styles02">
                      <input
                        type="radio"
                        name="exp"
                        :value="0"
                        id="radio054"
                        v-model="experience.parenting_experience"
                      />
                      <label for="radio054">なし</label>
                    </div>
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
import ExeoTableSitterSettingEdit from "@/components/table/ExeoTableSitterSettingEdit.vue";
import SitterSettingService from "@/services/admin/supporter/SitterSettingService.js"

export default {
  layout: "admin",
  components: {
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTableSitterSettingEdit,
  },
  head() {
    return {
      title: 'プロフィール〈シッター設定〉'
    }
  },
  async asyncData(context) {
    let { setting } = await SitterSettingService.getSetting(context, context.params.id)
    const options = await SitterSettingService.getSettingOptions(context, context.params.id)
    let supports = await SitterSettingService.getSettingSupports(context, context.params.id)
    let experience = await SitterSettingService.getSettingExperience(context, context.params.id)

    if(setting == null) {
      setting = {
        id: null,
        settings_id: 1,
        supporter_user_id: parseInt(context.params.id),
        is_supporter: false,
        single_fee: null,
        regular_fee: null,
        special: null,
        service: null,
        potential_entrant: null,
        minimum_age_limit: 0,
        maximum_age_limit: 0,
      }
    }

    if(supports == null) {
      supports = {
        supporter_user_id: parseInt(context.params.id),
        settings_id: 1,
        shooting_support: 0,
        acceptance_condition: null,
        transportation_support: 0,
        early_response_lower_limit: null,
        early_response_upper_limit: null,
        nighttime_lower_limit: null,
        nighttime_upper_limit: null,
        overnight_care_lower_limit: null,
        overnight_care_upper_limit: null,
        is_foreign_user_support: 0,
        is_sick_children_support: 0,
        is_handicapped_children_approval: 0,
        is_handicapped_children_support: 0,
        lesson_support_bitflag: 0,
        is_cabinet_office_discount_coupon: 0,
      }
    }
    if(experience == null) {
      experience = {parenting_experience: 0}
    }

    await context.store.dispatch('admin/supporter/info/initData', {supporter_id : context.params.id, context:context});
    const supporter = context.store.getters['admin/supporter/info/supporter']

    return {
      setting: setting,
      options: options,
      supports: supports,
      experience: experience,
      user: supporter
    }
  },
  data() {
    return {
      option: {
        number: {
          option_content: null,
          additional_fee: null,
          show: false,
        },
        time: {
          content_start: null,
          content_end: null,
          additional_fee: null,
          show: false,
        },
        other: {
          option_content: null,
          additional_fee: null,
          unit: 0,
          show: false,
        },
      },
      TIME_OPTIONS: [
        {value: 1, label: "1時"},
        {value: 2, label: "2時"},
        {value: 3, label: "3時"},
        {value: 4, label: "4時"},
        {value: 5, label: "5時"},
        {value: 6, label: "6時"},
        {value: 7, label: "7時"},
        {value: 8, label: "8時"},
        {value: 9, label: "9時"},
        {value: 10, label: "10時"},
        {value: 11, label: "11時"},
        {value: 12, label: "12時"},
        {value: 13, label: "13時"},
        {value: 14, label: "14時"},
        {value: 15, label: "15時"},
        {value: 16, label: "16時"},
        {value: 17, label: "17時"},
        {value: 18, label: "18時"},
        {value: 19, label: "19時"},
        {value: 20, label: "20時"},
        {value: 21, label: "21時"},
        {value: 22, label: "22時"},
        {value: 23, label: "23時"},
        {value: 0, label: "24時"}, //0時? 24時?
      ],
      LESSON: {
        ENGLISH: 1<<0,
        MUSIC: 1<<1,
        SPORTS: 1<<2,
        DRAWING: 1<<3,
      }
    }
  },
  methods: {
    addOption(type) {
      var data = {
        settings_id: 1,
        subject_type: type,
      };
      switch(type) {
        case 0: //人数
          if(this.option.number.option_content == null || this.option.number.additional_fee == null) break;
          data.option_content = this.option.number.option_content,
          data.additional_fee = this.option.number.additional_fee,
          data.unit = 0
          this.option.number.show = false
          break;
        case 2:
          if(this.option.time.content_start == null || this.option.time.content_end == null || this.option.time.additional_fee == null) break;
          data.option_content = this.option.time.content_start + ',' + this.option.time.content_end,
          data.additional_fee = this.option.time.additional_fee,
          data.unit = 0
          this.option.time.show = false
          break;
        case 3:
          if(this.option.other.option_content == null || this.option.other.additional_fee == null) break;
          data.option_content = this.option.other.option_content,
          data.additional_fee = this.option.other.additional_fee,
          data.unit = this.option.other.unit
          this.option.other.show = false
          break;
      }
      this.options.push(data);
    },
    editOption(index, type) {
      switch(type) {
        case 0:
          this.option.number.show = true
          this.option.number.option_content = this.options.filter(item => item['subject_type'] === 0)[index].option_content
          this.option.number.additional_fee = this.options.filter(item => item['subject_type'] === 0)[index].additional_fee
          this.options.splice(this.options.indexOf(this.options.filter(item => item['subject_type'] === 0)[index]),1)
          break;
        case 2:
          this.option.time.show = true
          this.option.time.content_start = this.options.filter(item => item['subject_type'] === 2)[index].option_content.split(',')[0]
          this.option.time.content_end = this.options.filter(item => item['subject_type'] === 2)[index].option_content.split(',')[1]
          this.option.time.additional_fee = this.options.filter(item => item['subject_type'] === 2)[index].additional_fee
          this.options.splice(this.options.indexOf(this.options.filter(item => item['subject_type'] === 2)[index]),1)
          break;
        case 3:
          this.option.other.show = true
          this.option.other.option_content = this.options.filter(item => item['subject_type'] === 3)[index].option_content
          this.option.other.additional_fee = this.options.filter(item => item['subject_type'] === 3)[index].additional_fee
          this.option.other.unit = this.options.filter(item => item['subject_type'] === 3)[index].unit
          this.options.splice(this.options.indexOf(this.options.filter(item => item['subject_type'] === 3)[index]),1)
          break;
      }
    },
    deleteOption(index, type) {
      this.options.splice(this.options.indexOf(this.options.filter(item => item['subject_type'] === type)[index]),1)
    },
    async updateSetting() {
      await SitterSettingService.updateSetting(this, this.$route.params.id, this.setting)
      await SitterSettingService.updateAllSettingOptions(this, this.$route.params.id, this.options)
      if(this.supports.id) {
        await SitterSettingService.updateSettingSupports(this, this.$route.params.id, this.supports)
      } else {
        await SitterSettingService.createSettingSupports(this, this.$route.params.id, this.supports)
      }
      if(this.experience.id) {
        await SitterSettingService.updateSettingExperience(this, this.$route.params.id, this.experience)
      } else {
        await SitterSettingService.createSettingExperience(this, this.$route.params.id, this.experience)
      }
      this.$router.push({
        name: 'admin-supporter-id-sitter',
        params: {
          message: '保存しました'
        },
      })
    }
  },
};
</script>

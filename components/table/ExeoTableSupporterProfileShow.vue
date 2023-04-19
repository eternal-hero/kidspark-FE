<template>
  <table class="table_style_02 table_style_02--style5 looksort_table--small">
    <thead>
      <tr>
        <th>共通プロフィール</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="has-card">
        <td class="looksort_table_info">タイトル</td>
        <td>{{ supporterProfile.title }}</td>
        <td class="looksort_table_note">
          <div class="statuschips" @click="showingTitleTooltip = true"><span>入力例</span></div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">
          <div class="form-edit__card" :style="{ display: (showingTitleTooltip ? 'block' : 'none') }">
            <button class="form-edit__card-close js-close-tooltip" @click="showingTitleTooltip = false"></button>
            入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
          </div>
        </td>
      </tr>
      <tr class="has-card">
        <td class="looksort_table_info">自己紹介文</td>
        <td>
          <span style="white-space: pre-line" v-html="supporterProfile.self_introduction"></span>
        </td>
        <td class="looksort_table_note">
          <div class="statuschips js-tooltip-02" @click="showingSelfIntroTooltip = true"><span>入力例</span></div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">
          <div class="form-edit__card" :style="{ display: (showingSelfIntroTooltip ? 'block' : 'none') }">
            <button class="form-edit__card-close js-close-tooltip" @click="showingSelfIntroTooltip = false"></button>
            入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
          </div>
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">最寄り駅</td>
        <td colspan="2">{{ supporterProfile.near_line }} 線 {{ supporterProfile.near_station }}駅</td>
      </tr>
      <tr>
        <td class="looksort_table_info">最寄り駅までの交通手段</td>
        <td colspan="2">{{
          $TRANSPORTATION.find(x => supporterProfile.means == x.value) ? $TRANSPORTATION.find(x =>
            supporterProfile.means == x.value).label : ''
        }}
        </td>
      </tr>
      <tr>
        <td class="looksort_table_info">最寄り駅までの所要時間</td>
        <td colspan="2">{{ supporterProfile.travel_times }}分</td>
      </tr>
      <tr>
        <td class="looksort_table_info">最寄り駅の公開</td>
        <td colspan="2">{{ supporterProfile.is_publish ? 'あり' : '無し' }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">予約前後の空き時間</td>
        <td colspan="2">{{ supporterProfile.time_between_appointment }}時間</td>
      </tr>
      <tr>
        <td class="looksort_table_info">最低依頼時間目安</td>
        <td colspan="2">{{ supporterProfile.minimum_request_time }}時間</td>
      </tr>
      <tr>
        <td class="looksort_table_info">返答までの時間</td>
        <td colspan="2">{{ supporterProfile.reply_time }}時間</td>
      </tr>
      <tr>
        <td class="looksort_table_info">外国語対応</td>
        <td colspan="2">{{ supporterProfile.is_foreign_language ? 'あり' : '無し' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: "ExeoTableSupporterProfileShow",
  props: {
    supporterProfile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showingTitleTooltip: false,
      showingSelfIntroTooltip: false,
    }
  },
  methods: {},
  computed: {
    nearestStation() {
      return `${this.supporterProfile.near_line}　${this.supporterProfile.near_station}`;
    }
  }
}
</script>

<style scoped>

</style>
<!--SupporterProfileService.getSupporterProfile(this,id)-->

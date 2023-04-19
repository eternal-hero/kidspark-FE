<template>
  <div class="col2_block_main no-flex">
    <div class="tableblock_scroll">
      <table class="table_style_02 table_style_02--style5 table_style_02--no-striped">
        <thead>
        <tr>
          <th>共通プロフィール</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr class="has-card">
          <td class="looksort_table_info">自己紹介文</td>
          <td> {{ guardian_profile.self_introduction }}</td>
          <td class="looksort_table_note">
            <div class="statuschips js-tooltip-02"><span>入力例</span></div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2">
            <div class="form-edit__card">
              <button class="form-edit__card-close js-close-tooltip"></button>
              ２００５年からは子育てをしながら、ベビーサイン講師として活動をしていました。　アロマセラピストとしても、赤ちゃんや幼児、小学生へのタッチケアを行なっています。　ベビーサインやタッチケアも発達障害を持つお子様にもそうでないお子様にも、とても大切なことだということが近年の研究結果で分かりつつある今、どんな子供にも一人一人対応出来るように学びは続いています。
            </div>
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">最寄り駅</td>
          <td colspan="2">  {{ guardian_profile.near_line }} 線 {{ guardian_profile.near_station }}駅</td>
        </tr>
        <tr>
          <td class="looksort_table_info">最寄り駅までの交通手段</td>
          <td colspan="2">{{ $TRANSPORTATION.find(x => guardian_profile.means === x.value) ? $TRANSPORTATION.find(x => guardian_profile.means === x.value).label : '' }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">最寄り駅までの所要時間</td>
          <td colspan="2">{{ guardian_profile.travel_time }}分</td>
        </tr>
        <tr>
          <td class="looksort_table_info">最寄り駅の公開</td>
          <td colspan="2">{{ guardian_profile.is_publish === 0 ? "公開しない" : "公開する" }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">ご家庭のルール</td>
          <td colspan="2">{{ guardian_profile.rule }}</td>
        </tr>
        </tbody>
        <thead>
        <tr>
          <th colspan="3">新型コロナウイルスワクチン接種状況</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="looksort_table_info">公開</td>
          <td colspan="2"> {{ inoculation.is_publish === 0 ? "公開しない" : "公開する" }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">接種回数</td>
          <td colspan="2"> {{ inoculation.inoculation_times }}回</td>
        </tr>
        <tr>
          <td class="looksort_table_info">最新接種日付</td>
          <td colspan="2"> {{ inoculation.inoculation_on }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableGuardianProfileShow",
  components: {

  },
  props: {
    inoculation: {
      type: Object,
      required: true
    },
    guardian_profile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
     
    }
  },
}
</script>

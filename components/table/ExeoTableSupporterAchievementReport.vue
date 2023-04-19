<template>
  <div class="achievement-report__wp">
    <dl v-for="report in listReport" class="achievement-report__item">
      <dt class="achievement-report__label">{{ report.label }}
        <div class="statuschips tooltip"><span></span><p class="tooltip__txt">{{ report.text }}</p></div>
      </dt>
      <dd v-if="report.number != null" class="achievement-report__ct">{{ report.number }}</dd>
      <dd v-else class="achievement-report__ct">ー</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterAchievementReport",
  props: {
    listReport: {
      type: Object,
      default: [
        {
          label: 'お仕事回数',
          text: '今まで受けたお仕事の回数です。キャンセルされたものは含まれません。',
          number: '33回'
        },
        {
          label: 'フォロワー数',
          text: 'あなたをお気に入りにフォローしているユーザー数です。',
          number: '30人'
        },
        {
          label: 'リピートユーザー数',
          text: '2回以上お仕事を受けたユーザー数です。',
          number: ''
        },
        {
          label: '予約成立率',
          text: 'リクエスト予約からどれだけ予約成立にしているかを示しています。',
          number: ''
        },
        {
          label: '返信率',
          text: 'ユーザーと初回のメッセージに対して24時間以内に対応しているかを示しています。',
          number: ''
        },
        {
          label: '直前キャンセル率',
          text: '約日より前の48時間以内にサポーター都合でキャンセルされたかを示しています。',
          number: ''
        }
      ]
    }
  }
}
</script>

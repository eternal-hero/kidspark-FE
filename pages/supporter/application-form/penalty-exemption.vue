<template>
  <main id="page-P051" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">申請フォーム</span>
      </div>
    </div>
    <div class="main-content">
      <div class="inner">
        <h2 class="c-ttl__01">申請フォーム</h2>
        <div class="l-content">
          <div class="l-content__body">
            <h3 class="c-ttl__02">ペナルティ免除申請</h3>
            <div class="c-caution">
              <h4 class="c-caution__title c-ttl__02 c-fc--or">ペナルティ免除申請できる依頼がありません。</h4>
              <p class="c-txt__01">サポートのキャンセル後2週間以内の依頼のみ保険申請が可能です。</p>
            </div>
            <question-box :questions="questions"></question-box>
            <div class="c-control--submit mtpc-30 mtsp-30"><a href="./P049.html" class="btn_back w155">申請一覧へもどる</a></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import QuestionBox from '@/components/block/QuestionBox.vue'

export default {
  name: 'quotion-edit',
  layout: 'supporter',
  components: { QuestionBox },
  head() {
    return {
      title: '申請フォーム'
    }
  },

  data () {
    return {
      questions: [
        {
          'name': 'ペナルティ免除について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'サポーター都合の直前キャンセルポリシー',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': '予約のキャンセルについて',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>
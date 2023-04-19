<template>
  <main id="page-P051-4" class="wrapper">
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
              <h4 class="c-caution__title c-ttl__02 c-fc--or">審査中</h4>
              <p class="c-txt__01">審査後は、ご登録のメールアドレスあてに審査結果のご案内をお送りいたしますので、メールの到着まで今しばらくお待ちくださいますようお願いいたします。</p>
            </div>
            <div class="job-infor__list job-infor__list mbpc-32 mbsp-32">
              <div class="job-infor__list-item job-infor__list-item--wrap">
                <div class="job-infor__list-ttl job-infor__list-ttl--190">関連依頼</div>
                <div class="job-infor__list-desc job-infor__list-desc--190">2022年8月26日(金) 10:00-16:00 木村　花子</div>
              </div>
              <div class="job-infor__list-item job-infor__list-item--wrap">
                <div class="job-infor__list-ttl job-infor__list-ttl--190">キャンセル理由</div>
                <div class="job-infor__list-desc job-infor__list-desc--190">テキストテキスト</div>
              </div>
              <div class="job-infor__list-item job-infor__list-item--wrap">
                <div class="job-infor__list-ttl job-infor__list-ttl--190">詳細状況</div>
                <div class="job-infor__list-desc job-infor__list-desc--190">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
              </div>
            </div>
            <div class="quote-list__item">
              <h3 class="quote-list__ttl">証明書の提出</h3>
              <list-img :items="images"></list-img>
            </div>
            <ul class="request-note">
              <li>・申請受理まで30分から最大で2営業日ほどかかる場合がございます。</li>
              <li>・申請が受理されるとメールにて通知され、自動的に売上金へ反映されます。</li>
            </ul>
            <div class="c-control--submit mtpc-30 mtsp-30"><a href="./P049.html" class="btn_back w155">申請一覧へもどる</a></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import QuestionBox from '@/components/block/QuestionBox.vue'
import ListFile from '@/components/block/ListFile.vue'
import ListImg from '@/components/block/ListImg.vue'
import ExeoSelect from "@/components/action/ExeoSelect";

export default {
  name: 'quotion-edit',
  layout: 'supporter',
  components: { QuestionBox, ExeoSelect, ListFile, ListImg },
  head() {
    return {
      title: '申請フォーム'
    }
  },
  data () {
    return {
      images: [
        {image: 'img01.jpg'},
        {image: 'img02.jpg', width: 97}
      ],
      relateRequire: '',
      relateRequires: [
        {
          value: '',
          label: '選択してください',
        },
        {
          value: '2022年8月26日(金) 10:00-16:00  木村　花子',
          label: '2022年8月26日(金) 10:00-16:00  木村　花子',
        },
        {
          value: '2022年8月28日(日) 14:00-17:00 佐藤　七海',
          label: '2022年8月28日(日) 14:00-17:00 佐藤　七海',
        },
      ],
      cancelReason: '',
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
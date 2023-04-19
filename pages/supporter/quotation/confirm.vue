<template>
  <main id="page-P011-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(単発)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(単発)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">お見積もりを確認する</h2>
            <hr class="hr">
            <supporter-job-money2 label="事前見積もり金額"></supporter-job-money2>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <NuxtLink to="/supporter/estimate/confirm" class="btn_entry">送信する</NuxtLink>
            </div>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="1"></supporter-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import SupporterJobMoney2 from "@/components/block/SupporterJobMoney2";
import UserStatusBox from '~/components/block/UserStatusBox.vue'
import QuestionBox from '~/components/block/QuestionBox.vue'

export default {
  components: { UserStatusBox, SupporterRightMenu, SupporterJobMenu, SupporterJobMoney2, QuestionBox },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
  data() {
    return {
      questions: [
        {
          'name': 'お見積りの作成方法',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'お仕事リクエストのお断り方法について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'お仕事開始までの流れ',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        }
      ],
      user: {
        name: '木村　花子',
        avatar: '',
        address: '東京都千代田区',
        rating: 3
      },
      items: [
        {
          name: 'プロフィールを登録しましょう',
          url: '',
        },
        {
          name: '共通プロフィールを登録しましょう',
          url: '',
        },
        {
          name: '来月のスケジュールを登録してください',
          url: '',
        },
        {
          name: '来月のスケジュールを登録してください',
          url: '',
        },
        {
          name: '来月のスケジュールを登録してください',
          url: '',
        },
        {
          name: '来月のスケジュールを登録してください',
          url: '',
        }
      ],
    }
  },
}
</script>
<template>
  <main id="page-P010-2" class="wrapper">
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
            <div class="request-box">
              <h2 class="c-ttl__02">お断り内容を確認してください</h2>
            </div>
            <form action="method">
              <div class="request-form request-form--confirm">
                <div class="request-form__item">
                  <div class="request-form__ttl"> お断り理由<span>※</span>
                    <span class="disclosure --off">ユーザーに非公開</span>
                  </div>
                  <div class="request-form__ct"> 前後に他の依頼があり間に合わない為 </div>
                </div>
                <div class="request-form__item">
                  <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
                    <span class="disclosure">ユーザーに開示されます</span>
                  </div>
                  <div class="request-form__ct"> 移動距離を考えると難しい為。 </div>
                </div>
              </div>
              <div class="request-note"> お仕事リクエストのお断りは、送信後の変更、取り消しは出来かねますのでご注意ください。 </div>
              <div class="c-control--submit">
                <a href="#" class="btn_back w100">もどる</a>
                <NuxtLink to="/supporter/job-reject/accept" class="btn_entry">お断りする</NuxtLink>
              </div>
            </form>
          </div>
          <supporter-right-menu step-active="1"></supporter-right-menu>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import SupporterJobMoney from "@/components/block/SupporterJobMoney";
import UserStatusBox from '~/components/block/UserStatusBox.vue'
import QuestionBox from '~/components/block/QuestionBox.vue'

export default {
  components: { UserStatusBox, SupporterRightMenu, SupporterJobMenu, SupporterJobMoney, QuestionBox },
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
          'name': 'お仕事リクエストのお断り方法について',
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
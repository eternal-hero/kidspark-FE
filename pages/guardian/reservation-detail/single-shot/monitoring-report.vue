<template>
  <main id="page-U32-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">ご利用ありがとうございました！</h2>
              <p class="c-txt__01"> またのご利用をお待ちしております！</p>
            </div>
            <SupporterJobMenu :route-names="routeNames"></SupporterJobMenu>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="具体的な依頼内容" width="13"> 見守りレポート</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">13:00</div>
                  <div class="job-infor__list-desc">リビングで楽しそうに積み木で遊んでいる様子が見られました。
                    <div class="job-infor__list-img mtpc-10 mtsp-10">
                      <a href="@/assets/guardian/img/U032-2/img01.jpg" target="_blank"><img src="@/assets/guardian/img/U032-2/img01.jpg" alt="写真添付"></a>
                    </div>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">14:00</div>
                  <div class="job-infor__list-desc">リビングにてあやとりをしている様子が見られました。
                    <div class="job-infor__list-img mtpc-10 mtsp-10">
                      <a href="@/assets/guardian/img/U032-2/img02.jpg" target="_blank"><img src="@/assets/guardian/img/U032-2/img02.jpg" alt="写真添付"></a>
                    </div>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">14:30</div>
                  <div class="job-infor__list-desc"> リビングにて文房具を使用して創作している様子が見られました。
                    <div class="job-infor__list-imgs mtpc-10 mtsp-10">
                      <div class="job-infor__list-img">
                        <a href="@/assets/guardian/img/U032-2/img03.jpg" target="_blank"><img src="@/assets/guardian/img/U032-2/img03.jpg" alt="写真添付"></a>
                      </div>
                      <div class="job-infor__list-img">
                        <a href="@/assets/guardian/img/U032-2/img04.jpg" target="_blank"><img src="@/assets/guardian/img/U032-2/img04.jpg" alt="写真添付"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="c-txt__01 supporter">担当者：<span>○○</span></p>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="8"></GuardianRightMenu>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import QuestionBox from "@/components/block/QuestionBox";

export default {
  components: {SupporterJobMenu, QuestionBox, GuardianRightMenu},
  layout: 'guardian',
  data() {
    return {
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: 'guardian-reservation-detail-request-message'
        },
        {
          name: '依頼詳細',
          routeName: ''
        },
        {
          name: '完了レポート',
          routeName: 'guardian-reservation-detail-single-shot-overview-completion-request'
        },
        {
          name: '見守りレポート',
          routeName: 'guardian-reservation-detail-single-shot-monitoring-report'
        },
      ],
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/detail/167/',
          name: '明細書・領収書の発行方法'
        },
        {
          url: 'https://www.kids-parks.com/faq/trouble-4/205/',
          name: 'サポート中の事故・トラブル'
        }
      ],
    }
  }
}
</script>

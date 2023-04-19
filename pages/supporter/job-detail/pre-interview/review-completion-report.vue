<template>
  <main id="page-P067-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(Web事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(Web事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">完了レポートを確認して、<br class="sp">送信をクリックする</h2>
            <hr class="hr">
            <div class="job-infor">
              <h3 class="job-infor__ttl">サポート時間</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:45</div>
                </div>
              </div>
            </div>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="" width="17">最終受取金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc">900円（1200円×0.75時間）</div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 手数料 <span>（保険料・消費税込み）</span>
                    <div class="statuschips tooltip">
                      <span></span>
                      <p class="tooltip__txt">
                        手数料には保険料と消費税が含まれます。<a href='https://www.kids-parks.com/faq/commission/42/' target='_blank'>手数料についてはこちら</a>
                      </p>
                    </div>
                  </div>
                  <div class="job-money__list-desc"><span>0円</span></div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>900</span>円
                  </div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="本日のご報告" width="14">本日のご報告</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">面談内容確認</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw job-infor__list-desc--lh">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">連絡事項</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw">特になし</div>
                </div>
              </div>
            </div>
            <div class="request-note"> 面談時間や料金に関しては、ユーザー側からお支払いの前に「差し戻し」があった場合のみ修正が可能です。送信後間違いを発見した場合は、メッセージにてユーザーへ変更したい旨をお伝えし、差し戻しをおこなっていただくようにお願いしてください。 </div>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="./P018-3.html" class="btn_entry">送信する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu
              :steps="$STEP_PRE_INTERVIEW_STATUS"
              step-active="5"
            >
            </supporter-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from "@/components/block/QuestionBox";
import ExeoSelectMinute from "@/components/action/ExeoSelectMinute";
import ExeoSelectHour from "@/components/action/ExeoSelectHour";

export default {
  layout: 'supporter',
  components: {
    ExeoSelectHour,
    ExeoSelectMinute,
    QuestionBox,
    SupporterRightMenu,
  },
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
  data() {
    return {
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/report/65/',
          name: '完了レポートの書き方'
        },
        {
          url: 'https://www.kids-parks.com/faq/reward/69/',
          name: '報酬のお支払いについて'
        },
        {
          url: 'https://www.kids-parks.com/faq/trouble/71/',
          name: '保護者が予定時間より早く帰ってきた場合'
        },
        {
          url: 'https://www.kids-parks.com/faq/review/73/',
          name: 'ユーザーへのレビューについて'
        }
      ],
    };
  }
}
</script>

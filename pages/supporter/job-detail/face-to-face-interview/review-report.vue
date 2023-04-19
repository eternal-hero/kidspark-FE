<template>
  <main id="page-P076-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(対面事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(対面事前面談)</h1>
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
            <ExeoTableSupporterEstimateAmount
              basic-fee="1800"
              :list-fee="listFee"
              total="1800"
              tooltip-text="手数料には保険料と消費税が含まれます。<a href='https://www.kids-parks.com/faq/commission/42/' target='_blank'>手数料についてはこちら</a>">
            </ExeoTableSupporterEstimateAmount>
            <div class="job-infor mbsp-20">
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
            <SupporterRightMenu step-active="5"></SupporterRightMenu>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from "@/components/block/QuestionBox";
import ExeoTableSupporterEstimateAmount from "@/components/table/ExeoTableSupporterEstimateAmount";

export default {
  layout: 'supporter',
  components: {
    SupporterRightMenu,
    QuestionBox,
    ExeoTableSupporterEstimateAmount
  },
  head() {
    return {
      title: 'お仕事詳細(対面事前面談)'
    }
  },
  data () {
    return {
      questions: [
        {
          'name': '完了レポートの書き方',
          'url': '',
        },
        {
          'name': '報酬のお支払いについて',
          'url': '',
        },
        {
          'name': '保護者が予定時間より早く帰ってきた場合',
          'url': '',
        },
        {
          'name': 'ユーザーへのレビューについて',
          'url': '',
        }
      ],
      listFee: [
        {title: '交通費', cost: 300, description: '【電車】　〇〇駅⇆〇〇駅　300円（往復）'},
      ]
    }
  }
}
</script>

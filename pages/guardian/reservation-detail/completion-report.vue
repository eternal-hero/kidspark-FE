<template>
  <main id="page-U029-2" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">完了レポートが届きました！</h2>
              <p class="c-txt__01">最終支払金額、完了レポートを確認してお支払いに進んでください。内容に疑問などありましたら、サポーターにメッセージでご連絡ください。</p>
            </div>
            <SupporterJobMenu :route-names="routeNames"></SupporterJobMenu>
            <div class="job-infor">
              <h3 class="job-infor__ttl">サポート時間</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc job-infor__list-desc--pl">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc job-infor__list-desc--pl">2022年07月20日(水) 15:00</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="" width="13">本日のご報告</h3>
              <div class="job-infor__list02">
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">タイムテーブル</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw"> 13:00　サポートスタート<br> 13:00〜13:30　浴室清掃（壁、バスタブ、ドア、床）<br> 13:30〜13:50　洗面室・トイレ清掃（洗面台、洗濯機、収納棚、便器、壁、床）<br> 13:50〜14:10　キッチン清掃（食器洗い、家電、ガスレンジ、壁、シンク、床）<br> 14:10〜16:50　調理（主菜、副菜、離乳食）<br> 16:50〜17:00　最終チェック、報告、ゴミ捨て  <br>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">サポート内容<br>・報告</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw"> 本日は水回りのお掃除と夕食の調理と作りおき料理の調理のご依頼をいただきました。小さなお子様がいらっしゃるということで、重曹やクエン酸、塩などのエコな洗剤を使用させております。<br><br>浴室はスポンジとブラシと歯ブラシを使って排水口まで外せるだけ外してぬめりや汚れを除去しました。ワイパーと雑巾で水気をとり、小物は取りやすいように並べております。<br>洗面室も浴室同様に洗面台を掃除させていただき、床はホコリが溜まりやすいので掃除機をかけたあと拭き掃除しています。<br>トイレも便器と便座の裏の細かい箇所まで掃除をし、ハタキでホコリを落としてタンクやスリッパ、コンセント周りまで拭きました。 <div class="job-infor__list-imgs mtpc-10 mtsp-10">
                    <div class="job-infor__list-img">
                      <a href="@/assets/guardian/img//U029-2/img01.jpg" target="_blank"><img src="@/assets/guardian/img//U029-2/img01.jpg" alt="写真添付"></a>
                    </div>
                    <div class="job-infor__list-img">
                      <a href="@/assets/guardian/img//U029-2/img02.jpg" target="_blank"><img src="@/assets/guardian/img//U029-2/img02.jpg" alt="写真添付"></a>
                    </div>
                  </div>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">連絡事項</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw"> 特になし </div>
                </div>
              </div>
            </div>
          </div>
          <aside class="l-content__02-r">
            <SupporterRightMenu :steps="steps" :end-step="8" step-active="7" user-name="佐藤　彩"></SupporterRightMenu>
            <div class="list-btn__item">
              <span class="c-btn__02 mbsp-21"><img src="@/assets/guardian/img/common/icon-time.svg" alt="icon" width="15">残り48時間</span>
            </div>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="#" class="btn_entry">レポートを承認してお支払いへ進む</a>
              </div>
              <div class="list-btn__item">
                <button class="c-btn__04 js-modal" data-modal="M004">差し戻し</button>
              </div>
            </div>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
    <div class="modal-main" id="M004">
      <div class="modal-block">
        <span class="modal-block__close"></span>
        <h2 class="modal-block__ttl">差し戻し</h2>
        <div class="modal-ct">
          <div class="c-txt__01 modal-ct__desc"> 差し戻しの際は事前にメッセージにて<br>差し戻し理由の共有をお願いいたします。 </div>
          <div class="modal-ct__control">
            <button class="btn_entry">差し戻す</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import QuestionBox from "@/components/block/QuestionBox";
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import SupporterRightMenu from "@/components/block/SupporterRightMenu";

export default {
  layout: 'supporter',
  components: {
    QuestionBox,
    SupporterJobMenu,
    SupporterRightMenu
  },
  head() {
    return {
      title: '予約詳細（単発）'
    }
  },
  data () {
    return {
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: ''
        },
        {
          name: '依頼メッセージ',
          routeName: 'guardian-reservation-detail-request-detail'
        },
        {
          name: '完了レポート',
          routeName: 'guardian-reservation-detail-completion-report'
        }
      ],
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/report-3/208/',
          name: '完了レポートの差し戻しについて'
        },
        {
          url: 'https://www.kids-parks.com/faq/payment/195/',
          name: '支払い方法について'
        },
        {
          url: 'https://www.kids-parks.com/faq/trouble-4/205/',
          name: 'サポート中の事故・トラブル'
        }
      ],
      steps: [
        {number: '01', message: 'リクエストを作成する'},
        {number: '02', message: 'お見積もり待ち'},
        {number: '03', message: '見積もり承認・お支払い方法選択'},
        {number: '04', message: 'サポート開始待ち'},
        {number: '05', message: 'サポート中'},
        {number: '06', message: '完了レポート待ち'},
        {number: '07', message: 'レポートの承認・お支払い'},
        {number: '', message: 'ご利用ありがとうございました！'},
      ],
    }
  }
}
</script>

<style scoped>

</style>

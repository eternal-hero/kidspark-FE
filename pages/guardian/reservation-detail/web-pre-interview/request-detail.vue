<template>
  <main id="page-U037" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細(Web事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細(Web事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box mbsp-20">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">お見積もりが届きました。</h2>
              <p class="c-txt__01">お見積もりに問題なければ仮払いへお進みください。質問や変更をお願いしたい場合はメッセージにてご依頼ください。</p>
            </div>
            <SupporterJobMenu :route-names="routeNames"></SupporterJobMenu>
            <ExeoTableGuardianEstimateFee basic-fee="600" basic-fee-description="1200円×0.5時間" commission="0" total="600"></ExeoTableGuardianEstimateFee>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-note.svg" alt="基本情報" width="17"> 基本情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 15:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">依頼カテゴリー</div>
                  <div class="job-infor__list-desc">ベビーシッター</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">予約内容</div>
                  <div class="job-infor__list-desc">対面事前面談（初回必須）</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icn_gps.svg" alt="サポート場所" width="11"> サポート場所</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc">東京都千代田区<br class="sp">(以降の住所は予約が確定したら表示されます)</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄駅</div>
                  <div class="job-infor__list-desc">山手線 秋葉原駅</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄り駅までの交通手段</div>
                  <div class="job-infor__list-desc">徒歩</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄り駅までの所要時間</div>
                  <div class="job-infor__list-desc">15分</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">家までの行き方</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">保育場所の写真</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="ユーザー情報" width="17"> ユーザー情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><a href="./U006.html">木村　花子</a></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ふりがな</div>
                  <div class="job-infor__list-desc">きむら　はなこ</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">電話番号</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">緊急連絡先</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ペットの有無</div>
                  <div class="job-infor__list-desc">無し</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住居形態</div>
                  <div class="job-infor__list-desc">マンション</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">カメラ設置</div>
                  <div class="job-infor__list-desc">あり</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="ユーザー情報" width="17"> 面談するお子様情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">愛称</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">性別</div>
                  <div class="job-infor__list-desc">女の子</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">年齢</div>
                  <div class="job-infor__list-desc">3歳2ヶ月</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">アレルギー</div>
                  <div class="job-infor__list-desc">なし</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">持病</div>
                  <div class="job-infor__list-desc">なし</div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">その他/配慮事項</div>
                  <div class="job-infor__list-desc">なんでも口に入れるので注意が必要です。</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お子様のお写真</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="" width="13">面談で聞きたいことなど</h3>
              <div class="job-infor__note job-infor__note--auto">いままでの保育のご経験など聞ければ嬉しいです。</div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="" width="13"> ご家庭のルール</h3>
              <div class="job-infor__note job-infor__note--auto">昼間はテレビを見ない。</div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="ユーザー情報" width="17"> サポーター情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc">
                    <a href="./U058.html">佐藤　彩</a>
                  </div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ふりがな</div>
                  <div class="job-infor__list-desc">さとう　あや</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">電話番号</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄駅</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
              </div>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="3"></GuardianRightMenu>
            <div class="list-btn__item">
              <span class="c-btn__02 mbsp-21"><img src="@/assets/guardian/img/common/icon-time.svg" alt="icon" width="15">残り48時間</span>
            </div>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./U038.html" class="btn_entry">承認・仮払いへ進む</a>
              </div>
              <div class="list-btn__item">
                <a href="./U026.html" class="c-btn__04 js-modal" data-modal="M002">見積もりの修正依頼</a>
              </div>
              <div class="list-btn__item">
                <a href="./U059.html" class="c-btn__04">依頼を取り消す</a>
              </div>
            </div>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
    <div class="modal-main" id="M002">
      <div class="modal-block">
        <span class="modal-block__close"></span>
        <h2 class="modal-block__ttl">見積もり修正依頼</h2>
        <div class="modal-ct">
          <div class="c-txt__01 modal-ct__desc"> 修正を依頼する際は事前にメッセージにて<br>修正理由の共有をお願いいたします。 </div>
          <div class="modal-ct__control">
            <button class="btn_entry">依頼する</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import QuestionBox from "@/components/block/QuestionBox";
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee";

export default {
  layout: 'guardian',
  components: {
    SupporterJobMenu,
    GuardianRightMenu,
    QuestionBox,
    ExeoTableGuardianEstimateFee
  },
  data () {
    return {
      questions: [
        {
          'name' : '予約リクエストの内容変更、依頼取り消しについて',
          'url' : 'https://www.kids-parks.com/faq/request-2/180/'
        },
        {
          'name' : '見積もりの修正をお願いしたい',
          'url' : 'https://www.kids-parks.com/faq/reserve/193/'
        },
        {
          'name' : 'サポート開始までの流れ',
          'url' : 'https://www.kids-parks.com/faq/flow-2/183/'
        }
      ],
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: ''
        },
        {
          name: '依頼詳細',
          routeName: 'guardian-reservation-detail-web-pre-interview-request-detail'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <main id="page-P089-3" class="wrapper">
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
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or mb-0">事前面談を辞退しました</h2>
            </div>
            <supporter-job-menu :route-names="routeNames"></supporter-job-menu>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="最終受取金額" width="17">最終受取金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc">0円</div>
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
                  <div class="job-money__list-desc">0円</div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>0</span>円
                  </div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-note.svg" alt="基本情報" width="17"> 基本情報</h3>
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
                  <div class="job-infor__list-desc">Web事前面談（初回必須）</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-note.svg" alt="キャンセル" width="17"> キャンセル</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">キャンセル申請者</div>
                  <div class="job-infor__list-desc">木村　花子</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">キャンセル日時</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">キャンセル詳細</div>
                  <div class="job-infor__list-desc">テキスト</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">キャンセル料</div>
                  <div class="job-infor__list-desc">0円</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="サポート場所" width="11"> サポート場所</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc">東京都千代田区</div>
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
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="ユーザー情報" width="17"> ユーザー情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><a href="./P023.html">木村　花子</a></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ふりがな</div>
                  <div class="job-infor__list-desc">きむら　はなこ</div>
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
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="ユーザー情報" width="17"> お子様情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">性別</div>
                  <div class="job-infor__list-desc">女の子</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">年齢</div>
                  <div class="job-infor__list-desc">7歳5ヶ月</div>
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
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="面談で聞きたいことなど" width="13">面談で聞きたいことなど</h3>
              <div class="job-infor__note job-infor__note--auto"> いままでの保育のご経験など聞ければ嬉しいです。 </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="ユーザー情報" width="17"> サポーター情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc">
                    <a href="">佐藤　彩</a>
                  </div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ふりがな</div>
                  <div class="job-infor__list-desc">さとう　あや</div>
                </div>
              </div>
            </div>
          </div>
          <aside class="l-content__02-r">
            <div class="use-box">
              <div class="use-box__avatar">
                <img src="@/assets/supporter/img/common/img_use_gray.png" alt="木村　花子" width="60">
              </div>
              <div class="use-box__ct">
                <div class="use-box__ttl">
                  <a href="./P023.html">木村　花子</a>
                </div>
                <div class="use-box__address"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="東京都千代田区" width="11">
                  <div class="use-box__address-desc">東京都千代田区</div>
                </div>
              </div>
            </div>
            <div class="use-sidebar-main">
              <div class="use-info mbpc-0 mbsp-0">
                <dl class="use-info__item">
                  <dt class="use-info__ttl">お仕事ID</dt>
                  <dd class="use-info__desc">0000000</dd>
                </dl>
                <dl class="use-info__item">
                  <dt class="use-info__ttl">合計金額</dt>
                  <dd class="use-info__desc">7,500円</dd>
                </dl>
                <dl class="use-info__item">
                  <dt class="use-info__ttl">開始</dt>
                  <dd class="use-info__desc"><span>2022年07月20日(水) 12:00</span></dd>
                </dl>
                <dl class="use-info__item">
                  <dt class="use-info__ttl">終了</dt>
                  <dd class="use-info__desc"><span>2022年07月20日(水) 15:00</span></dd>
                </dl>
                <dl class="use-info__item">
                  <dt class="use-info__ttl">最寄り駅</dt>
                  <dd class="use-info__desc"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="最寄り駅" width="11"><span>山手線 秋葉原駅</span></dd>
                </dl>
                <dl class="use-info__item mbpc-0 mbsp-0">
                  <dt class="use-info__ttl">お子様</dt>
                  <dd class="use-info__desc"><span>女の子（3歳2ヶ月）</span></dd>
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
export default {
  layout: 'supporter',
  components: {
    SupporterJobMenu
  },
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
  data() {
    return {
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: ''
        }      ,
        {
          name: '依頼詳細',
          routeName: 'supporter-job-detail-decline-interview'
        }
      ]
    }
  }
}
</script>

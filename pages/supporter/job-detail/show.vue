<template>
  <main id="page-P021" class="wrapper">
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
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">時間変更依頼が届きました。</h2>
              <p class="c-txt__01">時間変更後見積もり金額と、開始終了を確認し、問題なければ承認ボタンを押してください。<br>時間変更に伴い、オプションの利用時間が変わる場合は、サポート終了後の完了報告で修正してください。</p>
              <div class="c-control--submit-left">
                <a href="#" class="btn_entry w240">時間変更依頼を承認する</a>
                <a href="#" class="btn_back w100">承認しない</a>
              </div>
            </div>
            <supporter-job-menu :route-names="routeNames"></supporter-job-menu>
            <exeo-table-supporter-job-amount-estimate-advance></exeo-table-supporter-job-amount-estimate-advance>
            <div class="c-caution--l c-arrow-box job-box c-txt__01 c-al--c">
              変更後開始時間：2022年07月20日(水) 12:00<br> 変更後終了時間：2022年07月20日(水) 16:00
            </div>
            <exeo-table-supporter-job-amount-estimate-after-change></exeo-table-supporter-job-amount-estimate-after-change>
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
                  <div class="job-infor__list-desc">単発予約</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="サポート場所" width="11"> サポート場所</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc">東京都千代田区100-45-11</div>
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
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">家までの行き方</div>
                  <div class="job-infor__list-desc">千代田駅南口からまっすぐ進み、一つ目のコンビニで右折。<br>100mほど言った先の左側、茶色い4回建てのマンションです。</div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">保育場所の写真</div>
                  <div class="job-infor__list-desc">
                    <img src="@/assets/supporter/img/p013/img-01.jpg" alt="お子様のお写真">
                  </div>
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
                  <div class="job-infor__list-ttl">電話番号</div>
                  <div class="job-infor__list-desc"><a class="tel" href="tel:07045623654">07045623654</a></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">緊急連絡先</div>
                  <div class="job-infor__list-desc">08012356987</div>
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
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc">あいり</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">愛称</div>
                  <div class="job-infor__list-desc">あいちゃん</div>
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
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">お子様のお写真</div>
                  <div class="job-infor__list-desc">
                    <img src="@/assets/supporter/img/p013/img-02.jpg" alt="お子様のお写真">
                  </div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="具体的な依頼内容" width="13"> 具体的な依頼内容</h3>
              <div class="job-infor__note"> 自宅にて7歳の娘の遊び相手をお願いします。<br> 仕事で午前中から昼過ぎまで出かけないといけませんので、<br> お昼も用意したものを出していただければと思います。<br> 家の目の前に公園がありますので晴れていたら公園で遊んでいただけると嬉しいです。<br> 何か質問などあればメッセージをお待ちしております。<br> よろしくお願いいたします。 </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="ご家庭のルール" width="13"> ご家庭のルール</h3>
              <div class="job-infor__note job-infor__note--auto"> 昼間はテレビを見ない </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="サポーター情報" width="17"> サポーター情報</h3>
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
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">電話番号</div>
                  <div class="job-infor__list-desc"><a href="tel:07011112222" class="tel">07011112222</a></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc">東京都千代田区3-5-403</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄駅</div>
                  <div class="job-infor__list-desc">〇〇駅</div>
                </div>
              </div>
            </div>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="3"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item mbpc-24">
                <span class="c-btn__02 mbsp-21">サポート前にチェックしてください。</span>
              </div>
              <ul class="form-check form-check--02">
                <li class="form-check__item">
                  <label class="form-edit__checkbox">
                    <input type="checkbox" class="checks" checked="checked">
                    <span class="checkmark"></span>自分の体調は万全である </label>
                </li>
                <li class="form-check__item">
                  <label class="form-edit__checkbox">
                    <input type="checkbox" class="checks">
                    <span class="checkmark"></span>お子様の体調を確認した </label>
                </li>
              </ul>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry--disabled">お仕事日前日までお待ちください</a>
              </div>
            </div>
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="@/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/commission2/53/" target="_blank">お見積り提示後の料金変更方法</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/cancel/55/" target="_blank">キャンセル規定について</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/flow/50/" target="_blank">お仕事開始までの流れ</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import ExeoTableSupporterJobAmountEstimateAdvance from "@/components/table/ExeoTableSupporterJobAmountEstimateAdvance";
import ExeoTableSupporterJobAmountEstimateAfterChange from "@/components/table/ExeoTableSupporterJobAmountEstimateAfterChange";
export default {
  layout: 'supporter',
  components: {
    ExeoTableSupporterJobAmountEstimateAdvance,
    ExeoTableSupporterJobAmountEstimateAfterChange,
    SupporterRightMenu,
    SupporterJobMenu
  },
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
  data() {
    return {
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: 'supporter-job-detail-request',
        },
        {
          name: '依頼詳細',
          routeName: 'supporter-job-detail-show',
        }
      ]
    };
  }
}
</script>

<template>
    <div class="wrapper">
        <!--#include virtual="/assets/inc/sidebar.html" -->
        <!--▲▲ /#SIDEBAR ▲▲-->
        <main id="page-T056" class="site_main">
            <nav class="breadcrumb">
                <ul>
                    <li><a href="/app/admin/dashboard">TOP</a></li>
                    <li><a href="/">予約・稼働状況〈予約詳細〉</a></li>
                    <li>予約詳細</li>
                </ul>
            </nav>
            <h1 class="page_ttl_01"><span>予約・稼働状況〈予約詳細〉</span></h1>
            <div class="col2_block">
                <div class="col2_block_side">
                    <div class="col2_block_side_status">
                        <span>現在のステータス</span>
                        <span v-if="job.status==0" class="statusicn statusicn_completion">完　了</span>
                        <span v-if="job.status==-1" class="statusicn statusicn_cancel">期限切れ</span>
                        <span v-if="job.status==-2" class="statusicn statusicn_cancel">キャンセル</span>
                        <span v-if="job.status==1" class="statusicn statusicn_reserved">予約確定</span>
                        <span v-if="job.status==2" class="statusicn statusicn_request">見積り提示</span>
                        <span v-if="job.status==3" class="statusicn statusicn_request">リクエスト</span>
                        <span v-if="job.status==4" class="statusicn statusicn_request">レポート待ち</span>
                        <span v-if="job.status==5" class="statusicn statusicn_request">レビュー待ち</span>
                    </div>
                </div>
                <div class="col2_block_main f-ai-center f-jc-flex-start">
                    <div class="col2_block_main_user">
                        <a href="./T002.html" class="flex-box decoration-none">
                            <div class="col2_block_main_img">
                                <img src="@/assets/admin/img/common/img_user.png" alt="">
                            </div>
                            <ul class="col2_block_main_data">
                                <li class="col2_block_main_post">
                                    <span>パークサポーター</span>
                                </li>
                                <li class="col2_block_main_name">
                                    <span>{{supporter.last_name}}　{{supporter.first_name}}</span>
                                    <span>{{supporter.last_kana}}　{{supporter.first_kana}}</span>
                                </li>
                                <li class="col2_block_main_medal">
                                    <span :class="'col2_block_main_medal_'+supporter.medal"></span>
                                </li>
                                <li class="col2_block_main_star">
                                    <span class="col2_block_main_star_icn" :data-rate="supporter.rating"></span>
                                </li>
                            </ul>
                        </a>
                    </div>
                    <div class="col2_block_main_user">
                        <a href="./T028.html" class="flex-box decoration-none">
                            <div class="col2_block_main_img">
                                <img src="@/assets/admin/img/common/img_user.png" alt="">
                            </div>
                            <ul class="col2_block_main_data">
                                <li class="col2_block_main_post">
                                    <span>ユーザー</span>
                                </li>
                                <li class="col2_block_main_name">
                                    <span>{{guardian.last_name}}　{{guardian.first_name}}</span>
                                    <span>{{guardian.last_kana}}　{{guardian.first_kana}}</span>
                                </li>
                                <li class="col2_block_main_star">
                                    <span class="col2_block_main_star_icn" :data-rate="guardian.rating"></span>
                                </li>
                            </ul>
                        </a>
                    </div>
                    <a href="./T083.html" class="btn_style_04">メッセージを開く</a>
                </div>
            </div>
            <div class="col2_block">
                <div class="col2_block_side">
                    <div class="col2_block_side_approvaldeadline">
                        <span>承認期限：残り00時間00分</span>
                        <span>2022年8月9日20:15まで</span>
                    </div>
                </div>
                <div class="col2_block_main f-jc-flex-start">
                    <div class="form_block user-memo02">
                        <div class="form_part">
                            <span class="form_part_name">メモ</span>
                            <textarea name="memo" rows="2" cols="40" class="form_part_txt form_part_txt_memo" placeholder="メモを入力して下さい"></textarea>
                        </div>
                        <div class="form_part">
                            <span class="form_part_name">　</span>
                            <button class="form_part_savebtn" onclick="">保存</button>
                            <p class="form_part_com">※ステータス変更したら保存を押してください。<br>※メモはパークサポーターには公開されません。</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="report-steps">
                <li class="report-steps__item is-active"><a href="">予約詳細</a></li>
                <li class="report-steps__item"><a href="/T057.html">レポート/レビュー</a></li>
                <li class="report-steps__item"><a href="/T068.html">決済結果</a></li>
                <li class="report-steps__item"><a href="/T060.html">見守りレポート</a></li>
            </ul>
            <div class="result-block">
                <h2 class="cmn-ttl-01">サポート当日の履歴</h2>
                <div class="result-block__ct">
                    <table class="result-block__table">
                        <tr>
                            <th>サポート準備</th>
                            <td>{{dateStr(job.support_ready_at)}}</td>
                        </tr>
                        <tr>
                            <th>サポート開始</th>
                            <td>{{dateStr(job.support_start_at)}}</td>
                        </tr>
                        <tr>
                            <th>サポート終了</th>
                            <td>{{dateStr(job.support_end_at)}}</td>
                        </tr>
                        <tr>
                            <th>レポート提出</th>
                            <td>{{dateStr(job.report_send_at)}}</td>
                        </tr>
                        <tr>
                            <th>レポート承認</th>
                            <td>{{dateStr(job.report_approve_at)}}</td>
                        </tr>
                    </table>
                </div>
                <h2 class="cmn-ttl-01">予約概要</h2>
                <div class="result-block__ct">
                    <table class="result-block__table">
                        <tr>
                            <th>開始</th>
                            <td>{{dateStr(job.start_at)}}</td>
                        </tr>
                        <tr>
                            <th>終了</th>
                            <td>{{dateStr(job.end_at)}}　(予定)</td>
                        </tr>
                        <tr>
                            <th>定/単</th>
                            <td>{{job.is_single ? "定期予約" : "単発予約"}}</td>
                        </tr>
                        <tr>
                            <th>依頼カテゴリー</th>
                            <td>シッター</td>
                        </tr>
                        <tr>
                            <th>見守りモニタリング依頼</th>
                            <td>{{job.is_watch_over ? "あり" : "なし"}}</td>
                        </tr>
                        <tr>
                            <th>お仕事ID</th>
                            <td>{{job.id}}</td>
                        </tr>
                    </table>
                </div>
                <h2 class="cmn-ttl-01">事前見積もり金額</h2>
                <div class="result-block__ct">
                    <table class="result-block__table">
                        <tr>
                            <th class="looksort_table_total">合計</th>
                            <td class="looksort_table_total">7,500円</td>
                        </tr>
                        <tr>
                            <th>基本料金</th>
                            <td>9,500円（0000円×5.0時間）</td>
                        </tr>
                        <tr>
                            <th>オプション料金</th>
                            <td>500円（ピアノレッスン）</td>
                        </tr>
                        <tr>
                            <th>交通費</th>
                            <td>0円</td>
                        </tr>
                        <tr>
                            <th>手数料</th>
                            <td>-1500円<small>（保険料・消費税込み）</small></td>
                        </tr>
                    </table>
                </div>
                <h2 class="cmn-ttl-01">最終受取金額</h2>
                <div class="result-block__ct">
                    <table class="result-block__table">
                        <tr>
                            <th class="looksort_table_total">合計</th>
                            <td class="looksort_table_total">8,000円</td>
                        </tr>
                        <tr>
                            <th>基本料金</th>
                            <td>9,500円（0000円×5.0時間）</td>
                        </tr>
                        <tr>
                            <th>オプション料金</th>
                            <td>0円</td>
                        </tr>
                        <tr>
                            <th>交通費</th>
                            <td>500円</td>
                        </tr>
                        <tr>
                            <th>手数料</th>
                            <td>-1500円<small>（保険料・消費税込み）</small></td>
                        </tr>
                    </table>
                </div>
                <h2 class="cmn-ttl-01">キッズパークの収益</h2>
                <div class="result-block__ct">
                    <table class="result-block__table">
                        <tr>
                            <th class="looksort_table_total">合計</th>
                            <td class="looksort_table_total">4,000円</td>
                        </tr>
                        <tr>
                            <th>パークサポーター手数料</th>
                            <td>1,500円（12%)</td>
                        </tr>
                        <tr>
                            <th>ユーザー手数料</th>
                            <td>2,500円（22%)</td>
                        </tr>
                    </table>
                </div>
                <h2 class="cmn-ttl-01">サポート場所</h2>
                <div class="result-block__ct">
                    <table class="result-block__table">
                        <tr>
                            <th>住所</th>
                            <td>東京都千代田区544-2222</td>
                        </tr>
                        <tr>
                            <th>最寄駅</th>
                            <td>千代田駅</td>
                        </tr>
                        <tr>
                            <th>家までの行き方</th>
                            <td>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</td>
                        </tr>
                        <tr>
                            <th>保育場所の写真</th>
                            <td>
                                <ul class="report-block__gallery report-block__gallery--03">
                                    <li class="report-block__gallery-item"><img src="@/assets/admin/img/common/img-dummy02.png" alt="保育場所の写真"></li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
                <h2 class="cmn-ttl-01">ユーザー情報</h2>
                <div class="result-block__ct">
                    <table class="result-block__table">
                        <tr>
                            <th>お名前</th>
                            <td><a href="">{{guardian.last_name}}　{{guardian.first_name}}</a></td>
                        </tr>
                        <tr>
                            <th>ふりがな</th>
                            <td>{{guardian.last_kana}}　{{guardian.first_kana}}</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>{{guardian.phone_number}}</td>
                        </tr>
                        <tr>
                            <th>緊急連絡先</th>
                            <td>{{guardian.emergency_contact_phone_number}}</td>
                        </tr>
                        <tr>
                            <th>ペットの有無</th>
                            <td>{{guardian.is_pet ? "あり" : "無し"}}</td>
                        </tr>
                        <tr>
                            <th>カメラ設置</th>
                            <td>{{guardian.is_camera ? "あり" : "無し"}}</td>
                        </tr>
                    </table>
                </div>
                <h2 class="cmn-ttl-01">お子様情報</h2>
                <div class="result-block__ct">
                    <table class="result-block__table" v-for="(child,index) in guardian.children" :key="index">
                        <tr>
                            <th>{{index + 1}}人目</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>お名前</th>
                            <td>{{child.first_name}}</td>
                        </tr>
                        <tr>
                            <th>性別</th>
                            <td>{{child.gender ? "男の子" : "女の子"}}</td>
                        </tr>
                        <tr>
                            <th>年齢</th>
                            <td>{{child.birthday}}</td>
                        </tr>
                        <tr>
                            <th>アレルギー</th>
                            <td>{{child.allergy}}</td>
                        </tr>
                        <tr>
                            <th>持病</th>
                            <td>{{child.chronic_disease}}</td>
                        </tr>
                        <tr>
                            <th>お子様のお写真</th>
                            <td>
                                <ul class="report-block__gallery report-block__gallery--03">
                                    <li class="report-block__gallery-item"><img src="@/assets/admin/img/common/img-dummy02.png" alt="保育場所の写真"></li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
                <h2 class="cmn-ttl-01">パークサポーター情報</h2>
                <div class="result-block__ct">
                    <table class="result-block__table">
                        <tr>
                            <th>お名前</th>
                            <td>{{supporter.last_name}}　{{supporter.first_name}}</td>
                        </tr>
                        <tr>
                            <th>ふりがな</th>
                            <td>{{supporter.last_kana}}　{{supporter.first_kana}}</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>{{supporter.phone_number}}</td>
                        </tr>
                        <tr>
                            <th>緊急連絡先</th>
                            <td>{{supporter.phone_number}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Medal from "~/components/card/badge-card/Medal.vue"
import RatingStar from "~/components/card/badge-card/RatingStar.vue"
export default {
    layout: 'admin',
    components: {
        Medal,
        RatingStar,
    },
    head() {
        return {
            title: '予約・稼働状況〈予約詳細〉'
        }
    },
    data() { //予約周り未設計のためテストデータ
        return {
            job: {
                id: 1,
                status: 0,
                support_ready_at: "2022-07-20 10:25:00",
                support_start_at: "2022-07-20 12:01:00",
                support_end_at: "2022-07-20 15:03:00",
                report_send_at: "2022-07-20 18:15:00",
                report_approve_at: "2022-07-20 20:55:00",
                start_at: "2022-07-20 12:00:00",
                end_at: "2022-07-20 15:00:00",
                is_single: 0,
                contents_type: 1,
                is_watch_over: 0,
            },
            supporter: {
                id: 1,
                last_name: "山田",
                first_name: "太郎",
                last_kana: "やまだ",
                first_kana: "たろう",
                phone_number: "0456545655",
                rating: 3.5,
                medal: "gold",
            },
            guardian: {
                id: 1,
                last_name: "木村",
                first_name: "花子",
                last_kana: "きむら",
                first_kana: "はなこ",
                phone_number: "0456545655",
                emergency_contact_phone_number: "0905544321",
                is_pet: 0,
                is_camera: 1,
                rating: 4,
                children: [{
                    first_name: "かれん",
                    gender: 0,
                    birthday: "7歳5ヵ月",
                    allergy: "なし",
                    chronic_disease: "なし",
                }]
            },
        }
    },
    methods: {
        dateStr(date) {
            const dd = new Date(date)
            const time = date.split(' ')
            const timeStr = time[1].split(':')[0] + ":" + time[1].split(':')[1]
            const dateSplit = time[0].split('-')
            return dateSplit[0] + "年" + dateSplit[1] + "月" + dateSplit[2] + "日(" + ['日','月','火','水','木','金','土'][dd.getDay()] + ") " + timeStr
        }
    }
}
</script>

<style>

</style>

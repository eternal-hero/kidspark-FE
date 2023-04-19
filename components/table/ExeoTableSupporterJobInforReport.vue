<template>
  <div>
    <div class="job-infor">
      <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="具体的な依頼内容" width="13">本日のご報告</h3>
      <div class="job-infor__list">
        <div class="job-infor__list-item job-infor__list-item--wrap">
          <div class="job-infor__list-ttl job-infor__list-ttl--smallw">タイムテーブル</div>
          <div class="job-infor__list-desc job-infor__list-desc--smallw"> 10:00　サポートスタート<br> 10:00~12:00　遊び（お絵かき、おままごと）<br> 12:00~12:30　お食事（白米、生姜焼き、ミニトマト全て完食）<br> 12:30~13:00　お遊び（おままごと）<br> 13:00　排泄<br> 13:00~14:00　お昼寝<br> 14:00~15:00　お遊び（お絵かき、折り紙）<br> 15:00　お母さまご帰宅、引き渡し </div>
        </div>
        <div class="job-infor__list-item job-infor__list-item--wrap">
          <div class="job-infor__list-ttl job-infor__list-ttl--smallw">お子様の様子</div>
          <div class="job-infor__list-desc job-infor__list-desc--smallw">
            <p class="mbpc-15 mbsp-15"> お母さまがお出かけした後寂しさから泣いていましたが、5分くらいたって落ち着いてきた時に「何して遊ぶ？」と声をかけると「お絵かき！」と元気よくお返事してくれました。お絵描きはとても集中しながら書いていて、「これがお母さんで、これがお父さん」と、書いているものをひとつひとつ一生懸命に説明してくれました。<br> おままごとでは、リカちゃんハウスを最近買ってもらったと、とても嬉しそうに教えてくれて、とても楽しそうにお人形を喋らせて過ごしていました。<br> お食事の時間では、白米と生姜焼きが大好きな様子ですぐに完食できましたが、ミニトマトが少し苦手な様子でした。時間はかかりましたが頑張って3つ食べようとしている様子が見られて、完食した時は2人でハイタッチして喜びました。<br> お食事の後少し遊び、1時間ほど睡眠をとった後はお絵かきと折り紙をして過ごしました。手先が器用で折り紙をとても上手に折っていてすごく驚きました。 </p>
            <div class="job-infor__list-imgs">
              <div class="job-infor__list-img">
                <a href="@/assets/supporter/img/p018-2/img-01.jpg" target="_blank"><img src="@/assets/supporter/img/p018-2/img-01.jpg" alt="写真添付"></a>
              </div>
              <div class="job-infor__list-img">
                <a href="@/assets/supporter/img/p018-2/img-01.jpg" target="_blank"><img src="@/assets/supporter/img/p018-2/img-02.jpg" alt="写真添付"></a>
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

    <div class="job-infor">
      <h3 class="job-infor__ttl">ユーザーへのレビュー</h3>
      <div class="review-block">
        <ul class="review-block__list c-txt__01">
          <li class="review-block__list-item">
            <div class="review-block__list-img"><img src="@/assets/supporter/img/common/icn-user.png" alt="サポーターからのレビュー"></div>
            <div class="review-block__list-ct">
              <div class="review-block__list-meta">
                <div class="user-heading">
                  <div class="user-status">
                    <div class="user-status__star">
                      <span class="user-status__star-icn" data-rate="5"></span>
                    </div>
                  </div>
                </div>
                <span class="review-block__list-date">2022年12月</span>
              </div>
              <p>ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。</p>
            </div>
          </li>
        </ul>
        <p class="c-txt__03">レビューの内容は、ユーザーには表示されません。他のサポーターが、仕事依頼を受けた際に参考としてレビューを見ることができます。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterJobInforReport",
};
</script>

<style scoped></style>

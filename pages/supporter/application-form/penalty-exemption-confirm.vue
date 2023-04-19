<template>
  <main id="page-P051-3" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">申請フォーム</span>
      </div>
    </div>
    <div class="main-content">
      <div class="inner">
        <h2 class="c-ttl__01">申請フォーム</h2>
        <div class="l-content">
          <div class="l-content__body">
            <h3 class="c-ttl__02">ペナルティ免除申請</h3>
            <div class="c-caution">
              <h4 class="c-caution__title c-ttl__02 c-fc--or">まだ申請は完了しておりません。</h4>
              <p class="c-txt__01">内容を確認して、間違いがなければ「申請する」ボタンを押してください。</p>
            </div>
            <div class="job-infor__list job-infor__list mbpc-32 mbsp-32">
              <div class="job-infor__list-item job-infor__list-item--wrap">
                <div class="job-infor__list-ttl job-infor__list-ttl--190">関連依頼</div>
                <div class="job-infor__list-desc job-infor__list-desc--190">2022年8月26日(金) 10:00-16:00 木村　花子</div>
              </div>
              <div class="job-infor__list-item job-infor__list-item--wrap">
                <div class="job-infor__list-ttl job-infor__list-ttl--190">キャンセル理由</div>
                <div class="job-infor__list-desc job-infor__list-desc--190">テキストテキスト</div>
              </div>
              <div class="job-infor__list-item job-infor__list-item--wrap">
                <div class="job-infor__list-ttl job-infor__list-ttl--190">詳細状況</div>
                <div class="job-infor__list-desc job-infor__list-desc--190">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
              </div>
            </div>
            <div class="quote-list__item">
              <h3 class="quote-list__ttl">証明書の提出</h3>
              <div class="job-infor__list-imgs--clm3">
                <div class="job-infor__list-img">
                  <img src="@/assets/supporter/img/P051-3/img01.jpg" alt="">
                </div>
                <div class="job-infor__list-img">
                  <img src="@/assets/supporter/img/P051-3/img02.jpg" width="97" alt="">
                </div>
              </div>
            </div>
            <ul class="request-note">
              <li>・申請受理まで30分から最大で2営業日ほどかかる場合がございます。</li>
              <li>・申請が受理されるとメールにて通知され、自動的に売上金へ反映されます。</li>
            </ul>
            <div class="c-control--submit mw-500">
              <NuxtLink to="penalty-exemption-edit" class="btn_back w155 w100-sp">もどる</NuxtLink>
              <NuxtLink to="penalty-exemption-apply" class="btn_entry">申請する</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'supporter',
  head() {
    return {
      title: '申請フォーム'
    }
  },
}
</script>

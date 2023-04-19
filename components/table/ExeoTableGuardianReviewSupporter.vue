<template>
  <div class="quote-list__item">
    <h3 class="quote-list__ttl">パークサポーターへのレビュー</h3>
    <p class="c-txt__01 mbpc-24 mbsp-24"> 匿名のレビューの記入にご協力ください。<br>レビューに関する注意点などは<a href="https://www.kids-parks.com/faq/trouble-4/205/" target="_blank">レビューについて</a>をご確認ください。 </p>
    <div class="quote-list__fee">
      <div class="quote-list__fee-item">
        <div class="quote-list__fee-ttl"> アイコン </div>
        <div class="quote-list__fee-ct">
          <ul class="use-list">
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon" checked="checked"><span><img src="@/assets/guardian/img/U033/use-01.png" alt="use" width="40"></span></label>
            </li>
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon"><span><img src="@/assets/guardian/img/U033/use-02.png" alt="use" width="40"></span></label>
            </li>
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon"><span><img src="@/assets/guardian/img/U033/use-03.png" alt="use" width="40"></span></label>
            </li>
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon"><span><img src="@/assets/guardian/img/U033/use-04.png" alt="use" width="40"></span></label>
            </li>
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon"><span><img src="@/assets/guardian/img/U033/use-05.png" alt="use" width="40"></span></label>
            </li>
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon"><span><img src="@/assets/guardian/img/U033/use-06.png" alt="use" width="40"></span></label>
            </li>
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon"><span><img src="@/assets/guardian/img/U033/use-07.png" alt="use" width="40"></span></label>
            </li>
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon"><span><img src="@/assets/guardian/img/U033/use-08.png" alt="use" width="40"></span></label>
            </li>
            <li class="use-list__item">
              <label class="c-select-icn"><input type="radio" name="icon"><span><img src="@/assets/guardian/img/U033/use-09.png" alt="use" width="40"></span></label>
            </li>
          </ul>
        </div>
      </div>
      <div class="quote-list__fee-item quote-list__fee-item--start">
        <div class="quote-list__fee-ttl"> 満足度 </div>
        <div class="quote-list__fee-ct">
          <div class="quote-list__fee-start">
            <div class="c-review-stars">
							<span>
								<input id="review01" type="radio" name="review" checked="checked"><label for="review01"><i class="fa-solid fa-star"></i></label>
								<input id="review02" type="radio" name="review"><label for="review02"><i class="fa-solid fa-star"></i></label>
								<input id="review03" type="radio" name="review"><label for="review03"><i class="fa-solid fa-star"></i></label>
								<input id="review04" type="radio" name="review"><label for="review04"><i class="fa-solid fa-star"></i></label>
								<input id="review05" type="radio" name="review"><label for="review05"><i class="fa-solid fa-star"></i></label>
							</span>
            </div>
          </div>
          <div class="quote-list__fee-note">依頼内容の正確さ、やりとりの丁寧さ、時間の正確さ、プロフィールの正確さ などを総合的に評価して、星をクリックしてください。</div>
        </div>
      </div>
      <div class="quote-list__fee-item quote-list__fee-item--start">
        <div class="quote-list__fee-ttl"> レビュー本文<span>※</span>
        </div>
        <div class="quote-list__fee-ct">
          <textarea name="" cols="30" rows="10" class="form-edit__textarea h178" placeholder="レビューを記入してください。"></textarea>
          <div class="quote-list__fee-note">
            ・今回のお仕事において、パークサポーターに対して満足した点や、改善して欲しい点をコメントに記載いただけます。<br>
            ・レビューの内容はパークサポーターのプロフィールページへ掲載され、すべてのユーザーが依頼する際に参考としてレビューを見ることができますので、パークサポータのお名前などの個人情報や、不適切な内容の記載にご注意ください。<br>
            ・レビューは、毎月1日に前月のレビューを匿名で一斉公開します。匿名ですが、内容や依頼件数が少なかった場合などは特定できる可能性もございますのでご了承ください。<br>
            ※運営に対するご意見、改善点などはお問い合わせよりご記入ください。
          </div>
          <div class="request-form__ct-right">
            <div class="c-example__button js-btn-acc"><span>入力例</span></div>
            <div class="c-example__cont js-acc-cont">
              <span class="c-example__close js-acc-close">×</span>
              <p class="c-txt__01">
                （例）<br>
                本日はありがとうございました。子どもがとても嬉しそうに、楽しかったと話してくれています。また機会があればお願いしたいと思います^^<br><br>
                （例）<br>
                初めての依頼でしたが、楽しく過ごさせていただいた様で安心しました。またぜひよろしくお願いします。

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableGuardianReviewSupporter"
}
</script>

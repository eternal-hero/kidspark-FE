<template>
  <div class="job-infor mbsp-20">
    <h3 class="job-infor__ttl">パークサポーターへのレビュー</h3>
    <div class="job-infor__list">
      <div class="job-infor__list-item job-infor__list-item--start">
        <div class="job-infor__list-ttl job-infor__list-ttl--smallw">アイコン</div>
        <div class="job-infor__list-desc job-infor__list-desc--smallw">
          <ul class="use-list">
            <li class="use-list__item mbpc-0 mbsp-0">
              <img src="@/assets/guardian/img/U033/use-01.png" alt="use" width="40">
            </li>
          </ul>
        </div>
      </div>
      <div class="job-infor__list-item job-infor__list-item--start">
        <div class="job-infor__list-ttl job-infor__list-ttl--smallw">満足度</div>
        <div class="job-infor__list-desc job-infor__list-desc--imgsp job-infor__list-desc--smallw">
          <div class="user-status__star">
            <span class="user-status__star-icn" data-rate="5"></span>
          </div>
        </div>
      </div>
      <div class="job-infor__list-item job-infor__list-item--wrap">
        <div class="job-infor__list-ttl job-infor__list-ttl--smallw">レビュー本文</div>
        <div class="job-infor__list-desc job-infor__list-desc--smallw"> 本日は初めてのご依頼ありがとうございました。<br> おこさまはとても元気でかわいい女の子で、またお会いできるのを楽しみにしています。 </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewItem',
}
</script>
<style scoped>
</style>
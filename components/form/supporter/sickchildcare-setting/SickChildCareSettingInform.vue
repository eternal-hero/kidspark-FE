<template>
  <div class="l-content">
    <div class="l-content__body">
      <h2 class="c-ttl__02 mbpc-34">病児保育設定</h2>
      <hr class="hr mbpc-38 mbsp-41">
      <div class="job-infor job-infor--borderno">
        <div class="job-infor__flex job-infor__flex--03">
          <div class="job-infor__flex-ct">
            <h3 class="job-infor__ttl mbpc-14 mbsp-10">病児保育のサポートもしたい方</h3>
            <div class="job-infor__txt">
              <small> ベビーシッターに登録しているが産前産後のサポートもしたい方は、<br class="pc">
                病児保育設定の申請を提出いただく必要がございます。<br>
                <a href="https://stg.kids-parks.com/faq/sitter-3/99/" target="_blank">詳しくはこちら</a>をご覧ください。
              </small>
              <p class="mtpc-5"> ※資格の有無や選考内容によっては病児保育サポーターとして登録できない<br class="pc-xl">場合もございますのでご了承ください。
              </p>
            </div>
          </div>
          <div class="job-infor__flex-img">
            <img :src="require(`@/assets/supporter/img/p031/img-02.png`)" width="184" alt="病児保育のサポートもしたい方">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SickChildCareSettingInform"
}
</script>

<style scoped>

</style>

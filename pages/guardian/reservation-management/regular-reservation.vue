<template>
  <main id="page-U007-3" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="./U007.html">予約管理</a><span class="current">定期予約</span>
      </div>
    </div>
    <section class="sec-work">
      <div class="inner">
        <h1 class="c-ttl__01">予約管理</h1>
        <div class="nav-scroll">
          <sub-nav></sub-nav>
        </div>
        <div class="l-content">
          <div class="l-content__body">
            <h3 class="c-ttl__02">定期予約の依頼</h3>
            <div class="preparation_box">
              <p>定期予約は準備中です。<br>しばらくお待ちください。</p>
              <img src="@/assets/guardian/img/U007-3/img-01.png" alt="定期予約は準備中です。しばらくお待ちください。">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SubNav from "@/components/guardian/SubNav";
export default {
  components: {SubNav},
  layout: 'guardian',
}
</script>
<style scoped>
a.work-list__link:hover {
  background: #000;
}
div.preparation_box {
  background: #FAFAFA;
  display: flex;
  align-items: center;
  justify-content: center;
}
div.preparation_box p {
  font-size: 1.45rem;
  color: #464646;
  font-weight: bold;
  text-align: center;
  line-height: 1.8;
  margin: 0 50px;
}
div.preparation_box img {
  width: 160px;
  margin: 0 20px;
}
.work-list__item {
  border: none !important;
}

@media screen and (max-width: 800px) {
  .c-ttl__02 {
    display: none;
  }
  div.preparation_box {
    background: #FAFAFA;
    display: grid;
    padding-top: 35px;
  }
  div.preparation_box p {
    margin: 0;
  }
  div.preparation_box img {
    margin: 0;
  }
}
</style>

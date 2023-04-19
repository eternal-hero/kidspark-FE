<template>
  <main id="page-P093" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <!-- <a href="../">マイページ</a><span class="current">身分証</span> -->
        <a>マイページ</a><span class="current">身分証</span>
      </div>
    </div>
    <section class="sec-card">
      <div class="inner">
        <h1 class="c-ttl__01">身分証</h1>
        <div class="l-content">
          <div class="l-content__body c-al--c">
            <div class="card-block c-txt__01">
              <div class="card-block__img">
                <img :src="getImage(identification.supporter_profile_image.image_path)" alt="Kids Park" class="pc">
              </div>
              <div class="card-block__ct">
                <div class="card-block__txt">私はキッズパークに登録されたパークサポーターです</div>
                <h2 class="card-block__ttl">
                  <span> {{ identification.last_name }}　{{ identification.first_name }}</span>
                  <small>{{ identification.last_kana }}　{{ identification.first_kana }}</small>
                </h2>
              </div>
              <p>登録日 : {{ formatDate(identification.created_at) }}</p>
              <div class="card-block__tag c-txt__04">
                <span v-if="identification.supporter_setting.is_supporter">ベビーシッター</span>
                <span v-if="identification.childbirth_care_settings.is_childbirth_care">産前産後</span>
                <span v-if="identification.sick_child_care_settins.is_sick_child_care">病児保育</span>
                <span v-if="identification.housekeeping_setting.is_housework">家事代行</span>
              </div>
              <img src="@/assets/supporter/img/common/logo.svg" alt="Kids Park" width="328" class="pc mbpc-15">
              <img src="@/assets/supporter/img/common/logo.svg" alt="Kids Park" width="227" class="sp mbsp-3">
              <p>〒2208138 神奈川県横浜市西区<br> みなとみらい2-2-1横浜ランドマークタワー38F<br> 株式会社エクシオジャパン　キッズパーク<br>
                <a href="https://www.kids-parks.com">https://www.kids-parks.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Identification from "@/services/supporter/Identification";
import {datetimeMixin} from "@/mixins/datetimeMixin";
import {imageMixin} from "@/mixins/imageMixin";

export default {
  layout: 'supporter',
  mixins: [datetimeMixin, imageMixin],
  head() {
    return {
      title: '身分証'
    }
  },
  async asyncData(context) {
    try {
      const data = await Identification.getSupporterIdentification(context);
      return {
        identification: data
      }
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
}
</script>

<style>

</style>

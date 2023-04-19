<template>
  <div>
    <div v-if="format == 2" class="use-box use-box--styles02">
      <div class="use-box__avatar">
        <img :src="avatar" :alt="user.name" v-if="user.avatar" width="60">
        <img src="@/assets/admin/img/common/img_user.png" :alt="user.name" width="60" v-else>
      </div>
      <div class="use-box__ct">
        <div class="use-box__ttl">
          <a href="./P023.html">{{ user.name }}</a>
        </div>
        <div class="use-box__address"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="東京都千代田区" width="11">
          <div class="use-box__address-desc">{{ user.address }}</div>
        </div>
        <div class="use-box__star pc">
          <span class="use-box__star-icn" data-rate="3.5"></span>
        </div>
      </div>
    </div>
    <div v-else class="use-request_01">
      <div class="use-box">
        <div class="use-box__avatar">
          <img src="@/assets/guardian/img/U018/img_use.png" alt="">
        </div>
        <div class="use-box__ct">
          <div class="use-box__ttl">
            <div class="use-box__address">
              <span>30代女性　</span>
              <img src="@/assets/guardian/img/common/icn_gps.svg" alt="" width="11">
              <div class="use-box__address-desc">東京都中央区</div>
            </div>
          </div>
          <div class="user-status">
            <div class="user-status__medal">
              <span class="user-status__medal--regular"></span>
            </div>
            <div class="use-box__star">
              <span class="use-box__star-icn" :data-rate="user.rating"></span>
            </div>
            <a href="./U058.html" class="user-status__num">(15)</a>
          </div>
          <span class="icn_coupon">内閣府割引券対象</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "UserAvatarBox",
  props: {
    user: {
      type: Object,
      default() {
        return {
          name: '',
          avatar: 'img_user.png',
          address: '',
          rating: 0
        }
      }
    },
    format: {
      type: Number,
      default: 2,
    }
  },
  data() {
    return {}
  },
  computed: {
    avatar() {
      if (this.user?.avatar) {
        return require(`@/assets/admin/img/common/${this.user.avatar}`);
      }
    },
  }
}
</script>
<style scoped>
</style>

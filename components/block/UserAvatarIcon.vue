<template>
  <div class="col2_block_side">
    <ul class="col2_block_side_user">
      <li class="col2_block_side_user_img">
        <img :src="avatar" alt="ff" v-if="user.avatar">
        <img :src="getImage(userIconPath || '', require(`@/assets/admin/img/common/img_user.png`))" alt="" v-else>
      </li>
      <li class="col2_block_side_user_name">
        <a href="javascript:;">
          <span>{{ fullName }}</span>
          <span>{{ fullNameKana }}</span>
        </a>
      </li>
      <medal></medal>
      <rating-star :rating="user.rating"></rating-star>
    </ul>
  </div>
</template>

<script>
import Medal from "@/components/card/badge-card/Medal.vue";
import RatingStar from "@/components/card/badge-card/RatingStar.vue";
import {imageMixin} from "@/mixins/imageMixin";

export default {
  name: "UserAvatarIcon",
  mixins: [imageMixin],
  components: {RatingStar, Medal},
  props: {
    user: {
      type: Object,
      default() {
        return {
          avatar: 'img_user.png',
          first_name: "",
          last_name: "",
          first_kana: "",
          last_kana: "",
          rating: 0
        }
      }
    },
    isSupporter() {
      return false;
    }
  },
  data() {
    return {
      userIconPath : null
    }
  },
  created(){
    const iconImage = this.user.guardian_profile?.guardian_profile_image.filter(image => image.which_image === 1);
    if(iconImage && iconImage.length != 0){
      this.userIconPath = iconImage[0].image_path;
    }
  },
  computed: {
    avatar() {
      if (this.user?.avatar) {
        return require(`@/assets/admin/img/common/${this.user.avatar}`);
      }
    },
    fullName() {
      return `${this.user.last_name}　${this.user.first_name}`;
    },
    fullNameKana() {
      return `${this.user.last_kana}　${this.user.first_kana}`;
    }
  }
}
</script>
<style scoped>
</style>

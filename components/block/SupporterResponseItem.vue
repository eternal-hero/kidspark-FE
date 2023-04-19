<template>
  <div class="message-box__item" :class="{'viewed': status}">
    <div class="message-box__heading">
      <div class="message-box__heading-left">
        <span class="message-box__heading-icn">
          <img :src="avatar" :alt="fullName" v-if="user?.avatar" width="50">
          <img src="@/assets/supporter/img/common/img_use02.png" alt="" width="50" v-else>
        </span>
        <span class="message-box__heading-txt" v-text="fullName"></span>
      </div>
      <div class="message-box__heading-right">
        <span v-if="status" class="message-box__heading-status">既読</span>
        <span class="message-box__heading-time" v-text="time"></span>
      </div>
    </div>
    <div class="message-box__cnt" v-text="content"></div>
  </div>
</template>

<script>
export default {
  name: "SupporterResponseItem",
  props: {
    time: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    status: {
      type: Number,
      default: 1
    },
    user: {
      type: Object,
      default() {
        return {
          avatar: 'img_user.png',
          first_name: "",
          last_name: "",
        }
      }
    }
  },
  computed: {
    avatar() {
      if (this.user?.avatar) {
        return require(`@/assets/supporter/img/common/${this.user.avatar}`);
      }
    },
    fullName() {
      return `${this.user?.last_name}　${this.user?.first_name}`;
    },
  }
}
</script>

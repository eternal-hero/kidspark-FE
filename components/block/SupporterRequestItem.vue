<template>
  <div class="message-box__other">
    <div class="message-box__other-heading">
      <span v-text="time"></span>
    </div>
    <div class="message-box__other-wp mbpc-20">
      <div class="message-box__other-img">
        <img src="@/assets/supporter/img/common/icn_customer.png" alt="" width="50">
      </div>
      <div class="message-box__other-ct">
        <p class="message-box__other-ttl" v-html="title"></p>
        <p class="message-box__other-desc" v-html="description"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SupporterRequestItem",
  props: {
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
}
</script>

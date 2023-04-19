<template>
  <div>
    <template v-for="day in listMessage" class="message-box message-box--onday">
      <div class="message-box__date">
        <span>{{ day.date }}</span>
      </div>
      <div v-for="message in day.messages" class="message-box__other">
        <div class="message-box__other-heading">
          <span>{{ message.time }}</span>
        </div>
        <div class="message-box__other-wp mbpc-20">
          <div class="message-box__other-img">
            <img src="@/assets/supporter/img/common/icn_customer.png" alt="" width="50">
          </div>
          <div class="message-box__other-ct">
            <p class="message-box__other-ttl">{{ message.title }}</p>
            <p class="message-box__other-desc" v-html="message.description"></p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterMessageBox",
  props: {
    listMessage: {
      type: Object,
      default: []
    }
  }
}
</script>

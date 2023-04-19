<template>
  <div class="job-infor">
    <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" :alt="title" width="13"> {{ title }}</h3>
    <div class="job-infor__note job-infor__note--auto"> {{ content }} </div>
  </div>
</template>

<script>
export default {
  name: "SupporterMemo",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
  },
};
</script>

<style scoped>

</style>

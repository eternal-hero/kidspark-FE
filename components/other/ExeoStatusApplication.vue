<template>
  <div>
    <span v-if="value==0" class="statusicn statusicn_confirmation">未対応</span>
    <span v-if="value==1" class="statusicn statusicn_completion">有効</span>
    <span v-if="value==2" class="statusicn statusicn_expiration">期限切</span>
    <span v-if="value==3" class="statusicn statusicn_expiration">不受理</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {Type: String}
  }
}
</script>

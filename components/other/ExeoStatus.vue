<template>
  <div>
    <span v-if="value==1" class="statusicn statusicn--02 statusicn_confirmation">選考中</span>
		<span v-if="value==2" class="statusicn statusicn--02 statusicn_quotation">書類未</span>
		<span v-if="value==3" class="statusicn statusicn_confirmation_ok statusicn_confirmation_open">公開中</span>
		<span v-if="value==4" class="statusicn statusicn_confirmation_error statusicn_confirmation_open">公開中</span>
		<span v-if="value==-1" class="statusicn statusicn--02 statusicn_cancel statusicn_completion_off">非公開</span>
		<span v-if="value==-2" class="statusicn statusicn--02 statusicn_cancel">不採用</span>
  </div>
</template>

<script>
export default {
    props: {
        value: {Type: String}
    }
}
</script>

<style>

</style>
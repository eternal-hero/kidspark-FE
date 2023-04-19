<template>
    <div>
        <div class="work-list__btn work-list__btn--red" v-if="value==0"><span>審査中</span></div>
        <div class="work-list__btn work-list__btn--black02" v-if="value==1"><span>有効</span></div>
        <div class="work-list__btn work-list__btn--black" v-if="value==2"><span>期限切れ</span></div>
        <div class="work-list__btn work-list__btn--black" v-if="value==3"><span>不受理</span></div>
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style>

</style>
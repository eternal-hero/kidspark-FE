<template>
    <button class="button" @click="clickHandler"><slot>テストボタン</slot></button>
</template>

<script>
export default {
    methods: {
        clickHandler: function(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style>

</style>
<template>
    <button class="button-small" @click="clickHandler"><slot>テストボタン</slot></button>
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
.button-small {
    background-color: lightgray;
    border-radius: 3px;
    border: none;
}
</style>
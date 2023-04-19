<template>
    <button @click="onClick" class="btn_style_02">
        キャンセル
    </button>
</template>

<script>
export default {
    name: "ExeoButtonSmallCancel",
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
.btn_style_02 {
    width: fit-content;
}
</style>

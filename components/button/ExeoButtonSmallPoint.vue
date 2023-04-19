<template>
    <button @click="onClick" class="btn_style_02">
        ポイントを付与する
    </button>
</template>

<script>
export default {
    name: "ExeoButtonSmallPoint",
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

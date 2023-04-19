<template>
    <button @click="onClick" class="btn_style_02">
        編集
    </button>
</template>

<script>
export default {
    name: "ExeoButtonSmallEdit",
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
</style>

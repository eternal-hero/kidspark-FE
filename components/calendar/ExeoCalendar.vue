<template>
    <label class="form_part_date">
        <input type="date" :placeholder="placeholder" class="form_part_date_input" v-model="value" @input="$emit('input', value)">
    </label>
</template>

<script>
export default {
    props: {
        value: {Type: Date},
        placeholder: {Type: [String, Date]},
    },
}
</script>

<style>

</style>
<!-- <exeo-calendar v-model="date" placeholder=""/> -->
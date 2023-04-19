<template>
    <input
        :maxlength="maxLength"
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue"
    >
</template>

<script>
    export default {
        props: {
            value: {type: [String, Number]},
            placeholder: {type: String},
            maxLength: {type: String}
        },
        methods: {
            updateValue: function(e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

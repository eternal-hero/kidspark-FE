<template>
    <div class="col2_block">
        <ExeoUserCameraIcon :user="user"></ExeoUserCameraIcon>
        <supporter-header-right @submit="saveSetting" @edit="edit" :isEditing="isEditing"></supporter-header-right>
    </div>
</template>

<script>
import ExeoUserCameraIcon from "@/components/block/ExeoUserCameraIcon.vue";
import SupporterHeaderRight from "@/components/block/SupporterHeaderRight.vue";
export default {
    name: "SupporterSummaryHeader",
    components: { SupporterHeaderRight, ExeoUserCameraIcon },
    props: {
        user: {
            type: Object,
            required: true,
        },
        isEditing: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        saveSetting(data) {
            this.$emit("save-setting", data);
        },
        edit() {
            this.$emit('edit');
        },
    },
};
</script>

<style scoped>

</style>

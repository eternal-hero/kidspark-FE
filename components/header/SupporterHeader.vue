<template>
  <div class="col2_block">
    <exeo-user-icon :user="user"></exeo-user-icon>
    <supporter-header-right
      @submit="saveSetting"
      @edit="edit"
      :isEditing="isEditing"
    ></supporter-header-right>
  </div>
</template>

<script>
import ExeoUserIcon from "@/components/block/ExeoUserIcon.vue";
import SupporterHeaderRight from "@/components/block/SupporterHeaderRight.vue";
export default {
  name: "SupporterHeader",
  components: { SupporterHeaderRight, ExeoUserIcon },
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

<style scoped></style>

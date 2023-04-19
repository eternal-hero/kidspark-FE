<template>
  <div class="col2_block user-heading user-heading--main">
    <user-avatar-block :user="guardian"></user-avatar-block>
    <guardian-header-right
      @save="save"
      @edit="edit"
      :is-editing="isEditing"
    ></guardian-header-right>
  </div>
</template>

<script>
import UserAvatarBlock from "@/components/block/UserAvatarIcon.vue";
import GuardianHeaderRight from "@/components/block/GuardianHeaderRight.vue";

export default {
  name: "ExeoGuardianHeader",
  components: {
    GuardianHeaderRight,
    UserAvatarBlock,
  },
  props: {
    isEditing: {
      type: Boolean,
      default() {
        return false;
      },
    },
    guardian: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
    save(memo) {
      alert(memo);
    },
    edit() {
      this.$emit("edit");
    },
  },
};
</script>

<style scoped></style>

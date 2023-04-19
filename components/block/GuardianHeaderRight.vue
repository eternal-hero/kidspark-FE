<template>
  <div class="col2_block_main">
    <div class="form_block form_block_between">
      <div class="form_block">
        <div class="form_part">
          <span class="form_part_name">メモ</span>
          <textarea name="memo" rows="9" cols="40" class="form_part_txt form_part_txt_memo" v-model="memo"
            placeholder="メモを入力して下さい"></textarea>
        </div>
        <div class="form_part">
          <span class="form_part_name">　</span>
          <button class="form_part_savebtn" @click="save">保存</button>
          <p class="form_part_com">
            ※ステータス変更したら保存を押してください。 <br />
            ※メモはパークサポーターには公開されません。
          </p>
        </div>
      </div>
      <div class="form_part_btnarea">
        <button class="form_part_informbtn">
          <img src="~/assets/admin/img/common/icn_hp-wh.png" width="31" alt="" />
          直接お知らせする
        </button>
        <button class="form_part_btn01" @click="edit" v-show="!isEditing">
          編集する
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoButtonSmallEdit from "@/components/button/ExeoButtonSmallEdit.vue";

export default {
  name: "GuardianHeaderRight",
  components: { ExeoButtonSmallEdit },
  props: {
    isEditing: {
      type: Boolean,
    },
  },
  data() {
    return {
      memo: "",
    };
  },
  methods: {
    edit() {
      this.$emit("edit");
    },
    save() {
      this.$emit("save", this.memo);
    },
  },
};
</script>

<style scoped>

</style>

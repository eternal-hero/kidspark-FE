<template>
  <div class="col2_block_main">
    <div class="form_block__status02">
      <!-- <div class="form_block">
        <div class="form_part">
          <span class="form_part_name">シッター</span>
          <div class="form_part_select">
            <exeo-select :options="$SUPPORTER_SITTER_STATUSES" v-model="supporterSetting.sitter">
            </exeo-select>
          </div>
        </div>
        <div class="form_part">
          <span class="form_part_name">産前産後</span>
          <div class="form_part_select">
            <exeo-select :options="$CHILD_BIRTH_STATUSES" v-model="supporterSetting.childBirth"></exeo-select>
          </div>
        </div>
        <div class="form_part">
          <span class="form_part_name">病児保育</span>
          <div class="form_part_select">
            <exeo-select :options="$CHILD_CARE_STATUSES" v-model="supporterSetting.childCare"></exeo-select>
          </div>
        </div>
        <div class="form_part">
          <span class="form_part_name">家事代行</span>
          <div class="form_part_select">
            <exeo-select :options="$HOUSEWORK_AGENT_STATUSES" v-model="supporterSetting.houseworkAgent"></exeo-select>
          </div>
        </div>
        <p class="form_part_com">
          ※産前産後、病児保育はシッターのオプション設定です。シッター登録者のみ設定可能
        </p>
      </div> -->
    </div>
    <div class="form_part">
      <div class="statuschips js-tooltip"
        data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
        <span>ステータス説明</span>
      </div>
    </div>
    <!-- <div class="form_part align-end form_part_editbtn">
      <NuxtLink to="T074" class="form_part_informbtn"><img src="@/assets/admin/img/common/icn_hp-wh.png" width="31"
          alt="" />直接お知らせする
      </NuxtLink>
    </div> -->
    <div class="form_block form_block_between">
      <div class="form_block user-memo02">
        <!-- <div class="form_part">
          <span class="form_part_name">メモ</span>
          <exeo-textarea name="memo" v-model="supporterSetting.memo" rows="2" cols="40"
            class="form_part_txt form_part_txt_memo" placeholder="メモを入力して下さい"></exeo-textarea>
        </div>
        <div class="form_part">
          <span class="form_part_name">　</span>
          <button class="form_part_savebtn" @click="submit">保存</button>
          <p class="form_part_com">
            ※ステータス変更したら保存を押してください。<br />※メモはパークサポーターには公開されません。
          </p>
        </div> -->
      </div>
      <div class="form_part_btnarea">
        <button class="form_part_btn01" @click="edit" v-show="!isEditing">編集する</button>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoUserIcon from "@/components/block/ExeoUserIcon.vue";
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoTextarea from "@/components/form/ExeoTextarea.vue";
export default {
  name: "SupporterHeaderRight",
  components: {
    ExeoTextarea,
    ExeoSelect,
    ExeoUserIcon,
  },
  props: {
    isEditing: {
      type: Boolean,
    },
  },
  data() {
    return {
      supporterSetting: {
        sitter: 0, // シッター
        childBirth: 0, // 産前産後
        childCare: 0, // 病児保育
        houseworkAgent: 0, // 家事代行
        memo: "",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.supporterSetting);
    },
    edit() {
      this.$emit("edit");
    },
  },
  mounted() {
    tippy("[data-tippy-content]");
  },
};
</script>

<style scoped>

</style>

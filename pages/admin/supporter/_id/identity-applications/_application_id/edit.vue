<template>
  <main id="page-T024-1" class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="../">TOP</a></li>
        <li><a href="/">パークサポーター管理</a></li>
        <li>本人確認・資格証明</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>申請・提出書類〈本人確認・資格証明〉</span></h1>
    <supporter-header :user="user" :isEditing="true"/>
    <div class="col2_block f-ai-start">
      <ExeoSupporterNavigationWindow/>
      <div class="col2_block_main">
        <form class="form-edit">
          <div class="add-info">
            <table
              class="table_style_02 table_style_02--medium table_style_02--style5 table_style_02--no-striped form-edit__table looksort_table--small">
              <thead>
              <tr>
                <th>本人確認・資格証明の詳細</th>
                <th>
                  <div class="looksort_table__right">
                    <div class="statuschips js-tooltip"
                         data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
                      <span>本人確認・資格証明について</span></div>
                  </div>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="looksort_table_info">ファイルID</td>
                <td></td>
              </tr>
              <tr>
                <td class="looksort_table_info">ステータス</td>
                <td>
                  <div class="form_part_select">
                    <exeo-select v-model="document.status" :options="$ADMIN_SUPPORTER_APPLICATION_STATUS"/>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="looksort_table_info vertical-top">メモ</td>
                <td>
                  <div class="form_block form_block--02">
                    <div class="form_part">
                      <textarea v-model="document.memo" name="memo" rows="4" cols="40"
                                class="form-edit__textarea"></textarea>
                    </div>
                    <div class="form_part">
                      <p class="form_part_com">※メモはパークサポーターには公開されません。</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="looksort_table_info vertical-top">カテゴリー</td>
                <td>
                  <div class="form_block  js-check-value">
                    <exeo-radio v-model="document.category" :options="$ADMIN_SUPPORTER_APPLCATION_CATEGORY"
                                name="category"/>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="looksort_table_info">名称</td>
                <td>
                  <div class="list-select">
                    <div class="add-info__select form_part_select add-info__select--550"
                         :class='{"show": document.category == 0}' id="本人確認書類">
                      <exeo-select v-model="document.application_type"
                                   :options="$ADMIN_SUPPORTER_APPLICATION_IDENTITY"/>
                    </div>
                    <div class="add-info__select form_part_select add-info__select--550"
                         :class='{"show": document.category == 1}' id="シッター必須資格">
                      <exeo-select v-model="document.application_type"
                                   :options="$ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE"/>
                    </div>
                    <div class="add-info__select form_part_select add-info__select--550"
                         :class='{"show": document.category == 2}' id="病児・産前産後必須資格">
                      <exeo-select v-model="document.application_type"
                                   :options="$ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE"/>
                    </div>
                    <div id="その他の保育関連資格"
                         class="add-info__select-pd add-info__select add-info__select--550 js-select-change"
                         :class='{"show": document.category == 3}'>
                      <div class="form_part_select add-info__select--550">
                        <exeo-select v-model="document.application_type"
                                     :options="$ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE"/>
                      </div>
                      <textarea v-model="document.application_name" name="memo" rows="4" cols="40"
                                class="form_part_txt form_part_txt_memo"
                                :class='{"show": document.application_type == 6}'></textarea>
                    </div>
                    <div id="家事代行関連資格"
                         class="add-info__select-pd add-info__select add-info__select--550 js-select-change"
                         :class='{"show": document.category == 4}'>
                      <div class="form_part_select add-info__select--550">
                        <exeo-select v-model="document.application_type"
                                     :options="$ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE"/>
                      </div>
                      <textarea v-model="document.application_name" name="memo" rows="4" cols="40"
                                class="form-edit__textarea"
                                :class='{"show": document.application_type == 11}'></textarea>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="looksort_table_info">申請日時</td>
                <td> {{ document.application_at }}</td>
              </tr>
              <tr>
                <td class="looksort_table_info">有効期限</td>
                <td>
                  <label class="form_part_date">
                    <input type="date" placeholder="日付を選択してください" class="form_part_date_input"
                           v-model="document.expiration_on">
                  </label>
                </td>
              </tr>
              <tr>
                <td class="looksort_table_info vertical-top">ファイル</td>
                <td>
                  <dd class="support-ct__form-ct support-ct__form-ct--02">
                    <div class="support-ct__form-flex">
                      <div class="support-ct__form-img">
                        <embed :src="getImage(document.file_path + '#view=FitH', require(`@/assets/admin/img/T039-1/img-03.png`))"
                               type="application/pdf" v-if="selectedFileType === 'pdf'">
                        <img :src="getImage(document.file_path, require(`@/assets/admin/img/T039-1/img-03.png`))" alt="補助書類" v-else>
                        <button class="support-ct__form-delete" @click.prevent="deleteImage">削除</button>
                      </div>
                      <div class="support-ct__form-file">
                        <label for="upload-photo">PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</label>
                        <input type="file" name="photo" id="upload-photo" @change="changeImage($event)"
                               accept="image/*,application/pdf">
                        <div class="support-ct__form-desc"> ※アップロードいただけるファイル　jpg / jpeg / gif / png / pdf<br>※ファイルにつき○○○MBまでのファイルをアップロードできます。
                        </div>
                      </div>
                    </div>
                  </dd>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="add-info__control">
              <button class="form_part_btn01" @click.prevent="updateDocument">保存する</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import SupporterHeader from '@/components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '@/components/other/ExeoSupporterNavigationWindow.vue'
import ExeoSelect from '@/components/action/ExeoSelect.vue'
import ExeoRadio from '@/components/action/ExeoRadio.vue'
import ApplicationDocumentService from '@/services/admin/supporter/ApplicationDocumentService.js'
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import {imageMixin} from "@/mixins/imageMixin";

export default {
  layout: 'admin',
  components: {
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoSelect,
    ExeoRadio,

  },
  mixins: [imageMixin],
  async asyncData(context) {
    const supporter = await SupporterInfoService.getSupporterInfo(context, context.params.id);
    const identityApplication = await ApplicationDocumentService.getDocumentById(context, context.params.id, context.params.application_id);
    return {
      user: supporter,
      document: identityApplication,
      selectedFileType: (identityApplication.file_path && identityApplication.file_path.endsWith("pdf")) ? "pdf" : "image"
    }
  },
  data() {
    return {
    }
  },
  methods: {
    validate() {
      if (this.document.expiration_on == null) {
        alert('有効期限を入力してください。')
        return false;
      }
      if (this.document.file_path === '') {
        alert('ファイル選択してください。');
        return false;
      }
      return true;
    },
    async uploadFile() {
      const blob = await fetch(this.document.file_path).then(r => r.blob());
      let formData = new FormData();
      formData.append('file', blob);
      return await ApplicationDocumentService.uploadApplicationFile(this, this.$route.params.id, formData);
    },
    async updateDocument() {
      try {
        if (!this.validate()) return;
        if (this.isBlob(this.document.file_path)) {
          this.document.file_path = await this.uploadFile();
        }
        this.document = await ApplicationDocumentService.updateApplicationById(this, this.$route.params.id, this.$route.params.application_id, this.document);
        this.$router.push({
          name: 'admin-supporter-id-identity-applications',
          params: {
            id : this.$route.params.id,
            message: '保存しました'
          },
        });
      } catch (e) {
        console.log(e);
        alert('更新できません。')
      }
    },
    changeImage(e) {
      const file = e.target.files[0];
      console.log(file);
      this.document.file_path = URL.createObjectURL(file);
      this.selectedFileType = file.type.includes('pdf') ? 'pdf' : 'image';
      e.target.value = e.target.defaultValue;
    },
    deleteImage() {
      this.document.file_path = ''
      this.selectedFileType = "image";
    },
  },
  watch: {
    'document.category'() {
      this.document.application_type = 0
      this.document.application_name = null
    },
  }
}
</script>

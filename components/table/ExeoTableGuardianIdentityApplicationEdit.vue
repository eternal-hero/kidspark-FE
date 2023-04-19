<template>
  <div class="col2_block_main">
    <form class="form-edit">
      <div class="add-info">
        <table
          class="table_style_02 table_style_02--medium table_style_02--style5 table_style_02--no-striped form-edit__table looksort_table--small">
          <thead>
          <tr>
            <th>本人確認の詳細</th>
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
            <td>{{ form.id }}</td>
          </tr>
          <tr>
            <td class="looksort_table_info">ステータス</td>
            <td>
              <div class="add-info__select form_part_select">
                <exeo-select :options="$APPLICATION_STATUSES" v-model="form.status"></exeo-select>
              </div>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info vertical-top">メモ</td>
            <td>
              <div class="form_block form_block--02">
                <div class="form_part">
                  <exeo-textarea rows="4" cols="40" v-model="form.memo"></exeo-textarea>
                </div>
                <div class="form_part">
                  <p class="form_part_com">※メモはユーザーには公開されません</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">名称</td>
            <td>
              <div class="add-info__select form_part_select add-info__select--550">
                <exeo-select :options="$APPLICATION_TYPES" v-model="form.title"></exeo-select>
              </div>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">申請日時</td>
            <td>{{ formatDatetime(form.request_at) }}</td>
          </tr>
          <tr>
            <td class="looksort_table_info">有効期限</td>
            <td>
              <label class="form_part_date">
                <input type="date" v-model="form.expiration_on"
                       class="form-narrow__input form_part_date_input form_part_date_input--340">
              </label>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info vertical-top">ファイル</td>
            <td>
              <div class="file-option">
                <div class="item" :class="{show: parseInt(form.title) === 0}" id="運転免許証">
                  <div class="list-file">
                    <div class="list-file__item">
                      <label for="upload-photo01">表面<br>
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-01.png`)" alt="表面">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo01" @change="frontImageChange">
                    </div>
                    <div class="list-file__item">
                      <label for="upload-photo02">裏面<br>
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-02.png`)" alt="表面">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo02" @change="backImageChange">
                    </div>
                  </div>
                  <div class="support-ct__form-desc mbpc-28">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                  </div>
                </div>
                <div class="item" :class="{show: parseInt(form.title) === 1}" id="住民基本台帳カード">
                  <div class="list-file">
                    <div class="list-file__item">
                      <label for="upload-photo01">表面<br>
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-07.png`)" alt="住民基本台帳カード">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo01" @change="frontImageChange">
                    </div>
                    <div class="list-file__item">
                      <label for="upload-photo02">裏面<br>
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-08.png`)" alt="住民基本台帳カード">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo02" @change="backImageChange">
                    </div>
                  </div>
                  <div class="support-ct__form-desc mbpc-28">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                  </div>
                </div>
                <div class="item" :class="{show: parseInt(form.title) === 2}" id="健康保険証">
                  <div class="list-file">
                    <div class="list-file__item">
                      <label for="upload-photo01">表面<br>
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-05.jpg`)" alt="健康保険証">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo01" @change="frontImageChange">
                    </div>
                  </div>
                  <div class="support-ct__form-desc mbpc-28">
                    ※写真データを送信する際は、付箋などでオレンジ色の箇所(記号・番号・保険者番号・QRコード)を隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg
                    / jpeg / gif / png<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                  </div>
                </div>
                <div class="item" :class="{show: parseInt(form.title) === 3}" id="マイナンバーカード">
                  <div class="list-file">
                    <div class="list-file__item">
                      <label for="upload-photo01">表面<br>
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-06.png`)" alt="マイナンバーカード">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo01" @change="frontImageChange">
                    </div>
                  </div>
                  <div class="support-ct__form-desc mbpc-28">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                  </div>
                </div>
                <div class="item" :class="{show: parseInt(form.title) === 4}" id="在留カード">
                  <div class="list-file">
                    <div class="list-file__item">
                      <label for="upload-photo01">表面<br>
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-09.png`)" alt="在留カード">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo01" @change="frontImageChange">
                    </div>
                    <div class="list-file__item">
                      <label for="upload-photo02">裏面<br>
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-10.png`)" alt="在留カード">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo02" @change="backImageChange">
                    </div>
                  </div>
                  <div class="support-ct__form-desc mbpc-28">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                  </div>
                </div>
                <div class="item" :class="{show: parseInt(form.title) === 5}" id="住民票の写し">
                  <div class="list-file">
                    <div class="list-file__item">
                      <label for="upload-photo01">
                        <span>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</span>
                        <div class="list-file__img">
                          <img :src="require(`@/assets/admin/img/T039-1/img-11.png`)" alt="住民票の写し">
                        </div>
                      </label>
                      <input type="file" name="photo" id="upload-photo01" @change="frontImageChange">
                    </div>
                  </div>
                  <div class="support-ct__form-desc mbpc-28">※6ヶ月以内に発行されたもののみご利用いただけます。<br>※マイナンバー(個人番号)の記載がある場合は、該当箇所を付箋などで隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg
                    / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                  </div>
                </div>
                <div class="item" :class="{show: parseInt(form.title) === 6}" id="アカウント写真">
                  <dd class="support-ct__form-ct support-ct__form-ct--02">
                    <div class="support-ct__form-flex">
                      <div class="support-ct__form-img">
                        <img :src="require(`@/assets/admin/img/T039-1/img-12.png`)" alt="ファイル">
                        <button type="submit" class="support-ct__form-delete">削除</button>
                      </div>
                      <div class="support-ct__form-file">
                        <label for="upload-photo">PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</label>
                        <input type="file" name="photo" id="upload-photo" @change="frontImageChange">
                        <div class="support-ct__form-desc">
                          <small class="js-tooltip"
                                 data-tippy-content="<div class='inner-cap'><p>発行日から6ヶ月以内のものが有効です。</p><p>公共料金の領収書の名義は、ご本人さまのものをお送りください。</p><p>※カタカナ名義の補完書類はご利用できません</p><p>公共料金の領収書は、現住所と一致する住所記載があるものをご提出ください。</p></div>">●補助書類としてご使用いただける書類</small><br>※アップロードいただけるファイル　jpg
                          / jpeg / png / heic<br>※
                          撮影場所が暗すぎて顔が見えない、遠すぎる、後ろ姿や横顔である、過度な加工が施してある。ご自分以外の方が入り込んでいる場合、審査が通らない場合がございます。※ご自身のアイコンとして使用されます。※加工写真はご遠慮ください
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info vertical-top">補助書類</td>
            <td>
              <div class="support-ct__form-ct support-ct__form-ct--02">
                <div class="support-ct__form-flex">
                  <div class="support-ct__form-img">
                    <img :src="require(`@/assets/admin/img/T039-1/img-03.png`)" alt="補助書類" @change="documentChange">
                    <button type="submit" class="support-ct__form-delete" @click="removeDocument">削除</button>
                  </div>
                  <div class="support-ct__form-file">
                    <label for="upload-photo">PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</label>
                    <input type="file" name="photo" id="upload-photo">
                    <div class="support-ct__form-desc">
                      <small class="js-tooltip"
                             data-tippy-content="<div class='inner-cap'><p>発行日から6ヶ月以内のものが有効です。</p><p>公共料金の領収書の名義は、ご本人さまのものをお送りください。</p><p>※カタカナ名義の補完書類はご利用できません</p><p>公共料金の領収書は、現住所と一致する住所記載があるものをご提出ください。</p></div>">●補助書類としてご使用いただける書類</small><br>
                      <span> 公共料金の領収書　※電力会社、水道局、ガス会社のいずれか<br> 国税または地方税の領収書<br> 納税証明書<br> 社会保険料の領収書 </span>
                      ※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br>
                      ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="add-info__control">
          <button class="form_part_btn01" @click.prevent="submit">保存する</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import {datetimeMixin} from "@/mixins/datetimeMixin";
import ExeoTextarea from "@/components/form/ExeoTextarea.vue";

export default {
  name: "ExeoTableGuardianIdentityApplicationEdit",
  components: {
    ExeoTextarea,
    ExeoSelect
  },
  mixins: [datetimeMixin],
  props: {
    identityApplication: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {},
    };
  },
  created() {
    this.form = this.identityApplication;
    this.form.files = [];
  },
  methods: {
    async submit() {
      let formData = new FormData();
      for (const property in this.form) {
        formData.append(property, this.form[property]);
      }
      if (this.form.frontImage) {
        let blob = await fetch(this.form.frontImage).then(r => r.blob());
        formData.set("frontImage", blob);
      }
      if (this.form.backImage) {
        let blob = await fetch(this.form.backImage).then(r => r.blob());
        formData.set("backImage", blob);
      }
      if (this.form.additional_file_path) {
        let blob = await fetch(this.form.additional_file_path).then(r => r.blob());
        formData.set("additional_file_path", blob);
      }
      this.$emit('submit', formData);
    },
    frontImageChange(e) {
      const file = e.target.files[0];
      this.form.frontImage = URL.createObjectURL(file);
      e.target.value = e.target.defaultValue;
    },
    backImageChange(e) {
      const file = e.target.files[0];
      this.form.backImage = URL.createObjectURL(file);
      e.target.value = e.target.defaultValue;
    },
    documentChange(e) {
      const file = e.target.files[0];
      this.form.additional_file_path = URL.createObjectURL(file);
      e.target.value = e.target.defaultValue;
    },
    removeDocument() {
      this.form.additional_file_path = "";
    }
  },
  watch: {
    'form.title'() {
      this.form.files = [];
    }
  }
};
</script>

<style scoped></style>

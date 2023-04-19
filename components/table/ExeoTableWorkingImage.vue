<template>
  <div class="col2_block_main no-flex">
    <table class="table_style_02 profile-table tableblock_scroll looksort_table--small">
      <thead>
      <tr>
        <th>ファイルID</th>
        <th>カテゴリー</th>
        <th>画像</th>
        <th>更新日時</th>
        <th>ステータス</th>
        <th>メモ</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="image in workImages" :key="image.id">
        <td class="looksort_table_id">{{ image.id }}</td>
        <td class="looksort_table_start">
          {{ $WORKS_IMAGE_CATEGORY.find(x => x.value === parseInt(image.category))?.label }}
        </td>
        <td class="looksort_table_thumbnail">
          <video controls :src="getImage(image.image_path, require(`@/assets/admin/img/T010/img-03.jpg`))"  type="video/mp4" v-if="showingVideo(image.category) && image.image_path">
          </video>
          <img :src="getImage(image.image_path, require(`@/assets/admin/img/T010/img-03.jpg`))" :alt="image.id" v-else-if="showingVideo(image.category) && !image.image_path">
          <img :src="getImage(image.image_path, require(`@/assets/admin/img/T010/img-02.jpg`))" :alt="image.id" v-else>
        </td>
        <td class="looksort_table_end">{{ formatDatetime(image.update_at) }}</td>
        <td class="looksort_table_status"><span
          :class="showStatusStyle(image.display_status)">{{ showStatus(image.display_status) }}</span></td>
        <td class="looksort_table_memo">
          <p style="float: left">
            {{ image.note }}
          </p>
          <nuxt-link :to="{ name: 'admin-supporter-id-works-image-image_id-edit', params: { id: $route.params.id, image_id: image.id }}">
            <button class="btn_style_02">編集</button>
          </nuxt-link>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="flex-box">
      <exeo-pagenation :current_page="pagination.current_page" :last="pagination.last_page" :per_page="pagination.per_page" @next="next" @prev="prev"/>
      <div class="flex_box f-jc-flex-end">
        <div class="statusdescription looksort_statusdescription">
          <p class="statusdescription_ttl">ステータス説明</p>
          <ul class="statusdescription_list">
            <li><span class="statusicn statusicn_confirmation_ok statusicn_confirmation_open">公開中</span><span>プロフィール画面にて公開中</span>
            </li>
            <li><span
              class="statusicn statusicn_cancel statusicn_completion_off">非公開</span><span>不適切なため非公開</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoSelect from '../action/ExeoSelect.vue';
import ExeoPagenation from '../ExeoPagenation.vue';
import {datetimeMixin} from "@/mixins/datetimeMixin";
import {imageMixin} from "@/mixins/imageMixin";

export default {
  name: "ExeoTableWorkingImage",
  components: {
    ExeoSelect,
    ExeoPagenation
  },
  props: {
    workImages: {
      type: Array,
      required: true
    },
    pagination: {
      type: Object
    }
  },
  mixins: [datetimeMixin, imageMixin],
  data() {
    return {
      works_images: [{
        id: '1',
        supporter_user_id: '1',
        display_status: 0,
        note: "",
        category: 0,
        image_path: "",
        update_at: "2022/07/16 12:53"
      }],
    }
  },
  methods: {
    showingVideo(category) {
      return category === 1 || category === 3;
    },
    showStatus(status) {
      return this.$WORKS_IMAGE_STATUS.find(x => x.value === status)?.label;
    },
    showStatusStyle(status) {
      let label = this.$WORKS_IMAGE_STATUS.find(x => x.value === status)?.label;
      if (label === '公開中') {
        return 'statusicn statusicn_confirmation_ok statusicn_confirmation_open';
      }
      return 'statusicn statusicn_cancel statusicn_completion_off';
    },
    showCategory(category) {
      return this.$WORKS_IMAGE_CATEGORY.find((e) => {
        if (e.value === parseInt(category)) {
          return e.label;
        }
        return '';
      }).label;
    },
    next(e){
      this.$emit('change', e)
    },
    prev(e){
      this.$emit('change', e)
    },
  },
}
</script>

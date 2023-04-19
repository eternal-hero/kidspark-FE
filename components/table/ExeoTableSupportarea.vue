<template>
  <div class="col2_block_main">
  <div class="form-edit">
    <h2 class="cmn-ttl-01">サポートエリア</h2>
    <table class="table_style_01">
      <tr v-for="prefecture in prefectures" :key="prefecture">
        <th>{{prefectureStr(prefecture)}}</th>
        <td><div v-for="area in eachPrefecture(prefecture)" :key="area.area">{{areaStr(area.area)}}<br></div></td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: "ExeoTableSupportarea",
  props: {
    supportAreas: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      prefectures: null,
    }
  },
  mounted() {
    this.supportAreas.sort((a, b) => a.area - b.area)
    this.prefectures = [...(new Set(this.supportAreas.map(function (item) {return item['prefecture'];})))]
  },
  methods: {
    prefectureStr(prefecture) {
      const data = this.$SUPPORT_PREFECTURES.filter((e) => e.value == prefecture)[0]
      return data.label
    },
    areaStr(area) {
      const data = this.$SUPPORT_AREA.filter((e) => e.value == area)[0]
      return data.label
    },
    eachPrefecture: function(prefecture) {
      return this.supportAreas.filter((e) => e.prefecture == prefecture)
    }
  },
  computed: {
  }
};
</script>

<style scoped></style>

<template>
  <div>
    <a href="#" @click="isShowing = true">{{ applicants.length }}</a>
    <div class="popup-main02"
         :style="{ display: isShowing ? 'block' : 'none' }">
      <div class="popup-list">
        <div class="popup-item">
          <div class="popup-block">
            <span class="popup-block__close" @click="isShowing = false"></span>
            <h2 class="popup-block__ttl">応募者</h2>
            <div class="popup-ct">
              <div
                class="col2_block_main col2_block_main--02 f-ai-center f-jc-space-between">
                <div
                  class="col2_block_main_user"
                  v-for="applicant in applicants"
                  :key="applicant.id">
                  <div class="col2_block_main_img">
                    <img
                      :src="applicant.avatar"
                      :alt="`${applicant.first_name} ${applicant.last_name}`"
                    />
                  </div>
                  <ul class="col2_block_main_data">
                    <li class="col2_block_main_name">
                      <span>{{ applicant.first_name }}</span>
                      <span>{{ applicant.last_name }}</span>
                    </li>
                    <li class="col2_block_main_medal">
                      <span class="col2_block_main_medal_regular"></span>
                    </li>
                    <li class="col2_block_main_star">
                      <span
                        class="col2_block_main_star_icn"
                        :data-rate="applicant.rating"
                      ></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "M002",
  props: {
    applicants: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {},
};
</script>

<style scoped></style>

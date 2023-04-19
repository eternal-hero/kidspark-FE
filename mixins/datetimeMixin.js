export const datetimeMixin = {
  methods: {
    formatDatetime(datetimeStr) {
      // 2023-01-26 15:32:28 -> 2023年01月26日 15:32
      // 2023-01-26 15:32 -> 2023年01月26日 15:32
      // 2023-01-26T15:32:48.000000Z -> 2023年01月26日 15:32
      return this.$moment(datetimeStr).isValid() ? this.$moment(datetimeStr).format('YYYY/MM/DD HH:mm') : this.$moment(datetimeStr);
    },
    formatDate(dateStr) {
      // 2023-01-26 -> 2023年01月26日
      return this.$moment(dateStr).isValid() ? this.$moment(dateStr).format('YYYY年MM月DD日') : dateStr;
    }
  }
};

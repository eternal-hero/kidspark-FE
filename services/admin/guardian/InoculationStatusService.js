import api from "@/services/admin-api";

export default {
  async getInoculationStatus(nuxtApp,inoculationStatusId) {
    if (!inoculationStatusId) {
      return {
        is_publish: 0,
        inoculation_times: 0,
        inoculation_on: ''
      }
    }
    const { data } = await api.get(`/api/admin/common/inoculation/${inoculationStatusId}`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },

  async updateInoculationStatus(nuxtApp,inoculationStatusId, dataValue) {
    const { data } = await api.put(`/api/admin/common/inoculation/${inoculationStatusId}`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
});
    return data.status;
  },
};

import api from "@/services/supporter-api";

export default {
  async getInoculationStatus(nuxtApp,inoculationStatusId) {
    const { data } = await api.get(`/api/supporter/common/inoculation/${inoculationStatusId}`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
});
    return data.data;
  },

  async createInoculationStatus(nuxtApp, dataValue) {
    const { data } = await api.post(`/api/supporter/common/inoculation`, dataValue,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
    });
    return data.data;
  },

  async updateInoculationStatus(nuxtApp,inoculationStatusId, dataValue) {
    const { data } = await api.put(`/api/supporter/common/inoculation/${inoculationStatusId}`, dataValue,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
    });
    return data.data;
  },
};

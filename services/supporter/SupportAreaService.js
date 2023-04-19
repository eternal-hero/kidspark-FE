import api from "@/services/supporter-api";

export default {
  async getSupportArea(nuxtApp) {
    const { data } = await api.get(`/api/supporter/support_area`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if (data) {
      return data.data;
    } else {
      return data.status;
    }
  },

  async updateSupportArea(nuxtApp, dataValue) {
    const {data} = await api.post(`/api/supporter/support_area_all`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
}

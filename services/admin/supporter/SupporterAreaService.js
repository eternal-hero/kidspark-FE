import api from "@/services/admin-api";

export default {
  async getSupportArea(nuxtApp,supporterId) {
    const { data } = await api.get(`/api/admin/supporter/${supporterId}/support_area`,{
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

  async updateSupportArea(nuxtApp,supporterId, dataValue) {
    const {data} = await api.post(`/api/admin/supporter/${supporterId}/support_area_all`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
}

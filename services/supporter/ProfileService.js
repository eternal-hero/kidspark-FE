import api from "@/services/supporter-api";

export default {
  async getProfile(nuxtApp) {
    const { data } = await api.get(`/api/supporter/profiles`,{
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
  async updateProfile(nuxtApp, dataValue) {
    const {data} = await api.put(`/api/supporter/profiles`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
}

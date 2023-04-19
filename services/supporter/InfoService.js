import api from "@/services/supporter-api";

export default {
  async getInfo(nuxtApp) {
    const { data } = await api.get(`/api/supporter/`,{
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
  async updateInfo(nuxtApp, dataValue) {
    const {data} = await api.put(`/api/supporter/`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },

  async updateAvatar(nuxtApp, formWithFile) {
    formWithFile.append('_method', "PUT");
    const { data } = await api.post('/api/supporter/update-avatar', formWithFile, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
    return data.data;
  }
}

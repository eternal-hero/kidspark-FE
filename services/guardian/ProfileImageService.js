import api from "@/services/supporter-api";

export default {
  async getProfileImage(nuxtApp) {
    const { data } = await api.get(`/api/guardians/profiles/images`,{
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
  async updateProfileImage(nuxtApp, dataValue) {
    console.log(dataValue);
    const { data } = await api.put(`/api/guardians/profiles/image_update_all`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
    return data
  },
  async postFile(nuxtApp,file) {
    const params = new FormData();
    params.append('file', file);
    const data = await api.post(`/api/guardians/file/guardian_profile_images/upload`, params,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data
  },
}

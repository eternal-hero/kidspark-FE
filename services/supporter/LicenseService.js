import api from "@/services/supporter-api";

export default {
  async getLicense(nuxtApp) {
    const { data } = await api.get(`/api/supporter/application/documents`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data
  },
  async postFile(nuxtApp,file) {
    const params = new FormData();
    params.append('file', file);
    const data = await api.post(`/api/supporter/file/supporter_application_documents/upload`, params,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data
  },
  async createLicense(nuxtApp,formData,) {
    const res = await api.post(`/api/supporter/application/documents`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res
  }
}

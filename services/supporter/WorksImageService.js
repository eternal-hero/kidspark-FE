import api from "@/services/supporter-api";

export default {
  async getImages(nuxtApp) {
    const { data } = await api.get(`/api/supporter/works_images`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data
  },
  async postFile(nuxtApp,file) {
    const params = new FormData();
    params.append('file', file);
    const data = await api.post(`/api/supporter/file/supporter_works_images/upload`, params,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data
  },
  async postImage(nuxtApp,formData) {
    const data = await api.post(`/api/supporter/works_images_all`,formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async uploadFile(nuxtApp, file) {
    const params = new FormData();
    params.append('file', file);
    const data = await api.post(`/api/supporter/file/upload`, params,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data
  },
  async saveWorkImages(nuxtApp, workImages) {
    const { data } = await api.post('/api/supporter/works_images_all', workImages, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  }
}

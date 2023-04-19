import api from "@/services/admin-api";

export default {
  async getWorkImagesBySupporterId(nuxtApp,supporterUserId,current_page=null) {
    if (current_page == null) current_page = 1
    const {data} = await api.get(
      `api/admin/supporter/${supporterUserId}/works_images/`,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token'),
        },
        params: {
          page: current_page
        }
      }
    );
    return data;
  },
  async getWorkImageById(nuxtApp,supporterUserId, id) {
    const {data} = await api.get(
      `api/admin/supporter/${supporterUserId}/works_images/${id}`,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token'),
        }
      }
    );
    return data.data;
  },
  async createWorkImage(nuxtApp,formData, supporterUserId) {
    const {data} = await api.post(
      `api/admin/supporter/${supporterUserId}/works_images`,
      formData,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token'),
        }
      }
    );
    return data.data;
  },
  async updateWorkImageById(nuxtApp,formData, supporterUserId, id) {
    const {data} = await api.post(
      `api/admin/supporter/${supporterUserId}/works_images/${id}`,
      formData,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token'),
        }
      }
    );
    return data.data;
  },
};

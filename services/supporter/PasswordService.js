import api from "@/services/supporter-api";

export default {
  async updatePassword(nuxtApp, formData) {
    const { data } = await api.put(`/api/supporter/password`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
}

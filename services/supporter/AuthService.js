import api from "@/services/supporter-api";

export default {
  async postLogin(formData) {
    const { data } = await api.post(`/api/supporter/auth/login`, formData);
    return data.data;
  },
  async postLogout(nuxtApp) {
    const { data } = await api.post(`/api/supporter/auth/logout`, null, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
  }
}

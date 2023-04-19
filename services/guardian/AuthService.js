import api from "@/services/admin-api";

export default {
  async postLogin(formData) {
    const { data } = await api.post(`/api/guardians/auth/login`, formData);
    return data.data;
  },
  async postLogout(nuxtApp) {
    const { data } = await api.post(`/api/guardians/auth/logout`, null, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
  }
}

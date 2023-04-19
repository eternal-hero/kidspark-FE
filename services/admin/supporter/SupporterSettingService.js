import api from "@/services/admin-api";

export default {
  async getSupporterSetting(nuxtApp,supporterUserId) {
    const { data } = await api.get(`/api/admin/supporter/${supporterUserId}/settings`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
});
    return data.data;
  },
};

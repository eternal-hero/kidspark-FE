import api from "@/services/admin-api";

export default {
  async getHouseKeepingSetting(nuxtApp,supporterUserId) {
    const { data } = await api.get(`/api/admin/supporter/${supporterUserId}/housekeeping`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
});
    return data.data[0];
  },
};

import api from "@/services/admin-api";

export default {
  async getIdentityApplications(nuxtApp,guardianId) {
    const {data} = await api.get(`api/admin/guardian/${guardianId}/identity_verifications`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
});
    return data.data;
  },
  async getIdentityApplicationById(nuxtApp,guardianId, id) {
    const {data} = await api.get(`api/admin/guardian/${guardianId}/identity_verifications/${id}`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
})
    return data.data;
  },
  async getIdentityVerificationList(nuxtApp,page = 1,condition = null) {
    const {data} = await api.get(
      `api/admin/guardian/identity_verifications/list`,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        },
        params:{
          page: page,
          request_at_from: condition.request_at_from,
          request_at_to: condition.request_at_to,
          file_id: condition.file_id,
          status: condition.status,
          user_info: condition.user_info,
          expiration_on: condition.expiration_on,
        }
      });
    return data.data;
  },
};

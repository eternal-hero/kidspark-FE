import api from "@/services/admin-api";

export default {
    async getSupporterInfo(nuxtApp,supporterId) {
        const { data } = await api.get(`/api/admin/supporter/${supporterId}`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
        return data.data;
    },

    async updateSupporterInfo(nuxtApp,formData, supporterId) {
        await api.put(`/api/admin/supporter/${supporterId}`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    },
    async updatePassword(nuxtApp, supporter_id, param) {
      const data = await api.put(`/api/admin/supporter/${supporter_id}/password`,param,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
      })
    }
}

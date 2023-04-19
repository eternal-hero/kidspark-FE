import api from "@/services/admin-api";
import API_URL from "~/const/api";

export default {
  async getChildInfo(nuxtApp) {
    const { data } = await api.get(`/api/guardians/children`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if (data) {
      return data.data;
    } else {
      return data.status;
    }
  },
  async storeChildFromGuardianData(nuxtApp,guardian_data) {
    const { data } = await api.post(`/api/guardians/children`, guardian_data,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.status;
  },
  async updateAll(nuxtApp,guardian_data) {
    const { data } = await api.put(`/api/guardians/children_update_all`, guardian_data,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.status;
  }

};

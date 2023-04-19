import api from "@/services/admin-api";
import API_URL from "~/const/api";

export default {
  async getChildFromGuardianId(nuxtApp,guardian_id) {
    const { data } = await api.get(API_URL.GUARDIAN_CHILDREN_API.replace(':guardian_id:', guardian_id),{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },

  async updateChildFromGuardianId(nuxtApp,guardian_id, param) {
    const {data} = await api.put(API_URL.GUARDIAN_CHILDREN_API_UPDATE_All.replace(':guardian_id:', guardian_id), param,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.status;
  }
};

import api from "@/services/admin-api";
import API_URL from "~/const/api";

export default {
	async getGuardianById(nuxtApp,guardian_id) {
		const { data } = await api.get(`/api/admin/guardian/${guardian_id}/profiles`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data[0] || {
      self_introduction: '',
      title: '',
      near_line: '',
      near_station: '',
      means: 0,
      travel_time: '',
      is_publish: 0,
      rule: '',
      way_to_get_home: ''
    }
	},
	async UpdateGuardianProfile(nuxtApp, guardian_id, profile_data) {
		const { data } = await api.put(`/api/admin/guardian/${guardian_id}/profiles`, profile_data,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
		return data.status;
	},

  async createGuardianProfile(nuxtApp, guardian_id, profileData) {
    const { data } = await api.post(`/api/admin/guardian/${guardian_id}/profiles`, profileData, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
  }
}

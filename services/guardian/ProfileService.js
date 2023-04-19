import api from "@/services/supporter-api";

const emptyGuardianProfile = {
  'guardian_user_id': '',
  'inoculation_status_id': '',
  'title': '',
  'self_introduction': '',
  'near_line': '',
  'near_station': '',
  'means': '',
  'travel_time': '',
  'is_publish': '',
  'rule': '',
  'way_to_get_home': '',
}
export default {
  async getProfile(nuxtApp) {
    const { data } = await api.get(`/api/guardians/profile`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if (data.data) {
      return data.data;
    }
    return {...emptyGuardianProfile};
  },
  async updateProfile(nuxtApp, dataValue) {
    const { data } = await api.put(`/api/guardians/profile`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
    return data
  },
  async createProfile(nuxtApp, guardianProfile) {
    const { data } = await api.post(`/api/guardians/profile`, guardianProfile,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
    return data.data;
  }
}

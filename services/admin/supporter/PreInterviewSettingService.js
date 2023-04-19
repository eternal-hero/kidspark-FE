import api from "@/services/admin-api";

const emptyPreInterview = {
  'supporter_user_id': '',
  'initial_meeting_comment': '',
  'web_meeting_fee': '',
  'facetoface_meeting_fee': '',
}
export default {
  async getPreInterviewSetting(nuxtApp,supporterUserId) {
    const { data } = await api.get(`/api/admin/supporter/${supporterUserId}/pre_interview`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if (data.data) {
      return data.data;
    }
    return {...emptyPreInterview};
  },

  async updatePreviewSetting(nuxtApp,formData, supporterUserId) {
    const { res } = await api.put(`/api/admin/supporter/${supporterUserId}/pre_interview`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },

  async createPreviewSetting(nuxtApp, formData, supporterUserId) {
    const { res } = await api.post(`/api/admin/supporter/${supporterUserId}/pre_interview`, formData, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  }
};

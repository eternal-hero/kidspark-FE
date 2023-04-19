import api from "@/services/supporter-api";

const emptyPreInterview = {
  'initial_meeting_comment': '',
  'web_meeting_fee': '',
  'facetoface_meeting_fee': '',
}

export default {
  async getPreInterview(nuxtApp) {
    const { data } = await api.get(`/api/supporter/pre_interview`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if (data.data) {
      return data.data;
    }
    return {...emptyPreInterview};
  },
  async updatePreInterview(nuxtApp, dataValue) {
    const { data } = await api.put(`/api/supporter/pre_interview`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
    return data
  },

  async createPreviewSetting(nuxtApp, formData, supporterUserId) {
    const { data } = await api.post(`/api/supporter/pre_interview`, formData, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  }
}

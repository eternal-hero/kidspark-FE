import api from "@/services/supporter-api";

export default {
  async getSupporter(nuxtApp) {
    const { data } = await api.get(`/api/supporter/`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getProfile(nuxtApp) {
    const { data } = await api.get(`/api/supporter/profiles`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getInoculation(nuxtApp,inoculationId) {
    const { data } = await api.get(`/api/supporter/common/inoculation/${inoculationId}`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getApplication(nuxtApp) {
    const { data } = await api.get(`/api/supporter/application/documents`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data.filter(e => e.status == 1)
  },
  async getSupportArea(nuxtApp) {
    const { data } = await api.get(`/api/supporter/support_area`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getPreInterview(nuxtApp) {
    const { data } = await api.get(`/api/supporter/pre_interview`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getSettingSupport(nuxtApp) {
    const { data } = await api.get(`/api/supporter/settings/supports`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getSitter(nuxtApp) {
    const { data } = await api.get(`/api/supporter/settings`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getChildbirth(nuxtApp) {
    const { data } = await api.get(`/api/supporter/childbirth_care/settings`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getSickChildCare(nuxtApp) {
    const { data } = await api.get(`/api/supporter/sick_child_care/settings`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
  async getHousekeeper(nuxtApp) {
    const { data } = await api.get(`/api/supporter/housekeeping`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data
  },
}

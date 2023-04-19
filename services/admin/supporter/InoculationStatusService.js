import api from "@/services/admin-api";

export default {
  async getInoculationStatus(nuxtApp, inoculationStatusId) {
    if (!inoculationStatusId) {
      return {
        is_publish: 0,
        inoculation_times: 0,
        inoculation_on: null
      }
    }
    try{
      const {data} = await api.get(`/api/admin/common/inoculation/${inoculationStatusId}`,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
      })
      return data.data;
    } catch (e) {
      let data
      if (e.response && e.response.status === 404) {
        data = await this.setDefault()
      }
      return data.data;
    }
  },

  async createInoculationStatus(nuxtApp, dataValue) {
    const { data } = await api.post(`/api/admin/common/inoculation`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },

  async updateInoculationStatus(nuxtApp, inoculationStatusId, dataValue) {
    const { data } = await api.put(`/api/admin/common/inoculation/${inoculationStatusId}`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.status;
  },

  async setDefault() {
    let data = {}
    data.data= {}
    data.data.is_publish = 0
    data.data.inoculation_times = 0
    data.data.inoculation_on = null
    return data;
  }
};

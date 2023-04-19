import api from "@/services/supporter-api";

let emptyInoculationInfo = {
  inoculation_times: '',
  inoculation_on: '',
  is_publish: ''
}

export default {

  async getInoculationfile(nuxtApp, inoculation_id) {
    if (inoculation_id > 0) {
      const { data } = await api.get(`/api/guardians/common/inoculation/${inoculation_id}`,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
      });
      if (data.data) {
        return data.data;
      }
    }
    return {...emptyInoculationInfo};
  },
  async updateInoculationfile(nuxtApp,inoculation_id, dataValue) {
    const { data } = await api.put(`/api/guardians/common/inoculation/${inoculation_id}`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
    return data
  },

  async createInoculation(nuxtApp, inoculationData) {
    const { data } = await api.post(`/api/guardians/common/inoculation/`, inoculationData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
    return data.data;
  }
}

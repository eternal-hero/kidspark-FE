import api from "@/services/supporter-api";

const emptySupportSetting = {
  'is_supporter': false,
  'single_fee': 0,
  'regular_fee': 0,
  'special': '',
  'service': '',
  'potential_entrant': '',
  'minimum_age_limit': '',
  'maximum_age_limit': '',
}

const emptyChildBirthCareSetting = {
  'is_childbirth_care': false,
  'single_fee': 0,
  'regular_fee': 0,
  'special': '',
  'service': ''
}

const emptySickChildCareSetting = {
  'is_sick_child_care': false,
  'single_fee': 0,
  'regular_fee': 0,
  'special': '',
  'service': ''
}

const emptyHousekeepingSetting = {
  'is_housework': false,
  'single_fee': 0,
  'regular_fee': 0,
  'special': '',
  'service': ''
}

export default {
  // シッター設定
  async getSitterSetting(nuxtApp) {
    try {
        const {data} = await api.get(`/api/supporter/settings`, {
          headers: {
            Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
          }
        });
        return data.data;
    } catch (e) {
        return {...emptySupportSetting};
    }
  },
  async createSitterSetting(nuxtApp,formData) {
    const res = await api.post(`/api/supporter/settings`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
  async updateSitterSetting(nuxtApp,formData) {
    const res = await api.put(`/api/supporter/settings`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
  async getSettingOptions(nuxtApp,settingId) {
    const { data } = await api.get(`/api/supporter/settings/options`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      },
      params: {
        settings_id: settingId,
      }
    });
    return data.data;
  },
  async updateAllSettingOptions(nuxtApp,formData) {
    const res = await api.put(`/api/supporter/settings/options_all`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
  async getSitterSettingSupports(nuxtApp) {
    const { data } = await api.get(`/api/supporter/settings/supports`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if(data == null) return
    return data.data;
  },
  async createSitterSettingSupports(nuxtApp,formData) {
    const res = await api.post(`/api/supporter/settings/supports`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
  async updateSitterSettingSupports(nuxtApp,formData) {
    const res = await api.put(`/api/supporter/settings/supports`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
  async getSitterSettingExperience(nuxtApp) {
    const { data } = await api.get(`/api/supporter/settings/experience`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if(data == null) return
    return data.data[0];
  },
  async createSitterSettingExperience(nuxtApp,formData) {
    const res = await api.post(`/api/supporter/settings/experience`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
  async updateSitterSettingExperience(nuxtApp,formData) {
    const res = await api.put(`/api/supporter/settings/experience`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },

  // 家事代行設定
  async getHouseKeepingSetting(nuxtApp) {
    try {
        const {data} = await api.get(`api/supporter/housekeeping`, {
          headers: {
            Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
          }
        });
        return data.data;
      } catch (e) {
        return emptyHousekeepingSetting;
      }
  },
  async createHouseKeepingSetting(nuxtApp,formData) {
    const { data } = await api.post(`api/supporter/housekeeping`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },
  async updateHouseKeepingSetting(nuxtApp,formData) {
    const { data } = await api.put(`api/supporter/housekeeping`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },

  async getHouseKeepingSupports(nuxtApp) {
    const { data } = await api.get(`api/supporter/housekeeping/supports`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if(data == null) return
    return data.data[0];
  },
  async createHouseKeepingSupports(nuxtApp,formData) {
    const data = await api.post(`api/supporter/housekeeping/supports`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data;
  },
  async updateHouseKeepingSupports(nuxtApp,formData) {
    const data = await api.put(`api/supporter/housekeeping/supports`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data;
  },

  // 病児保育設定 API
  async getSickChildCareSetting(nuxtApp){
    try {
        const {data} = await api.get(`api/supporter/sick_child_care/settings`, {
          headers: {
            Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
          }
        });
        return data.data;
      } catch (e) {
        return emptySickChildCareSetting;
      }
  },

  async updateSickChildCareSetting(nuxtApp,formData){
    const { data } = await api.put(`api/supporter/sick_child_care/settings`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },

  // 産前産後設定
  async getChildbirthSetting(nuxtApp){
    try {
        const {data} = await api.get(`api/supporter/childbirth_care/settings`, {
          headers: {
            Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
          }
        });
        return data.data;
      } catch (e) {
        return {...emptyChildBirthCareSetting};
      }
  },

  async updateChildbirthSetting(nuxtApp,formData){
    const { data } = await api.put(`api/supporter/childbirth_care/settings`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },
};

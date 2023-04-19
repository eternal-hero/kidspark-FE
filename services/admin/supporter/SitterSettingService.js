import api from "@/services/admin-api";
import API from "@/const/api.js"

export default {
  async getSetting(nuxtApp, id) {
    const { data } = await api.get(API.SUPPORTER_SITTER_SETTING.replace(':supporter_user_id:', id), {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });

    if (data == null) {
      return { setting: null }
    }

    return { setting: data.data };
  },

  async updateSetting(nuxtApp, supporter_id, setting) {
    const result = {
      data: null,
      statusCode: -1,
      errors: [],
    }
    if (setting.id == null) {
      await api.post(API.SUPPORTER_SITTER_SETTING.replace(':supporter_user_id:', supporter_id), setting, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
      })
    } else {
      await api.put(API.SUPPORTER_SITTER_SETTING.replace(':supporter_user_id:', supporter_id), setting, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
      })
        .then((response) => {
          console.log(response)
          result.statusCode = response.status
          // 成功code = 200
          result.data = response.data.data
        })
        .catch((error) => {
          // サーバーエラー
          const errResponse = error.response
          result.statusCode = errResponse.status
        })
    }
    return result;
  },

  async getSettingOptions(nuxtApp,supporter_id) {
    const { data } = await api.get(`/api/admin/supporter/${supporter_id}/settings/options`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      },
      params: {
        settings_id: 1,
      }
    });
    return data.data;
  },
  async updateAllSettingOptions(nuxtApp,supporter_id,formData) {
    const res = await api.put(`/api/admin/supporter/${supporter_id}/settings/options_all`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },

  async getSettingSupports(nuxtApp,supporter_id) {
    const { data } = await api.get(`/api/admin/supporter/${supporter_id}/settings/supports`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if(data == null) return null;
    return data.data;
  },
  async createSettingSupports(nuxtApp,supporter_id,formData) {
    const res = await api.post(`/api/admin/supporter/${supporter_id}/settings/supports`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
  async updateSettingSupports(nuxtApp,supporter_id,formData) {
    const res = await api.put(`/api/admin/supporter/${supporter_id}/settings/supports`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },

  async getSettingExperience(nuxtApp,supporter_id) {
    const { data } = await api.get(`/api/admin/supporter/${supporter_id}/settings/experience`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if(data == null) return null;
    return data.data[0];
  },
  async createSettingExperience(nuxtApp,supporter_id,formData) {
    const res = await api.post(`/api/admin/supporter/${supporter_id}/settings/experience`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
  async updateSettingExperience(nuxtApp,supporter_id,formData) {
    const res = await api.put(`/api/admin/supporter/${supporter_id}/settings/experience`, formData,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return res;
  },
};

import api from "~/services/admin-api.js";
import API from "~/const/api.js";

export default {
  async getSetting(nuxtApp,supporter_id) {
    const { data } = await api.get(API.SUPPORTER_SICK_CHILD_CARE_API.replace(':supporter_user_id:', supporter_id),{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    if(data == null) {
        return {setting : null}
    }

    return {setting : data.data}
  },

  async updateSetting(nuxtApp, supporter_id, setting) {
    const result = {
      data: null,
      statusCode: -1,
      errors: [],
    }
    if(setting.id == null) {
        await api.post(API.SUPPORTER_SICK_CHILD_CARE_API.replace(':supporter_user_id:', supporter_id), setting,{
          headers: {
            Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
          }
        });
    } else {
        await api.put(API.SUPPORTER_SICK_CHILD_CARE_API.replace(':supporter_user_id:', supporter_id), setting,{
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

  async getOptions(nuxtApp,supporter_id, setting) {
    const { data } = await api.get(API.SUPPORTER_SETTING_OPTIONS.replace(':supporter_user_id:', supporter_id), {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      },
      settings_id : settings_id
    });

    return data.data;
  }
};

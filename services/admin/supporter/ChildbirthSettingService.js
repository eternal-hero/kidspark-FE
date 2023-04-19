import api from "@/services/admin-api";
import API from "@/const/api.js"

export default {
  async getSetting(nuxtApp,id) {
    const { data } = await api.get(API.SUPPORTER_CHILDBIRTH_SETTING_API.replace(':supporter_user_id:', id),{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });

    if (data == null) {
      return {setting : null}
    }

    return {setting : data.data};
  },

  async updateSetting(nuxtApp,supporter_id, setting) {
    const result = {
      data: null,
      statusCode: -1,
      errors: [],
    }
    if(setting.id == null) {
        await api.post(API.SUPPORTER_CHILDBIRTH_SETTING_API.replace(':supporter_user_id:', supporter_id), setting,{
          headers: {
            Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
          }
        })
    } else {
        await api.put(API.SUPPORTER_CHILDBIRTH_SETTING_API.replace(':supporter_user_id:', supporter_id), setting,{
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

};

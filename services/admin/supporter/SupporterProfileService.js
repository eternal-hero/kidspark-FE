import api from "@/services/admin-api";
import API_URL from "~/const/api";

export default {
  async getSupporterProfile(nuxtApp, supporterId) {
    try {
      const { data } = await api.get(`/api/admin/supporter/${supporterId}/profiles`,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
      });
      return data.data;
    } catch (e) {
      let data
      if (e.response && e.response.status === 404) {
        data = await this.setDefault()
      }
      return data.data;
    }
  },
  async getListSupporter(nuxtApp, current_page = null, SearchKeyword = null) {
    if (current_page == null) current_page = 1;
    if (SearchKeyword == null) {
      const { data } = await api.get(API_URL.SUPPORTER_LIST_API, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        },
        params: {
          page: current_page
        }
      });
      return data.data;
    } else {
      const { data } = await api.get(API_URL.SUPPORTER_LIST_API, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        },
        params:
        {
          supporter: SearchKeyword[0].username,
          prefecture: SearchKeyword[0].prefecture,
          gender: SearchKeyword[0].gender,
          is_housework: SearchKeyword[0].housework,
          is_childbirth_care: SearchKeyword[0].childbirth,
          is_sick_child_care: SearchKeyword[0].sickChildren,
          is_supporter: SearchKeyword[0].sitter,
          page: current_page
        }
      });
      return data.data;
    }
  },

  async getListSupporterExcelData(nuxtApp,) {
    const { data } = await api.get(API_URL.SUPPORTER_LIST_API, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },
  async createSupporterProfile(nuxtApp,supporterId, dataValue) {
    const { data } = await api.post(`/api/admin/supporter/${supporterId}/profiles`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.status;
  },
  async updateSupporterProfile(nuxtApp,supporterId, dataValue) {
    const { data } = await api.put(`/api/admin/supporter/${supporterId}/profiles`, dataValue,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.status;
  },

  async setDefault() {
    let data = {}
    data.data = {
      supporter_user_id : null,
      inoculation_status_id : null,
      title : null,
      self_introduction : null,
      near_line : null,
      near_station : null,
      means : null,
      travel_times : null,
      is_publish : null,
      time_between_appointment : null,
      minimum_request_time : null,
      reply_time : null,
      is_foreign_language : null,
    }

    return data;

  }
}

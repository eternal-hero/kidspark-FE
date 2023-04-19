import api from "@/services/admin-api";
import API_URL from "~/const/api";

export default {
  async getListGuardian(nuxtApp,current_page = null, SearchKeyword = null) {
    if (current_page == null) current_page = 1;
    if (SearchKeyword == null) {
      const { data } = await api.get(API_URL.GUARDIAN_LIST_API, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        },
        params: {
          page: current_page
        }
      });
      return data.data;
    } else {
      const paramdata = {
        'user': SearchKeyword.username,
        'prefecture': SearchKeyword.prefecture,
        'is_camera': SearchKeyword.is_camera,
        'emergency_contact_phone_number': SearchKeyword.emergencyContactPhoneNumber,
        'child_age': SearchKeyword.yearMonthRange
      }
      if (SearchKeyword.username == '') {
        delete paramdata.user
      }
      if (SearchKeyword.prefecture == '') {
        delete paramdata.prefecture
      }
      if (SearchKeyword.is_camera == '') {
        delete paramdata.is_camera
      }
      if (SearchKeyword.emergency_contact_phone_number == '') {
        delete paramdata.emergency_contact_phone_number
      }
      const child_age = SearchKeyword.yearMonthRange;
      if (child_age.length < 1) {
        delete paramdata.child_age;
      }
      const { data } = await api.get(API_URL.GUARDIAN_LIST_API, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        },
        params: paramdata
      });
      return data.data;
    }
  },

  async getListGuardianExcelData(nuxtApp,) {
    const { data } = await api.get(API_URL.GUARDIAN_LIST_API,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },

  async getGuardianInfo(nuxtApp,guardian_id) {
    const { data } = await api.get(API_URL.GUARDIAN_INFO_API.replace(":id:", guardian_id),{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
});
    return data.data;
  },

  async createGuardianInfo(nuxtApp,param) {
    const { data } = await api.post(API_URL.GUARDIAN_INFO_API, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        },
      params: param,
    });
    return data.status;
  },

  async updateGuardianInfo(nuxtApp,guardian_id, param) {
    const { data } = await api.put(API_URL.GUARDIAN_INFO_API.replace(':id:', guardian_id), param,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data;
  },

  async updatePassword(nuxtApp, guardian_id, param) {
    const data = await api.put(`/api/admin/guardian/${guardian_id}/password`,param,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
  }
}

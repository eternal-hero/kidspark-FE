import api from "@/services/api";

export default {
	async storeTmpGuardianUser(mailAddress) {
    const params = {mail_address: mailAddress};
		const { data } = await api.post(`/api/before_login/guardian/tmp_user`,params);
		if (data) {
			return data.data.mail_address;
		} else {
      console.log(data)
			return data.status;
		}

	},
	async emailVerified(mailAddress,authCode) {
    const params = {
      mail_address: mailAddress,
      auth_code: authCode,
    };
		const { data } = await api.put(`/api/before_login/guardian/tmp_user/email_verified`,params);
    if (data) {
			return data.data;
		} else {
      console.log(data)
			return data.status;
		}
	},
	async updateUserInfo(userInfo,authCode) {
    const params = {
      first_name:userInfo.first_name,
      last_name:userInfo.last_name,
      first_kana:userInfo.first_kana,
      last_kana:userInfo.last_kana,
      nickname:userInfo.nickname,
      gender:userInfo.gender,
      relation:userInfo.relation,
      birthday:userInfo.birthday,
      post_code:userInfo.post_code,
      prefecture:userInfo.prefecture,
      municipality:userInfo.municipality,
      street_name:userInfo.street_name,
      building:userInfo.building,
      contact_phone_number:userInfo.contact_phone_number,
      mail_address:userInfo.mail_address,
      password:userInfo.password
    };
		const { data } = await api.put(`/api/before_login/guardian/tmp_user`,params,{
      headers: {
        "Auth-Code-For-Pre-Guardian-User": authCode
      }
    });
    if (data) {
			return data.data;
		} else {
      console.log(data)
			return data.status;
		}
	},
  async storeIdentityVerification(mailAddress,authCode,formData) {
		const { data } = await api.post(`/api/before_login/guardian/user`,formData,{
      headers: {
        "Auth-Code-For-Pre-Guardian-User": authCode
      }
    });
    if (data) {
			return data.data;
		} else {
      console.log(data)
			return data.status;
		}
	},
  async resendMail(mailAddress) {
    const params = {mail_address:mailAddress}
		const { data } = await api.put(`/api/before_login/guardian/tmp_user/resend_auth_code`,params);
    if (data) {
      console.log(data)
			return data.data;
		} else {
      console.log(data)
			return data.status;
		}
	},
}

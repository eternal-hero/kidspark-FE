export const state = () => ({
  registeredMailAddress: null,
  tmpUserInfo:{
    first_name:"",
    last_name:"",
    first_kana:"",
    last_kana:"",
    nickname:"",
    gender:1,
    relation:"",
    birthday:"",
    post_code:"",
    prefecture:"",
    municipality:"",
    street_name:"",
    building:"",
    contact_phone_number:"",
    mail_address:"",
    password:""
  },
  authCode: null
});

export const mutations = {
  registeredMailAddress(state, registeredMailAddress) {
    state.registeredMailAddress = registeredMailAddress
  },
  tmpUserInfo(state, tmpUserInfo) {
    state.tmpUserInfo = tmpUserInfo
  },
  authCode(state, authCode) {
    state.authCode = authCode
  }
}

export const actions = {
  registeredMailAddress({ commit }, registeredMailAddress) {
    commit('registeredMailAddress', registeredMailAddress)
  },
  tmpUserInfo({ commit }, tmpUserInfo) {
    commit('tmpUserInfo', tmpUserInfo)
  },
  authCode({ commit }, authCode) {
    commit('authCode', authCode)
  }
}

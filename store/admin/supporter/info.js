
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService.js";

export const state = () => ({
    supporter: null,
})

export const getters = {
    supporter: state => state.supporter,
}

export const mutations = {
    setSupporter(state, { supporter} ) {
        state.supporter = supporter;
    },
}

export const actions  = {
  async initData({ commit, state }, {supporter_id, context}) {
        if(state.supporter != null && state.supporter.id == supporter_id) {
            return state.supporter;
        }

        try{
          const result = await SupporterInfoService.getSupporterInfo(context, supporter_id);
          if(result) {
                commit('setSupporter', { supporter: result});
            } else {
                commit('setSupporter', { supporter: null});
            }
        } catch (err) {
            console.log(err.response);
            return false;
        }
    },
    async initDataWithNuxtApp({commit, state}, nuxtApp) {
        if(state.supporter != null && state.supporter.id == nuxtApp.route.params.id) {
            return state.supporter;
        }

        try{
            const result = await SupporterInfoService.getSupporterInfo(nuxtApp, nuxtApp.route.params.id);
            if(result) {
                commit('setSupporter', { supporter: result});
            } else {
                commit('setSupporter', { supporter: null});
            }
        } catch(err) {
            console.log(err.response);
            return false;
        }
    },
}

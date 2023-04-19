import api from "@/services/supporter-api";

export default {
  async getSupporterIdentification(nuxtApp) {
    const { data } = await api.get(`/api/supporter/identification`,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
    return data.data;
  },
}

import api from "@/services/guardian-api";

export default {
  async updatePassword(nuxtApp, formData) {
    try {
      const { data } = await api.put(
        `/api/guardians/password`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + nuxtApp.$cookies.get("auth_token"),
          },
        }
      );
      alert("OK");
    } catch (e) {
      alert("NG");
    }
  },
};

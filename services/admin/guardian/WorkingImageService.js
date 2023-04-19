import api from "@/services/admin-api";
import API_URL from "~/const/api";

export default {
	async getListWorkingImage(nuxtApp,supporter_user_id) {
		const {data} = await api.get(API_URL.SUPPORTER_WORKS_IMAGE_LIST_API.replace(':supporter_user_id:', supporter_user_id),{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
		return data.data;
	},

	async getWorkingImageByID(nuxtApp,supporter_user_id, works_image_id) {
		const {data} = await api.get(API_URL.SUPPORTER_WORKS_IMAGE_API.replace(':supporter_user_id:', supporter_user_id).replace(':works_image_id:',works_image_id),{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
		return data.data;
	},

	async createWorkingImageByID(nuxtApp,supporter_user_id, data, config) {
		const {data} = await api.post(API_URL.SUPPORTER_WORKS_IMAGE_POST_API.replace(':supporter_user_id:', supporter_user_id), data, config,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
		return data.status;
	},

	async updateWorkingImageByID(nuxtApp,supporter_user_id, works_image_id, data, config) {
		const {data} = await api.put(API_URL.SUPPORTER_WORKS_IMAGE_API.replace(':supporter_user_id:', supporter_user_id).replace(':works_image_id:',works_image_id), data, config,{
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });
		return data.status;
	},
}

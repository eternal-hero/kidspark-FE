import api from "@/services/admin-api";
import API_URL from "~/const/api";

export default {
	async getListProfileImage(nuxtApp,guardian_id) {
		const { data } = await api.get(API_URL.GUARDIAN_PROFILE_IMAGE_LIST_API.replace(':guardian_id:', guardian_id),{
			headers: {
				Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
			}
		});
		return data.data;
	},
	async uploadImage(nuxtApp,id, file) {
		const params = new FormData();
		params.set('file', file)
		console.log("api", params);
		const { data } = await api.post(API_URL.GUARDIAN_PROFILE_IMAGE_UPLOAD_FILE_API.replace(':file_path_id:', 'guardian_profile_images'), params,{
			headers: {
				Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
			}
		});
		return data.data;
	},

	async updateProfileImageById(nuxtApp,guardian_id, image_id, params) {
		console.log("updateApi", guardian_id, image_id, params)
		const { data } = await api.put(API_URL.GUARDIAN_PROFILE_IMAGE_UPDATE_BY_ID.replace(':guardian_id:', guardian_id).replace(':id:', image_id), params,{
			headers: {
				Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
			}
		});
		return data.data;
	},

	async creatProfileImage(nuxtApp,guardian_id, params) {
		console.log("creatApi", guardian_id, params)
		const { data } = await api.post(API_URL.GUARDIAN_PROFILE_IMAGE_CREATE.replace(':guardian_id:', guardian_id), params,{
			headers: {
				Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
			}
		});
		return data.data;
	},
	async deleteProfileImageById(nuxtApp,guardian_id, image_id) {
		console.log("deleteAPI", guardian_id, image_id)
		const { data } = await api.delete(API_URL.GUARDIAN_PROFILE_IMAGE_DELETE_BY_ID.replace(':guardian_id:', guardian_id).replace(':id:', image_id),{
			headers: {
				Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
			}
		});
		return data.data;
	},

}
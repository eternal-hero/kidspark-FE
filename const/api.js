export default class Api {
	static API_URL = '/api';
	static IMG_URL = '/assets';

	//Guardian
	static GUARDIAN_LIST_API = `${Api.API_URL}/admin/guardian/`;
	static GUARDIAN_INFO_API = `${Api.API_URL}/admin/guardian/:id:`;
	static GUARDIAN_PROFILE_API = `${Api.API_URL}/admin/guardian/:guardian_id:/guardian_profiles`;
	static GUARDIAN_CHILDREN_API = `${Api.API_URL}/admin/guardian/:guardian_id:/children`;
	static GUARDIAN_PROFILE_IMAGE_LIST_API = `${Api.API_URL}/admin/guardian/:guardian_id:/profiles/images`;
	static GUARDIAN_PROFILE_IMAGE_UPLOAD_FILE_API = `${Api.API_URL}/admin/file/:file_path_id:/upload`;
	static GUARDIAN_PROFILE_IMAGE_UPDATE_BY_ID = `${Api.API_URL}/admin/guardian/:guardian_id:/profiles/images/:id:/`;
	static GUARDIAN_PROFILE_IMAGE_CREATE = `${Api.API_URL}/admin/guardian/:guardian_id:/profiles/images/`;
	static GUARDIAN_PROFILE_IMAGE_DELETE_BY_ID = `${Api.API_URL}/admin/guardian/:guardian_id:/profiles/images/:id:/`;
	static GUARDIAN_CHILDREN_API_UPDATE_All = `${Api.API_URL}/admin/guardian/:guardian_id:/children_update_all`;

	//Supporter
	static SUPPORTER_APPLICATION_DOCUMENT_API =  `${Api.API_URL}/admin/supporter/:supporter_user_id:/application/documents/`;
	static SUPPORTER_LIST_API = `${Api.API_URL}/admin/supporter/`;
	static SUPPORTER_WORKS_IMAGE_LIST_API = `${Api.API_URL}/admin/supporter/:supporter_user_id:/works_image`;
	static SUPPORTER_WORKS_IMAGE_API = `${Api.API_URL}/admin/supporter/:supporter_user_id:/works_image/:works_image_id:`;
	static SUPPORTER_WORKS_IMAGE_POST_API =  `${Api.API_URL}/admin/supporter/:supporter_user_id:/works_image`;
	static SUPPORTER_PROFILE_API =  `${Api.API_URL}/admin/supporter/:supporter_user_id:/profiles`;
	static UPLOAD_FILE = `${Api.API_URL}/admin/file/:file_path_id:/upload`;
	static SUPPORTER_SITTER_SETTING = `${Api.API_URL}/admin/supporter/:supporter_user_id:/settings`
	static SUPPORTER_SICK_CHILD_CARE_API = `${Api.API_URL}/admin/supporter/:supporter_user_id:/sick_child_care/settings`;
	static SUPPORTER_SETTING_OPTIONS = `${Api.API_URL}/admin/supporter/:supporter_user_id:/settings/options`;
	static SUPPORTER_HOUSEKEEPING_SETTING = `${Api.API_URL}/admin/supporter/:supporter_user_id:/housekeeping`;
	static SUPPORTER_CHILDBIRTH_SETTING_API =  `${Api.API_URL}/admin/supporter/:supporter_user_id:/childbirth_care/settings`;
}
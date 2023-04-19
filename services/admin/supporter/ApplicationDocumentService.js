import api from "@/services/admin-api";
import API_URL from "~/const/api";

export default {
  async getApplicationDocumentsBySupporterId(nuxtApp, supporter_id, query_params) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      },
      params: query_params
    }
    const {data} = await api.get(
      `/api/admin/supporter/${supporter_id}/application/documents/`,
      config
    )
    return {
      applications: data.data,
      paginationData: data.meta
    }
  },

  async getApplicationDocumentList(nuxtApp, page = 1,condition = null) {
    const {data} = await api.get(
      `api/admin/supporter/application/documents/list`,{
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token'),
        },
        params:{
          page: page,
          request_at_from: condition.request_at_from,
          request_at_to: condition.request_at_to,
          file_id: condition.file_id,
          status: condition.status,
          category: condition.category,
          supporter_info: condition.supporter_info,
          expiration_on: condition.expiration_on,
        }
      });
    return data.data;
  },

  async getDocumentById(nuxtApp, supporter_user_id, document_id) {
    const {data} = await api.get( `/api/admin/supporter/${supporter_user_id}/application/documents/${document_id}`, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    });

    return data.data;
  },

  async uploadApplicationFile(nuxtApp, supporterId, formWithFile) {
    const { data } = await api.post(`/api/admin/supporter/${supporterId}/application/documents/upload`, formWithFile, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
      }
    })
    return data.data;
  },
  async updateApplicationById(nuxtApp, supporterId, applicationId, form) {
    const { data } = await api.put(`api/admin/supporter/${supporterId}/application/documents/${applicationId}`, form, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token'),
      }
    });
    return data.data;
  },
  async uploadImage(nuxtApp, form) {
    const {data} = await api.post(API_URL.UPLOAD_FILE.replace(':file_path_id:', 'supporter_application_documents'), form, {
      headers: {
        Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token'),
        'content-type': 'multipart/form-data'
      }
    })

    return '/' + data.data
  },

  async createDocument(nuxtApp, supporter_user_id, doc) {
    const {data} = await api.post(
      API_URL.SUPPORTER_APPLICATION_DOCUMENT_API.replace(':supporter_user_id:', supporter_user_id), doc, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
      }
    );
    return data.data;
  },

  async updateDocument(nuxtApp, supporter_user_id, doc) {
    const {data} = await api.put(
      API_URL.SUPPORTER_APPLICATION_DOCUMENT_API.replace(':supporter_user_id:', supporter_user_id) + doc.id, doc, {
        headers: {
          Authorization: 'Bearer ' + nuxtApp.$cookies.get('auth_token')
        }
      }
    );
    return data.data;
  },
}

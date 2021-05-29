import axios from "axios";
export const VERIFY_LENGTH = 6;
// export const API_BASE_URL = "http://127.0.0.1:8000/"
export const API_BASE_URL = "http://172.17.3.149/"
axios.defaults.baseURL=API_BASE_URL;

export const API_UPLOAD_DOC_URL = "api/account/upload-documents"
export const API_EMAIL_CHECK_URL = "api/account/check-existence"
export const API_LOGIN_URL = "api/account/login"
export const API_EMAIL_VERIFY_URL = "api/account/send-email"
export const API_SIGNUP_URL = "api/account/register"
export const API_TOKEN_URL = "api/token/"
export const API_PROFILE_URL = "api/account/properties"
export const API_PROFILE_UPDATE_URL = "api/account/properties/update"
export const API_PROFILE_UPDATE_AVATAR_URL = "api/account/update_account_image"
export const API_PROFILE_SHOW_AVATAR_URL = "api/account/show_account_image"
export const API_SEARCH_USER_URL = "api/account/properties/all"
// export const API_UPLOAD_IMAGE_URL = "api/villa/admin/remove-waste-images/"
export const API_UPLOAD_DOC_RESIDANCE_URL = "api/villa/user/documents/" //contains typo we know.
export const API_UPLOAD_IMAGE_URL = "api/villa/user/images/"
export const API_CHECK_DOC_URL = "api/account/check-document-existence"
export const API_ADD_VILLA_URL = "api/villa/user/"
export const API_VILLA_PROFILE_URL = "api/villa/user/"
export const API_SEARCH_VILLA = 'api/villa/search/'
export const API_RESERVE_VILLA = 'api/villa/user/register/'
export const API_GET_RESERVED_DATES = 'api/villa/calendar/show/'





export const STORAGE_KEY = "sweet-home"

import axios from "axios";
export const VERIFY_LENGTH = 6;

const API_BASE_URL = "http://softcheetahs.herokuapp.com/"
axios.defaults.baseURL=API_BASE_URL;


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

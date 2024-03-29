import {API_URL} from '@env';
export const REST_API_URL = 'http://192.168.1.80:8080';
export const VIDEO_API_URL = 'http://192.168.1.10:3030';
export const CHAT_SERVER_URL = 'https://7640-27-67-41-193.ap.ngrok.io';

//export const REST_API_URL = API_URL;
const INTERNET_CONNECTION_FAILED = 'Bạn đang offline';
const INTERNET_CONNECTION_SUCCESS = 'Bạn đang online';
const BLUE_COLOR = "#216fdb";
const LIKE_BLUE_COLOR = "#30a4f0";
const GRAY_COLOR_BACKGROUND = "#dbdbdd"
const GRAY_TEXT_COLOR = "#8c8d90"

export const COMMON_MESSAGE = {
    INTERNET_CONNECTION_FAILED,
    INTERNET_CONNECTION_SUCCESS
}
export const COMMON_COLOR = {
    BLUE_COLOR,
    LIKE_BLUE_COLOR,
    GRAY_COLOR_BACKGROUND,
    GRAY_TEXT_COLOR
}
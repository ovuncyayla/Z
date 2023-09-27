import PocketBase from 'pocketbase';
import { POCKET_BASE_URL } from '$env/static/private';

export const SESSION_COOKIE_KEY = "SESSION_ID"
export const pb = new PocketBase(POCKET_BASE_URL)

/**
 * @param {string} cookie 
 * @return {boolean}
 * */
export function is_session_valid(cookie) {
	pb.authStore.loadFromCookie(cookie)
	return pb.authStore.isValid
}

// /** @return {PocketBase} */
// export function pb() {
// 	return pbi
// }
//
// /** 
//  * @param {string} username
//  * @param {string} password
//  * @return {string} Session Cookie as string
//  * */
// export function authenticate(username, password) {
//
// 	let cookie = pb.authStore.exportToCookie()
// 	cookies.set('SESSION_ID', cookie);
// 	return pbi
// }



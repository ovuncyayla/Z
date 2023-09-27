import { SESSION_COOKIE_KEY, is_session_valid, pb } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {

	if (is_session_valid(cookies.get(SESSION_COOKIE_KEY))) {
		return
	}

	throw redirect(303, `/login?redirectTo=${url.pathname}`);

}

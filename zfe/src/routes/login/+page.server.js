import { redirect, fail } from '@sveltejs/kit';
import { SESSION_COOKIE_KEY, is_session_valid, pb } from '$lib/server/auth'

export const actions = {
	default: async ({ cookies, url, request }) => {

		const data = await request.formData();
		
	try {

			const authData = await pb.admins.authWithPassword(data.get("email"), data.get("password"));
			// const authData = await pb.collection("users").authWithPassword(data.get("email"), data.get("password"));
			console.log(authData);

			// TODO use sesion key to strore cookies server side
			// let sessionKey = crypto.randomBytes(32).toString("hex")
			// let token = pb.authStore.token
			// console.log(sessionKey, ": ", token)

			let cookie = pb.authStore.exportToCookie()
			cookies.set(SESSION_COOKIE_KEY, cookie);

		} catch (error) {
			console.log(error);
			return fail(403, { description: "Authentication Error" })
		}

		if (is_session_valid(cookies.get(SESSION_COOKIE_KEY))) {
			throw redirect(303, url.searchParams.get('redirectTo') ?? '/');
		}

		return fail(403, { description: "Unauthorized" })
	}

};

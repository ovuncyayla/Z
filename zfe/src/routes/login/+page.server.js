import { error, redirect, fail } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const actions = {
	default: async ({ cookies, url, request }) => {

		const data = await request.formData();
		
	try {

			const authData = await pb.admins.authWithPassword(data.get("email"), data.get("password"));
			// const authData = await pb.collection("users").authWithPassword(data.get("email"), data.get("password"));
			console.log(authData);

			console.log(pb.authStore.isValid);
			console.log(pb.authStore.token);
			console.log(pb.authStore.model.id);

		} catch (error) {
			console.log(error);
			return fail(400, { description: "Error while authenticating" })
		}

		if (pb.authStore.isValid) {
			cookies.set('logged_in', 'true', { path: '/' });
			cookies.set('toky', pb.authStore.token, { path: '/' });
			throw redirect(303, url.searchParams.get('redirectTo') ?? '/');
		}

		return fail(403, { description: "Unauthorized" })

	}
};

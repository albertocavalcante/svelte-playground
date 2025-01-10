import { auth } from "$lib/auth";
import type { ServerLoad } from "@sveltejs/kit";
 
export const load: ServerLoad = async ({ request }) => {
	const session = await auth.api.getSession({
		headers: request.headers,
	});
	if (!session) {
		return {
			status: 401,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				error: "Unauthorized",
			}),
		};
	}
	return session;
}

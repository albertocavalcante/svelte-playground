<script lang="ts">
	import { authClient } from '$lib/auth-client';
	const session = authClient.useSession();
</script>

<div>
	{#if session.data}
		<div>
			<p>
				{session?.data?.user.name}
			</p>
			<button
				on:click={async () => {
					await authClient.signOut();
				}}
			>
				Sign Out
			</button>
		</div>
	{:else}
		<button
			on:click={async () => {
				await authClient.signIn.oauth2({
					providerId: 'auth0',
					callbackURL: '/home'
				});
			}}
		>
			Continue with Auth0
		</button>
	{/if}
</div>

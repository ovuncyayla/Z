<script>
	export let data;
	export let form;
</script>

<main class="grid-3-coll">
	<article class="main-center">
	{#if form?.description}
		<p class="error">{form.description}</p>
	{/if}
		<div>
			<hgroup>
				<h1>Login</h1>
				<h2>Log me in</h2>
			</hgroup>
			<form method="POST">
				<input
					type="text"
					name="email"
					placeholder="Email"
					aria-label="Login"
					autocomplete="nickname"
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					aria-label="Password"
					autocomplete="current-password"
					required
				/>
				<!-- <fieldset> -->
				<!-- 	<label for="remember"> -->
				<!-- 		<input type="checkbox" role="switch" id="remember" name="remember" /> -->
				<!-- 		Remember me -->
				<!-- 	</label> -->
				<!-- </fieldset> -->
				<button type="submit" class="contrast">Login</button>
			</form>
		</div>
	</article>
</main>

<style>
	.grid-3-coll {
		display: grid;
		grid-template-columns: 0.6fr 1.8fr 0.6fr;
		grid-template-rows: 0.4fr 2.3fr 0.3fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'head-begin head-center head-end'
			'main-begin main-center main-end'
			'tail-begin tail-center tail-end';
	}

	.head-center {
		grid-area: head-center;
	}

	.main-center {
		grid-area: main-center;
	}

	.head-begin {
		grid-area: head-begin;
	}

	.head-end {
		grid-area: head-end;
	}

	.main-begin {
		grid-area: main-begin;
	}

	.main-end {
		grid-area: main-end;
	}

	.tail-center {
		grid-area: tail-center;
	}

	.tail-begin {
		grid-area: tail-begin;
	}

	.tail-end {
		grid-area: tail-end;
	}
</style>

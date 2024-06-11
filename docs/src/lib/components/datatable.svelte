<script lang="ts">
	export let data;

	let keys: any[] = [];

	$: {
		if (data && data.length > 0) {
			keys = Object.keys(data[0]);
		}
	}
</script>

<div class="datatable">
	<table>
		<thead>
			<tr>
				{#each keys as key}
					<th>{key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as item, index}
				<tr>
					{#each keys as key}
						<td>{@html item[key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.datatable {
		overflow-x: auto;
		max-height: 25rem;
		margin-top: 1.5rem;
		margin-bottom: 2.5rem;
		position: relative;

		table {
			border-collapse: collapse;
			width: 100%;
			display: table;
			position: relative;
			width: 100%;
			border-radius: 1rem;
			text-align: left;
			line-height: 1.25rem;

			:where(thead, tfoot) {
				white-space: nowrap;
				line-height: 1rem;
				font-weight: 700;
			}

			thead {
				background-color: var(--surface);
				top: 0;
				z-index: 1;
				position: sticky;
				tr {
					th {
						padding: 0.5rem 0.75rem;

						&:first-child {
							border-start-start-radius: 1rem;
							border-end-start-radius: 1rem;
						}
						&:last-child {
							border-start-end-radius: 1rem;
							border-end-end-radius: 1rem;
						}
					}
				}
			}

			tbody {
				th,
				td {
					vertical-align: middle;
				}

				td {
					padding: 0.5rem 0.75rem;
					font-weight: 400;
				}

				tr {
					line-height: 1.25rem;

					&:not(:last-child) {
						border-bottom: 1px solid var(--surface);
					}
				}
			}
		}
	}
</style>

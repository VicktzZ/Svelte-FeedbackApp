<script>
	import FeedbackList from './components/FeedbackList.svelte'

	import FeedbackStats from './components/FeedbackStats.svelte'

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sapiente enim vitae voluptatibus, eum nisi dolorum nostrum. At modi et sunt eos sit, molestias, vel blanditiis, suscipit voluptatum beatae eligendi?'
		},

		{
			id: 2,
			rating: 8,
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sapiente enim vitae voluptatibus, eum nisi dolorum nostrum. At modi et sunt eos sit, molestias, vel blanditiis, suscipit voluptatum beatae eligendi?'
		},

		{
			id: 3,
			rating: 9,
			text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sapiente enim vitae voluptatibus, eum nisi dolorum nostrum. At modi et sunt eos sit, molestias, vel blanditiis, suscipit voluptatum beatae eligendi?'
		}
	]

	$: count = feedback.length
	$: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length

	const deleteFeedback = e => {
		const itemId = e.detail
		feedback = feedback.filter(item => item.id != itemId)
	}
</script>

<main class="container">
	<FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>
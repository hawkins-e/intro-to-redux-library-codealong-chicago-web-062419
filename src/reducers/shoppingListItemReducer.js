export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	console.log(action)
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.items length %s', state.items.length)
			return Object.assign({}, state, {
				items: state.items.concat
				(state.items.length + 1)
			})

		default:
			console.log('Intial state.items length:%s',  
			state.items.length)
			return state;
	}
}

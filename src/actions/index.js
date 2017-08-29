import firebase from 'firebase'

export const loadInitialPrayers = () => {
	return (dispatch) => {
		firebase
			.database()
			.ref('Prayer')
			.on('value', snapshot => {
				let prayers = []
				let data = snapshot.val()['English']

				Object.entries(data).forEach(([key, value]) => {
					let prayer = {
						title: key,
						content: value
					}

					prayers.push(prayer)
				})
				console.log('prayers:', prayers)
				dispatch({ type: 'INITIAL_FETCH', payload: prayers })
			})
	}
}
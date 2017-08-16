const MORNING_RECITAL = 'Fugazi'

const initialState = {
  prayers: [
    {
      title: 'Morning Prayer',
      content: MORNING_RECITAL,
    },
    {
      title: 'Afternoon Prayer',
      content: MORNING_RECITAL,
    },
    {
      title: 'Evening Prayer',
      content: MORNING_RECITAL,
    },
    {
      title: 'Feast Day',
      content: MORNING_RECITAL,
    },
    {
      title: 'Novena',
      content: MORNING_RECITAL,
    },
    {
      title: 'All Saints',
      content: MORNING_RECITAL,
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
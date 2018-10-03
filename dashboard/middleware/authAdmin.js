export default function ({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: 'You are not authentified',
      statusCode: 401
    })
  }
    else if (store.state.authUser.rank !== 1) {
      console.log(store.state.authUser)
      error({
        message: 'You are not allowed ',
        statusCode: 403
      })
    }
  }
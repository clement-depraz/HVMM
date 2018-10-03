export default function ({ store, error }) {
    if (!store.state.authUser || store.state.authUser.isAdmin) {
      error({
        message: 'You are not allowed: you must be logged as Admin to access this page',
        statusCode: 403
      })
    }
  }
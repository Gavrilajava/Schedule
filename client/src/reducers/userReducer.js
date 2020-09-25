const initialUser = () => {
  if (localStorage.token) {
    const user = localStorage.username
    return { user }
  } else {
    return { user: undefined }
  }
}

export default function UserReducer (state = initialUser(), action) {
  switch (action.type) {
    case 'login':
      localStorage.username = action.auth.user
      localStorage.token = action.auth.token
      return {
        ...state,
        user: action.auth.user
      }
    default:
      return state
  }
}

const initialState = {
  error: null,
  notice: null
}


export default function MessageReducer (state = initialState, action) {
  switch (action.type) {
    case 'setError':
      return {
        ...state,
        error: action.error,
      }
    case 'clearError':
        return {
          ...state,
          error: null
        }
    case 'setNotice':
      return {
        ...state,
        notice: action.notice
      }
    case 'clearNotice':
        return {
          ...state,
          notice: null
        }
    default:
      return state
  }
}

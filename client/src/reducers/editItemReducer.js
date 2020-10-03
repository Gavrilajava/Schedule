const initialState = {
  item: null,
}


export default function EditItemReducer (state = initialState, action) {
  switch (action.type) {
    case 'initializeEditItem':
      return {
        item: action.item
      }
    case 'clearEditItem':
        return {
          item: null
        }
    case 'editParameter':
        return {
          item: {
            ...state.item,
            [action.parameter]: action.value
          }
        }
    default:
      return state
  }
}

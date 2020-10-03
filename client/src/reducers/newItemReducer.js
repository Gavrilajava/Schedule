const initialState = {
  item: null,
}


export default function NewItemReducer (state = initialState, action) {
  switch (action.type) {
    case 'initializeNewItem':
      return {
        item: {}
      }
    case 'clearNewItem':
        return {
          item: null
        }
    case 'addParameter':
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

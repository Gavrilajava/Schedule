const initialState = {
  items: [],
  filter: '',
  options: {}
}


export default function ItemsReducer (state = initialState, action) {
  switch (action.type) {
    case 'setItems':
      return {
        ...state,
        items: action.items
      }
    case 'setFilter':
      return {
        ...state,
        filter: action.filter
      }
    case 'setOptions':
      return {
        ...state,
        options: action.options
      }
    default:
      return state
  }
}

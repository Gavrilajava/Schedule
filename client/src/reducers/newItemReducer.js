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
      if (action.value.current.length)
        return {
          item: {
            ...state.item,
            [action.parameter]: action.value.current
          }
        }
      else{
        return {item: Object.keys(state.item).reduce((s, k) => ( k === action.parameter ? s : {...s, [k]: state.item[k] }), {})}
      }
    default:
      return state
  }
}

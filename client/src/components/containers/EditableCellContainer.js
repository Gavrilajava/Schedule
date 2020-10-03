import React, { useRef} from 'react'
import EditableCell from '../presentational/EditableCell'
import { connect } from 'react-redux'


const EditableCellContainer = ({children, parameter, edit, editItem, initializeEditItem, addParameter, editParameter}) => {

  const text = useRef(children ? children.toString() : '')

  const handleChange = e => {
    if (edit && !editItem){
      initializeEditItem(edit)
    }
    text.current = e.target.value
  }

  const handleBlur = e => {
    e.target.innerText = text.current
    edit ? editParameter(parameter, text.current) : addParameter(parameter, text.current)
  }


  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      e.target.blur()
    }
  }


  return (
    <EditableCell
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleKeyDown = {handleKeyDown}
    >
      {text.current}
    </EditableCell>
  )
}

const mapStateToProps = (state) => {
  return {
    editItem: state.EditItemReducer.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    initializeEditItem: (item) => dispatch({type: 'initializeEditItem', item: item}),
    addParameter: (parameter, value) => dispatch({type: 'addParameter', parameter: parameter, value: value}),
    editParameter: (parameter, value) => dispatch({type: 'editParameter', parameter: parameter, value: value})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditableCellContainer)

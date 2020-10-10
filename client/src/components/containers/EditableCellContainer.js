import React, { useRef, useState } from 'react'
import EditableCell from '../presentational/EditableCell'
import Table from 'harmonium/lib/Table'
import Select from 'harmonium/lib/Select'
import { connect } from 'react-redux'


const EditableCellContainer = ({children, parameter, edit, editItem, initializeEditItem, addParameter, editParameter, options}) => {

  const text = useRef(children ? children.toString() : '')

  const [editable, setEditable] = useState(false)

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

  if (options){
    if (editable){
      return (
        <Table.Data>
          <Select 
            name={parameter} 
            options={options.map(opt => ({label: opt, value: opt}))}
          />
        </Table.Data>
      )
    }
    else {
      return (
        <td onClick = {() => setEditable(true)}>
          {children}
        </td>
      )
    }
  }
  else {
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

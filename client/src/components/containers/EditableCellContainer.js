import React, { useRef} from 'react'
import EditableCell from '../presentational/EditableCell'


const EditableCellContainer = ({children, update, parameter, id}) => {

  const text = useRef(children ? children.toString() : '')

  const handleChange = e => {
    text.current = e.target.value
  }

  const handleBlur = e => {
    e.target.innerText = text.current
    update(parameter, text, id)
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


export default EditableCellContainer

import React from 'react'
import Table from 'harmonium/lib/Table'
import ContentEditable from 'react-contenteditable'

const EditableCell = props => {

  const { children, 
    handleBlur, 
    handleChange,  
    handleKeyDown, 
  } = props


  return(
    <Table.Data>
      <ContentEditable
        html={children}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown = {handleKeyDown}
      />
    </Table.Data>
  )
  
}

export default EditableCell
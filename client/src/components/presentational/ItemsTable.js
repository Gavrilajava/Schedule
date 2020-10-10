import React from 'react'
import Table from 'harmonium/lib/Table'
import Input from 'harmonium/lib/Input'
import { connect } from 'react-redux'
import Button from 'harmonium/lib/Button'
import EditableCellContainer from '../containers/EditableCellContainer'

const ItemsTable = props => {

  const { 
    items, 
    headers,
    options,
    newItem,
    editItem,
    updateItem,
    addParameter, 
    createItem, 
    deleteItem, 
    initializeNewItem,
    filter,
    setFilter } = props

  return(
        <>
          <Input placeholder="Type to search" value = {filter} onChange = {e => setFilter(e.target.value)}></Input>
          <Table striped>
            <Table.Head>
              <Table.Row>
                {headers.map(header => <Table.Header key = {header.key}>{header.title}</Table.Header>)}
                <Table.Header>
                  <Button 
                    className = "noMargin" 
                    small 
                    onClick = {initializeNewItem}
                  >
                    Create New
                  </Button>
                </Table.Header>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              { newItem ?
                  <Table.Row key = "new">
                    {headers.map(header => 
                        <EditableCellContainer
                          update = {addParameter}
                          parameter = {header.key}
                          key = {`new#${header.key}`}
                          options = {options[header.key]}
                        >
                          {newItem[header.key]}
                        </EditableCellContainer>)
                    }
                    <Table.Data className = "noPadding">
                      <Button className = "noMargin" small success onClick = {createItem}>
                        Create
                      </Button>
                    </Table.Data>
                  </Table.Row>
                : null
              }
              {items.map(item => 
                <Table.Row key = {item.id}>
                  {headers.map(header => 
                    <EditableCellContainer
                      edit = {item}
                      parameter = {header.key}
                      key = {`${item.id}#${header.key}`}
                      options = {options[header.key]}
                    >
                      {item[header.key]}
                    </EditableCellContainer>)}
                  <Table.Data className = "noPadding">
                    <Button 
                      className = "noMargin" 
                      small 
                      alert = {!(editItem && editItem.id === item.id)}
                      onClick = {editItem && editItem.id === item.id ? () => updateItem(item.id) : () => deleteItem(item.id)}
                    >
                      {editItem && editItem.id === item.id ? "Update" : "Delete"}
                    </Button>
                  </Table.Data>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </>
  )
}

const mapStateToProps = (state) => {
  return {
    newItem: state.NewItemReducer.item,
    editItem: state.EditItemReducer.item,
    options: state.ItemsReducer.options
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    initializeNewItem: () => dispatch({type: 'initializeNewItem'}),
    setFilter: (filter) => dispatch({ type: 'setFilter', filter: filter }),
    addParameter: (parameter, value) => dispatch({type: 'addParameter', parameter: parameter, value: value})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable)

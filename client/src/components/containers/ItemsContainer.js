import React, { useEffect } from 'react';
import { fetchBackend } from '../../api'
import ItemsTable from '../presentational/ItemsTable'
import { connect } from 'react-redux'

const ItemsContainer = props => {

  const {
    model, 
    setError, 
    setNotice, 
    items,
    setItems,
    filter,
    setOptions,
    newItem, 
    editItem, 
    clearNewItem, 
    clearEditItem} = props


  // CRUD from Back end
  useEffect(()=> fetchBackend(model, 'GET', '', null, updateState, setError), [setError])

  const updateItem = id  => fetchBackend(model, 'PATCH', id, {item: editItem}, updateState, setError)

  const createItem = ()  => fetchBackend(model, 'POST', '', {item: newItem}, updateState, setError)
  
  const deleteItem = id  => fetchBackend(model, 'DELETE', id, null, updateState, setError)

  // common code for CRUD methods above
  const updateState = json => {
    if (json.error) {
      setError(json.error)
    }
    else{

      if (json.notice) {setNotice(json.notice)}
      if (json.options) {setOptions(json.options)}
      clearNewItem()
      clearEditItem()
      setItems(json.items)
    }
  }

  //convert the keys to hash of keys with table headers in uppercase as a value
  const keysToHeaders = keys => keys.map(key => ({key: key, title: key.split('_').map(k => k.toUpperCase()).join(" ")}))

  const headers = items.length ? keysToHeaders(Object.keys(items[0]).filter(key => key !== 'id')) : []
  
  // filter function to filter items where at least any attribute contains filter
  const filterItems = () => {
    if(filter.length){
      return items.filter(item => Object.values(item).some(v => v ? v.toString().includes(filter) : false))
    }
    else{
      return items
    }
  }
  
  return(
    <ItemsTable
      items = {filterItems()}
      headers = {headers}
      updateItem = {updateItem}
      createItem = {createItem}
      deleteItem = {deleteItem}
    />
  )
}


const mapStateToProps = (state) => {
  return {
    error: state.MessageReducer.error,
    newItem: state.NewItemReducer.item,
    editItem: state.EditItemReducer.item,
    items: state.ItemsReducer.items,
    filter: state.ItemsReducer.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    setError: (error) => dispatch({ type: 'setError', error: error }),
    setNotice: (notice) => dispatch({ type: 'setNotice', notice: notice }),
    setItems: (items) => dispatch({ type: 'setItems', items: items }),
    setOptions: (options) => dispatch({ type: 'setOptions', options: options }),
    clearNewItem: () => dispatch({type: 'clearNewItem'}),
    clearEditItem: () => dispatch({type: 'clearEditItem'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

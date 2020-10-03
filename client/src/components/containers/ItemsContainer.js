import React, {useState, useEffect} from 'react';
import { API_ROOT, getHeaders, throwError } from '../../api'
import ItemsTable from '../presentational/ItemsTable'
import { connect } from 'react-redux'

const ItemsContainer = props => {

  const {
    model, 
    setError, 
    setNotice, 
    newItem, 
    editItem, 
    clearNewItem, 
    clearEditItem} = props

  // data for table
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')

  // CRUD from Back end
  useEffect(()=> {
    clearNewItem()
    fetch(API_ROOT + '/' + model, {
      method: "GET",
      headers: getHeaders()
    })
      .then(resp => resp.json())
      .then(json => json.error ? throwError(json.error) : setItems(json))
      .catch(e => setError(e.message))
  }, [setError, clearNewItem])

  const updateItem = id  => {
    fetch(API_ROOT + '/' + model + '/' + id, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify({item: editItem})
    })
      .then(resp => resp.json())
      .then(json => updateState(json))
      .catch(e => setError(e.message))
  }

  const createItem = ()  => {
    fetch(API_ROOT + '/' + model, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({item: newItem})
    })
      .then(resp => resp.json())
      .then(json => updateState(json))
      .catch(e => setError(e.message))
  }

  const deleteItem = id  => {
    fetch(API_ROOT + '/' + model + '/' + id, {
      method: "DELETE",
      headers: getHeaders(),
    })
      .then(resp => resp.json())
      .then(json => updateState(json))
      .catch(e => setError(e.message))
  }

  // common code for CRUD methods above
  const updateState = json => {
    if (json.error) {
      setError(json.error)
    }
    else{
      json.notice ? setNotice(json.notice) : null
      clearNewItem()
      clearEditItem()
      setItems(json.items)
    }
  }

  //convert the keys to hash of keys with table headers as a value
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
      filter = {filter}
      setFilter = {setFilter}
    />
  )
}


const mapStateToProps = (state) => {
  return {
    error: state.MessageReducer.error,
    newItem: state.NewItemReducer.item,
    editItem: state.EditItemReducer.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    setError: (error) => dispatch({ type: 'setError', error: error }),
    setNotice: (notice) => dispatch({ type: 'setNotice', notice: notice }),
    clearNewItem: () => dispatch({type: 'clearNewItem'}),
    clearEditItem: () => dispatch({type: 'clearEditItem'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

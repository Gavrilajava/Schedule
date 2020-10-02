import React, {useState, useEffect} from 'react';
import { API_ROOT, getHeaders, throwError } from '../../api'
import ItemsTable from '../presentational/ItemsTable'
import { connect } from 'react-redux'

const ItemsContainer = ({model, setError, setNotice, newItem, clearNewItem}) => {

  // data for table
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('')

  // fetch data initially
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


  //convert the keys to hash of keys with table headers as a value
  const keysToHeaders = keys => keys.map(key => ({key: key, title: key.split('_').map(k => k.toUpperCase()).join(" ")}))

  const headers = items.length ? keysToHeaders(Object.keys(items[0]).filter(key => key !== 'id')) : []


  //update function it checks first if there is a point to ask backend and return 
  // previous value in case of error
  const updateItem = (parameter, ref, id)  => {
    let previous = items.find(w => w.id === id)[parameter]
    previous = previous ? previous.toString() : ''
    if (ref.current !== previous){
      fetch(API_ROOT + '/' + model + '/' + id, {
        method: "PATCH",
        headers: getHeaders(),
        body: JSON.stringify({item: {[parameter]: ref.current}})
      })
        .then(resp => resp.json())
        .then(json => json.error ? throwError(json.error) : setNotice(json.notice))
        .catch(e => {
          ref.current = previous
          setError(e.message)
        })
    }
  }

  const createItem = ()  => {
    fetch(API_ROOT + '/' + model, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({item: newItem})
    })
      .then(resp => resp.json())
      .then(json => {
        if (json.error){
          throwError(json.error)
        }
        else {
          setNotice(json.notice)
          clearNewItem()
          setItems(json.items)
        }
      })
      .catch(e => setError(e.message))
  }

  const deleteItem = id  => {
    fetch(API_ROOT + '/' + model + '/' + id, {
      method: "DELETE",
      headers: getHeaders(),
    })
      .then(resp => resp.json())
      .then(json => {
        if (json.error){
          throwError(json.error)
        }
        else {
          setNotice(json.notice)
          setItems(json.items)
        }
      })
      .catch(e => setError(e.message))
  }

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
      update = {updateItem}
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
    newItem: state.NewItemReducer.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    setError: (error) => dispatch({ type: 'setError', error: error }),
    setNotice: (notice) => dispatch({ type: 'setNotice', notice: notice }),
    clearNewItem: () => dispatch({type: 'clearNewItem'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

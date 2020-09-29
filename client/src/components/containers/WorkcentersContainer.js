import React, {useState, useEffect} from 'react';
import { API_ROOT, getHeaders, throwError } from '../../api'
import Workcenters from '../presentational/Workcenters'

const WorkcentersContainer = props => {

  // data for table
  const [workcenters, setWorkcenters] = useState([])
  const [error, setError] = useState(null)

  // fetch data initially
  useEffect(()=> {
      fetch(API_ROOT + '/workcenters', {
        method: "GET",
        headers: getHeaders()
      })
        .then(resp => resp.json())
        .then(json => json.error ? throwError(json.error) : setWorkcenters(json))
        .catch(e => setError(e.message))
  }, [])


  //convert the keys to hash of keys with table headers as a value
  const keysToHeaders = keys => keys.map(key => ({key: key, title: key.split('_').map(k => k.toUpperCase()).join(" ")}))

  const headers = workcenters.length ? keysToHeaders(Object.keys(workcenters[0]).filter(key => key !== 'id')) : []



  const updateWorkcenter = (id, parameter, value)  => {
    fetch(API_ROOT + '/workcenters/' + id, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify({workcenter: {[parameter]: value}})
    })
      .then(resp => resp.json())
      .then(json => json.error ? throwError(json.error) : null)
      .catch(e => setError(e.message))
  }


  return(
    <Workcenters
      workcenters = {workcenters}
      headers = {headers}
      update = {updateWorkcenter}
    />
  )
}

export default WorkcentersContainer
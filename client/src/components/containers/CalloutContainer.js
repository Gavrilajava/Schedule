import React from 'react'
import Callout from 'harmonium/lib/Callout'
import { connect } from 'react-redux'

const CalloutContainer = ({error, notice, clearError, clearNotice}) => {


  if (!error && !notice){
    return null
  }
  else if (error){
    setTimeout(clearError, 2500)
    return (
      <Callout warning>
        <div>
          {error}
        </div>
      </Callout>
    )
  }
  else {
    setTimeout(clearNotice, 2500)
    return (
      <Callout success>
        <div>
          {notice}
        </div>
      </Callout>
    )
  }
  
}

const mapStateToProps = (state) => ({
  error: state.MessageReducer.error,
  notice: state.MessageReducer.notice
})

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch({ type: 'clearError' }),
  clearNotice: () => dispatch({ type: 'clearNotice' }),
})


export default connect(mapStateToProps, mapDispatchToProps)(CalloutContainer)

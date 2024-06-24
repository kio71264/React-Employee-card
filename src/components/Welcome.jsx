import React from 'react'
import DateUpdater from './DateUpdater'

function Welcome(props) {
  return (
    <div>
        <h1 className='header'> Welcome {props.name} </h1>
        <DateUpdater/>
    </div>
  )
}

export default Welcome
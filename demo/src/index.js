import React from 'react'
import InitStatelessComponent from '../../InitStatelessComponent'

const Demo = () => {
  /**
   * Your handle init method
   */
  const initStatelessHandle = () => {
    console.log("init component");
    // ... your stuff
  }

  return <div>
    <h1>react-init-stateless-component Demo</h1>
    <InitStatelessComponent initStatelessHandle={initStatelessHandle} />

  </div>
}


export default Demo;
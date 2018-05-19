import React from 'react'

export default class InitStatelessComponent extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.initStatelessHandle() 
  }
  render() {
    return (
      null
    )
  }
}
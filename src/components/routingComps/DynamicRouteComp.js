import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class DynamicRouteComp extends Component {
  componentDidMount(){
    // const {slug} = this.props.match.params
    // this.performLookup(username)

    // const {history} = this.props
    // const supportsHistory = 'pushState' in window.history

    // if(supportsHistory){
    //   history.pushState(null, '/about')
    // } else{
    //   window.location = '/dashboard'
    // }
  }
  render() {
    const {slug} = this.props.match.params
    return (
      <div>
        <h1>{slug} that can change based on route</h1>
        <Link className='some-link' to='/about/'>Static Page</Link>
      </div>
    )
  }
}

export default DynamicRouteComp
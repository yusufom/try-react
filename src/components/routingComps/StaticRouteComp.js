import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class StaticRouteComp extends Component {
  render() {
    return (
      <div>
        <h1>Content that doesnt change based on route.</h1>
        <Link className='some-link' to='/posts/dynamic/'>Dynamic Page</Link>
      </div>
    )
  }
}

export default StaticRouteComp
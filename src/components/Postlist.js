import React, { Component } from 'react'
import PostData from "../data/posts.json"
import Postdetails from './Postdetails'

class Postlist extends Component {
    constructor(props) {
      super(props)
      this.handleDataCallback = this.handleDataCallback.bind(this)
    }
    handleDataCallback(txtMsg){
        alert(txtMsg)
        console.log(this)
    }
  render() {
    return (
      <div>
          <h1>Post Data</h1>
          {PostData.map((item, index) =>{
              return <Postdetails post={item} 
              key={`post-list-key ${index}`} 
              dataCallback={this.handleDataCallback}/>
            })}
      </div>
    )
  }
}

export default Postlist
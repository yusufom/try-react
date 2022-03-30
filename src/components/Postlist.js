import React, { Component } from 'react'
import PostData from "../data/posts.json"
import Postdetails from './Postdetails'

class Postlist extends Component {
    constructor(props) {
      super(props)
      this.handleDataCallback = this.handleDataCallback.bind(this)
      this.handleRemoveContent = this.handleRemoveContent.bind(this)
      this.state = {
        postList: []
      }
    }
    handleRemoveContent(postItem){
      let currentPostList = this.state.postList
        currentPostList.pop(postItem)
        this.setState({
          postItem: currentPostList
        })
    }
    handleDataCallback(postItem){
        // alert(txtMsg)
        // console.log(postItem)
        let currentPostList = this.state.postList
        currentPostList.push(postItem)
        this.setState({
          postItem: currentPostList
        })
    }
    componentDidMount(){
      this.setState({
        postList: PostData
      })
    }
  render() {
    const {postList} = this.state
    return (
      <div>
          <h1>Post Data</h1>
          {postList.map((item, index) =>{
              return <Postdetails post={item} 
              key={`post-list-key ${index}`} 
              didHandleRemove = {this.handleRemoveContent}
              dataCallback={this.handleDataCallback}/>
            })}
      </div>
    )
  }
}

export default Postlist
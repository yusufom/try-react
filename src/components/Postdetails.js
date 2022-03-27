import React, { Component } from 'react'


class Postdetails extends Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
      this.toggleContent = this.toggleContent.bind(this)
    
      this.state = {
         showContent : true,
         postItem : null
      }
    }

    toggleContent(event){
        event.preventDefault()
        this.setState ({
            showContent: !this.state.showContent
        })
    }
    handleClick(event){
        event.preventDefault()
        const dataCallback = this.props.dataCallback
        dataCallback("Hello World")
    }

    componentDidMount(){
        const {post} = this.props
        this.setState({
            postItem:post
        })

    }
  render() {
    const {postItem} = this.state
    const {showContent} = this.state
    return (
        <div>
            {postItem !== null ? 
            <div>
                <h3 onClick={this.handleClick}>{postItem.title}</h3>
                {showContent === true ? <p>{postItem.content}</p> : ''}
                <button onClick={this.toggleContent}>Toggle Content Display</button>
            </div>
            : ''}
        </div>
      
    )
  }
}

export default Postdetails
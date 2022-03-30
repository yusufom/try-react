import React, { Component } from 'react'
import YouTube from 'react-youtube'


//https://youtu.be/k-S31mgBs7g
//https://www.youtube.com/watch?v=k-S31mgBs7g


class Reactyoutube extends Component {

    videoOnReady(event){
        event.target.pauseVideo()
        console.log(event.target)
    }

    videoOnPlay(event){
        const player = event.target
        console.log(player.getCurrentTime())
        console.log(event.target.getCurrentTime())
    }
  render() {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }

    }

    const {videoId} = this.props
    return (
      <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} onPlay={this.videoOnPlay}/>
          
    )
  }
}

export default Reactyoutube
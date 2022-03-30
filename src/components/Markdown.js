import React, { Component } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'


class Markdown extends Component {
    

  render() {
    const input = '# This is a header \n\n And this is a paragraph'
    return (
        <ReactMarkdown children={input} />
    )
  }
}

export default Markdown


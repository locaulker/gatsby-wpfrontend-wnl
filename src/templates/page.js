import React, { Component } from "react"

class pageTemplate extends Component {
  render() {
    const siteMetadata = this.props.data.siteMetadata
    const currentPage = this.props.data.wordpressPage

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </div>
    )
  }
}

export default pageTemplate

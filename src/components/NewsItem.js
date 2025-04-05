import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsURL,author,date,source} = this.props
    return (
      <div className="my-3">
        <div className="card my-8 mx-3" >
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90', zIndex: '1'}}>
    {source.slice(0,10)}
  </span>
            <img src={imageUrl} className="card-img-top" style={{maxHeight: "300px"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"unknown": author} on {!date?"x/y/z":new Date(date).toGMTString()}</small></p>
                <a href={newsURL} target="_blank" className="btn btn-primary btn-sm">Read More</a>
            </div>
</div>
      </div>
    )
  }
}

export default NewsItem

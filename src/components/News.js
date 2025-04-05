import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 10,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
      constructor(props){
        super(props);
        this.state = {
            articles: [],
            page: 1,
            load: false
        }
        document.title = `${this.capitalize(this.props.category)}- NewsMonkey`
      }
      async componentDidMount(){
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=10`
        this.setState({load: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles,
          load: false
        })
        this.props.setProgress(100);
      }
      handlenext = async() => {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({load: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({load: false});
        this.setState({articles: parsedData.articles,
          page: this.state.page +1
        })
        this.props.setProgress(100);
      }
      handleprev = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({load: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({load: false});
        this.setState({articles: parsedData.articles,
          page: this.state.page - 1
        })
      }
  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center " style={{marginTop: '90px', marginBottom: '50px'}}> News Monkey top Headlines from {this.capitalize(this.props.category)}</h1>
        {this.state.load && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-3" key={element.url} >
              <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage?element.urlToImage:"https://th.bing.com/th/id/OIP.aVrVjlS4_SLn8ywxx1C31wHaFj?rs=1&pid=ImgDetMain"} newsURL={element.url}
              author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handleprev} className="btn btn-dark">&larr; prev</button>
        <button type="button" className="btn btn-light" ></button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

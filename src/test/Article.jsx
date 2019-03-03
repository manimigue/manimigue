import React , { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import '../static/css/home.css'

class Article extends Component {
  constructor(props, date, title, url, body) {
    super(props);
    this.state= {
      loading : false,
    }
    console.log(this.props);
    this.title = title;
    this.date = date;
    this.url = url;
    this.body = body;
  }

  render() {
    return (
      <div>
        <h2>{this.title}</h2>
        <ReactMarkdown source={this.body} />
      </div>
    );
  }
}


export default Article

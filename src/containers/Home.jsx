import React , { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import '../INPUT.md';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading : false,
    }
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    var lists = [];
    var readArticle = this.props.readArticle;
    readArticle.forEach((i) => {
      const article = this.props.articles[i];
      const url = article.url;
      lists.push(
        <li key={i}>
          <button
          className='article-list'
          onClick={()=>this.props.linkToPage('article/' + url)}
          >
            <p className='article-title'>{article.title}</p>
            <p className='article-date'>{article.date}</p>
          </button>
        </li>
      );
    });
    return (
      <ul>
      {
        lists
      }
      </ul>
    );
  }
}

const mapStateToProps = ({articles}) => ({
  articles : articles.articles,
  urlToID : articles.urlToID,
  lastID : articles.lastID,
  readArticle : articles.readArticle,
});

const mapDispatchToProps = (dispatch) => ({
  linkToPage(url){
    dispatch(push(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

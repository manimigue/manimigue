import React , { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import '../static/css/home.css'

class News extends Component {
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
        <li key={i+'li'}>
          <button
          key={i+'button'}
          className='article-list'
          onClick={()=>this.props.linkToPage('article/' + url)}
          >
            <h2 key={i+'h2'} className='article-title'>{article.title}</h2>
            <p key={i+'p'} className='article-date'>更新日:{article.date}</p>
          </button>
        </li>
      );
    });
    return (
      <div>
        <h1>News</h1>
        <ul className='news'>
        {
          lists
        }
        </ul>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(News);

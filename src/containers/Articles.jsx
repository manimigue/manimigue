import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Twitter from '../components/twitter'

class Articles extends Component {
  render() {
    const {log, type, title} = this.props;
    const lists = log.map(article => {
      return (
        <li key={article.url}>
          <button
          key={article.url+'button'}
          className='article-list'
          onClick={()=>this.props.linkToPage('Route','/' +type +'/' + article.url)}
          >
            <h3 key={article.url+'h2'} className='article-title'>{article.title}</h3>
            <p key={article.url+'p'} className='article-date'>更新日:{article.date}</p>
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2 className='title'>{title}</h2>
        <ul className='articles'>{lists}</ul>
        <Twitter />
      </div>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    linkToPage(type,url){
      switch (type) {
        case 'Route':{
          return (dispatch(push(url)));
        }
        case 'a':{
          window.location.href=url;
          break;
        }
        default:{
          return dispatch(push('/error'));
        }
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);

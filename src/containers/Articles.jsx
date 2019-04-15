import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom'
import Twitter from '../components/twitter'

class Articles extends Component {
  render() {
    const {log, articles, title, parentUrl } = this.props;
    const lists = log.map(article => {
      return (
        <li key={article.url}>
          <button
          key={article.url+'button'}
          className='article-list'
          onClick={()=>this.props.linkToPage('Route',parentUrl +'/' + article.url)}
          >
            <h3 key={article.url+'h2'} className='article-title'>{article.title}</h3>
            <p key={article.url+'p'} className='article-date'>更新日:{article.date}</p>
          </button>
        </li>
      );
    });
    const routers = articles.map((article,i) => {
      const url = parentUrl + '/' + article.url;
      console.log(article.component);
      return (
      <Route exact path={url} component={article.component} key={i} />
      );
    });
    const home = () => {
      return(
        <div>
          <h2 className='title'>{title}</h2>
          <ul className='articles'>{lists}</ul>
          <Twitter />
        </div>
      );
    }
    return (
      <div>
        <Route exact path={parentUrl} component={home}>
        </Route>
        { routers }
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

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createStore from './store/creatStore';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import frontMatter from 'front-matter';
import {setArticles,setUrl,setLastId,setLoaded,read} from  './actions/ac_articles';

import Header from './containers/Header';

import Home from './containers/Home';
import TodoApp from './containers/TodoApp';
import Contact from './containers/Contact';
import Hiring from './containers/Hiring'
import Article from './containers/Article'
import Error from './components/Error';

const history = createBrowserHistory();
const store = createStore(history);

function handleChange(){
  console.log(store.getState())
}
store.subscribe(handleChange);

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading : false,
      loaded : props.loaded
    }
    this.readArticles();
    this.readArticles = this.readArticles.bind(this);
  }

  readFile(input){
    const [file, props, state, end] = input;
    return new Promise((resolve,reject) => {
      try {
        const reader = require('./' + file);
        resolve(reader)
      }
      catch(e){
        reject(console.log(file))
      }
    })
    .then(reader => fetch(reader))
    .then(response => response.text())
    .then(text => {
      const meta = frontMatter(text);
      const id = meta.attributes.id;
      const url = meta.attributes.url;
      if (! (state.loading)) {
        props.setLastId(id);
      }
      var articles = {};
      articles[id] = {
        title:meta.attributes.title,
        date:meta.attributes.date,
        id:id,
        url:url,
        body:meta.body
      };
      props.setArticles(articles);
      props.setUrl(url,id);
      return id;
    }).then((id)=> {
      props.read(id);
     })
    .catch(err => err)
  }

  readArticles(){
    return new Promise((resolve,reject) => {
      if (this.state.loaded){
        reject('loaded')
      } else {
        resolve(['INPUT.md', this.props, this.state, false])
      }
    })
    .then(this.readFile)
    .then(() => {
      this.setState({loading : true});
      const lastID = this.props.lastID;
      var i;
      for (i = lastID - 1; i > -2; i--) {
        const end = i == -1 ? true : false
        Promise.resolve(['../public/mds/' + i + '.md', this.props, this.state, end])
        .then(this.readFile)
      }
    })
    .then(()=> this.props.setLoaded())
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Provider store={this.props.store} >
        <ConnectedRouter history={this.props.history}>
          <div>
            <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/TodoApp' component={TodoApp} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/hiring' component={Hiring} />
            <Route exact path='/article/:url' component={Article} />
            <Route path='/error' component={Error} />
            <footer><a href='https://hkn.jp/'>
              <img src='https://hkn.jp/img/logo2-white_360.png' alt='hokan' width='15%'/>
            </a></footer>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = ({articles}) => ({
  articles : articles.articles,
  urlToID : articles.urlToID,
  lastID : articles.lastID,
  readArticle : articles.readArticle,
  loaded : articles.loaded,
});

const mapDispatchToProps = (dispatch) => ({
  setArticles(articles){
    dispatch(setArticles(articles));
  },
  setUrl(url,id){
    dispatch(setUrl(url,id));
  },
  setLastId(id){
    dispatch(setLastId(id));
  },
  setLoaded(){
    dispatch(setLoaded());
  },
  read(id){
    dispatch(read(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

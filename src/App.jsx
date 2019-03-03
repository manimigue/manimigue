import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createStore from './store/creatStore';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import frontMatter from 'front-matter';
import {setArticles,setUrl,setLastId,setLoaded,read} from  './actions/ac_articles';

import Header from './containers/Header';
import News from './containers/News';
import Pictures from './containers/Pictures'
import TodoApp from './containers/TodoApp';
import Contact from './containers/Contact';
import About from './containers/About';
import Members from './containers/Members';
import Article from './containers/Article';
import Error from './components/Error';
import Footer from './containers/Footer';
import './index.css';
// import raw from "raw.macro";
import ReactMarkdown from 'react-markdown';

const public_folder = '!raw-loader!../public/mds';

console.log('public url: ', process.env.PUBLIC_URL)

const webpackRequireContext = require.context(
  '!raw-loader!../public',
  false,
  /\.md$/,
)

// Convert to Map
const files = webpackRequireContext.keys().reduce((map, fileName) => {
  const markdown = webpackRequireContext(fileName)
  // remove the leading './'
  if (fileName.startsWith('./')){
    fileName = fileName.substr(2)
  }

  return map.set(fileName, markdown);
}, new Map())

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
      loaded : props.loaded,
      public_file : (process.env.PUBLIC_URL === '') ? '../public' : process.env.PUBLIC_URL
    }
    this.readArticles();
    this.readArticles = this.readArticles.bind(this);
  }

  readFile(input){
    const [file, props, state, end] = input;
    return new Promise((resolve,reject) => {
      try {
        if (end === true){
          reject(console.log('ended'))
        }
        console.log('0');
        console.log(files.get(file));
        console.log('0');
        resolve(files.get(file))
      }
      catch(e){
        reject(console.log(e+'\n error!!!:' + file))
      }
    })
    // .then(reader => fetch(reader))
    // .then(response => response.text())
    .then(text => {
      console.log("text\n"+text);
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
      }else {
    //     let PUBLIC;
    //     if (process.env.PUBLIC_URL === ''){
    //       PUBLIC = '../public';
    //     }else {
    //       PUBLIC = process.env.PUBLIC_URL;
    //     }
    //     resolve(PUBLIC)
    //   }
    // })
    // .then(PUBLIC =>{
      const input_folder = 'INPUT.md';
      // const input = window.setTimeout(raw(input_folder),2000)
      // console.log('1');
      // console.log(input);
      // console.log('1');
      resolve([input_folder, this.props, this.state, false])
      }
    })
    .then(this.readFile)
    .then(() => {
      this.setState({loading : true});
      const lastID = this.props.lastID;
      var i;
      for (i = lastID - 1; i > -2; i--) {
        const end = i === -1 ? true : false
        var file = i + '.md'
        Promise.resolve([file, this.props, this.state, end])
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
          <div className='body'>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" />
            <link
            rel = "stylesheet"
            href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity = "sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin = "anonymous"
            />
            <Header />
            <div className='main'>
              <Route exact path='/mu-app' component={Pictures} />
              <Route exact path='/mu-app' component={News} />
              <Route exact path='/news' component={News} />
              <Route exact path='/about' component={About} />
              <Route exact path='/TodoApp' component={TodoApp} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/members' component={Members} />
              <Route exact path='/article/:url' component={Article} />
              <Route path='/error' component={Error} />
            </div>
            <Footer />
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

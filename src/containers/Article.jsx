import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArticle } from '../actions/ac_articles'
import '../index.css'
import ReactMarkdown from 'react-markdown';

const webpackRequireContext = require.context(
  '!raw-loader!../../public',
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

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      url : props.match.params.url,
    }
    if (this.state.url in props.urlToID) {
      props.setArticle(this.state.url);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.url in nextProps.urlToID) {
      this.props.setArticle(this.state.url);
    }
  }

// setBodyInHTML(){
//     return {
//       __html : this.props.body
//     };
//   }
//<div className='article' dangerouslySetInnerHTML={this.setBodyInHTML()}></div>

  render() {
    console.log('3');
    console.log(this.props.id);
    console.log('3');
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ReactMarkdown source={files.get('INPUT.md')} />
      </div>
    );
  }
}

const mapStateToProps = ({articles},ownProps) => ({
  title : articles.title,
  id : articles.id,
  urlToID : articles.urlToID,
});

const mapDispatchToProps = (dispatch) => ({
  setArticle(url){
    dispatch(setArticle(url))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);

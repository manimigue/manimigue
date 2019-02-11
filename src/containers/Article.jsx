import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArticle } from '../actions/ac_articles'
import '../index.css'

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

setBodyInHTML(){
    return {
      __html : this.props.body
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className='article' dangerouslySetInnerHTML={this.setBodyInHTML()}></div>
      </div>
    );
  }
}

const mapStateToProps = ({articles},ownProps) => ({
  title : articles.title,
  body : articles.body,
  urlToID : articles.urlToID,
});

const mapDispatchToProps = (dispatch) => ({
  setArticle(url){
    dispatch(setArticle(url))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);

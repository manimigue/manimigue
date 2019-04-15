import React , { Component } from 'react';
import { connect } from 'react-redux';
import log from '../news/log.json';
import Articles from './Articles'

class News extends Component {
  render() {
    console.log(this.props);
    return (
      <Articles title='News' log={log} />
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);

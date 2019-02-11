import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';

class Hiring extends Component {
  render() {
    return (
      <div className="hiring-form">
        <h2 className="title">募集</h2>
        <p>ただいま以下のポストを募集しております</p>
        <p>応募・問い合わせはxxxx@yyyy.jpまで</p>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Hiring);

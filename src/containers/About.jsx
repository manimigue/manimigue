import Carousel from 'nuka-carousel'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import '../index.css';

import Logo from '../img/mu-logo.png'
import twitter from '../img/twitter_icon.png'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Orchestra Mμsicart に関して</h1>
        <p>説明</p>
      </div>
    );
  }
}

const mapStateToProps = ({links}) => {
};

const mapDispatchToProps = (dispatch) => {
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

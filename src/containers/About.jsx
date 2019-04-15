import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import Twitter from '../components/twitter'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className='title'>About Orchestra <span className='musicart'>Mμsicart</span></h2>
        <p>説明</p>
        <Twitter />
      </div>
    );
  }
}

const mapStateToProps = ({links}) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(About);

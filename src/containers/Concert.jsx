import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import ConcertLogo from '../img/concert2019_logo.png'
import {onConcert, outConcert} from '../actions/concertAction'
import Articles from './Articles'
import log from '../concert/log.json'

class Concert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onConcert()
  }

  componentWillUnmount() {
    this.props.outConcert()
  }

  render() {
    return (
      <div className='concert'>
        <img src={ConcertLogo} alt='コンサートロゴ'/>
        <Articles title='Program Note' log={log} type='concert'/>
      </div>);
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onConcert() {
    dispatch(onConcert())
  },
  outConcert() {
    dispatch(outConcert())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Concert);

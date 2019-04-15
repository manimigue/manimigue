import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import '../index.css';

import Logo from '../img/mu-logo.png'
import twitter from '../img/twitter-64.png'

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const lists = this.props.links.map(link => {
      return (
        <div key={link.text} onClick={() => this.props.linkToPage(link.type,link.url)}>{link.text}</div>
      );
    });
    return (
      <footer>
        <div className='footer-main'>
          <h2><span className='musicart' >M&mu;sicart</span></h2>
        </div>
        <div className='links'>
          <ul>{lists}</ul>
          <img src={Logo} alt='Mμsicart' size='60%' onClick={() => this.props.linkToPage('Route','/')}/>
          <a href='https://twitter.com/orch_musicart'>
            <img className='twitter' src={twitter} alt='twitter' width='5%'/>
          </a>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = ({links}) => {
  return{
    links: links.headerLinks
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

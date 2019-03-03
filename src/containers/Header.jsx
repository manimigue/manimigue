import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import '../index.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false,
    }
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({active:!currentState})
  }
  render() {
    const lists = this.props.links.map(link => {
      return (
        <li key={link.text}>
          <button onClick={() => this.props.linkToPage(link.type,link.url)}>{link.text}</button>
        </li>
      );
    });
    return (
      <div className='header' >
        <div className='header-logo'><button onClick={() => this.props.linkToPage('Route','/')}>
          <img src='https://hkn.jp/img/logo2-color.png' alt='Mμsicart' width='15%'/>
        </button></div>
        <button key='headerButton' className={this.state.active? 'headerActive':'headerInactive'}>
          A
        </button>
        <div className='header-list'><ul>
          {lists}
        </ul></div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

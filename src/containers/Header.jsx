import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import HeaderLogo from '../img/header_logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import '../index.css';
import '../static/css/header.css'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHide: false,
    }
  }

  hideBar = () => {
       const isHide = this.state.isHide

       window.scrollY > this.prev ?
       !isHide && this.setState({ isHide: true })
       :
       isHide && this.setState({ isHide: false });

       this.prev = window.scrollY;
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
         window.removeEventListener('scroll', this.hideBar);
    }

  render() {
    const classHide = this.state.isHide ? 'hide' : '';
    const lists = this.props.links.map(link => {
      return (
        <Nav.Link
          key={link.text}
          onClick={() => this.props.linkToPage(link.type,link.url)}
          >{link.text}
        </Nav.Link>
      );
    });
    return (
      <Navbar className={classHide} collapseOnSelect expand="md" bg={this.props.concert? 'dark':'white' } variant={this.props.concert? 'dark':"light"} sticky='top'>
        <Navbar.Brand href="#home">
          <img src={HeaderLogo} alt='Mμsicart' width='200' onClick={() => this.props.linkToPage('Route','/mu-app')}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            {lists}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({links,concert}) => {
  return{
    links: links.headerLinks,
    concert: concert.concert,
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

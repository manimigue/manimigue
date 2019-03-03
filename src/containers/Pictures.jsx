import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';
import '../static/css/carousel.css';
import Logo from '../img/mu-logo.png';
import Demo from '../img/classical-music-1838390_1280.jpg'


class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const pictures = [
      {
        img : Logo,
        link : {
          text : 'Mμsicart\'s logo',
          type : 'Route',
          url : '/mu-app'
        }
      },
      {
        img : Demo,
        link : {
          text : 'Demo photo',
          type : 'a',
          url : 'https://pixabay.com/ja/%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E9%9F%B3%E6%A5%BD-%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%88-%E3%83%9E%E3%82%AF%E3%83%AD-%E9%9F%B3%E6%A5%BD-%E6%A5%BD%E5%99%A8-%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%B7%E3%83%A3%E3%83%B3-1838390/'
        }
      }
    ]
    const height = '400px';
    const components = pictures.map(pic => {
      const link = pic.link;
      return(
        <Carousel.Item><div key={link.text+'Div'} className='pic-component'><img
          key={link.text}
          className='pic-img'
          src={pic.img}
          height={height}
          onClick={() => this.props.linkToPage(link.type,link.url)} />
        </div></Carousel.Item>
      )
    });
    return (
      <Carousel fade='true'>
        {components}
      </Carousel>
    );
  }
}

const mapStateToProps = ({links}) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);

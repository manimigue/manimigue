import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';
import '../static/css/carousel.css';

class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const components = this.props.pictures.map(pic => {
      const link = pic.link;
      return(
        <Carousel.Item key={link.text+'car'}><div key={link.text+'Div'} className='pic-component'><img
          key={link.text}
          alt={link.text}
          className='pic-img'
          src={pic.img}
          onClick={() => this.props.linkToPage(link.type,link.url)} />
        </div>
        </Carousel.Item>
      )
    });
    return (
      <Carousel fade='true'>
        {components}
      </Carousel>
    );
  }
}

const mapStateToProps = ({footer}) => ({
  pictures: footer.pictures
});

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

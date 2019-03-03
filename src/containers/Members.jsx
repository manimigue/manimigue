import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import '../index.css';
import '../static/css/members_icon.css'

class Members extends Component {
  render() {
    const lists = this.props.links.map(link => {
      const card_style = {
        borderColor: link.color
      };
      const header_style = {
          color: link.color,
          borderBottomColor: link.color,
          backgroundColor: link.background
      };
      const description_style = {
        color: link.color
      };
      return (
        <div className="card" key={link.text} style={card_style}
          onClick={() => this.props.linkToPage(link.type,link.url)}>
          <div className="card-header" style={header_style}>{link.head}</div>
          <div className="card-main">
            <i className="material-icons">{link.icon}</i>
            <div className="main-description" style={description_style}>{link.text}</div>
           </div>
        </div>
      );
    });
    return (
      <div className="Members-form">
        <h2 className="title">募集</h2>
        <p>ただいま以下のポストを募集しております</p>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
        <div className="members-card">
          <div className='cards'>
            {lists}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({links}) => {
  return{
    links: links.membersLinks
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

export default connect(mapStateToProps, mapDispatchToProps)(Members);

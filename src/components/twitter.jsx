import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class Twitter extends Component {
  render() {
    return (
      <div className='twitter'>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="orch_musicart"
        options={{width: '100%',height: 400}}
        theme={this.props.concert ? 'dark': 'light'}
        transparent
        noFooter
        />
      </div>
    );
  }
}

const mapStateToProps = ({concert}) => ({
  concert: concert.concert
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);

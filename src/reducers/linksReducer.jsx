// import * as types from '../actions/links';

const initialState = {
  headerLinks:[
    {
      type:'Route',
      url: '/members',
      text : 'Join us'
    },
    {
      type: 'Route',
      url : '/contact',
      text : 'Contact'
    },
    {
      type: 'Route',
      url : '/concert',
      text : 'Concert'
    },
    {
      type: 'Route',
      url : '/tickets',
      text : 'Tickets'
    },
    {
      type: 'Route',
      url : '/about',
      text : 'About'
    },
    {
      type: 'Route',
      url : '/news',
      text : 'News'
    },
    {
      type: 'Route',
      url : '/mu-app',
      text : 'Home'
    },
  ],
  membersLinks:[
    {
      type: 'Route',
      url : '/contact',
      head: 'オーケストラ',
      icon: 'music_note',
      text : 'Orchestra',
      background : 'rgba(228, 89, 45, 0.59)',
      color : 'rgb(212, 62, 6)'
    },
    {
      type: 'Route',
      url : '/contact',
      head: 'デザイナー',
      icon: 'brush',
      text : 'Designer',
      background : 'rgba(131, 195, 123, 0.86)',
      color : 'rgb(18, 121, 5)'
    },
    {
      type: 'Route',
      url : '/contact',
      head: 'スタッフ',
      icon: 'people',
      text : 'Staff',
      background : 'rgb(105, 115, 177)',
      color : 'rgb(27, 45, 158)'
    },
  ],
};

function linksReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linksReducer;

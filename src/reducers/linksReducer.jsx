// import * as types from '../actions/links';

const initialState = {
  headerLinks:[
    {
      type: 'Route',
      url : '/contact',
      text : 'お問い合わせ'
    },
    {
      type: 'Route',
      url : '/hiring',
      text : '募集'
    },
    {
      type: 'Route',
      url : '/',
      text : 'Home'
    },
    {
      type : 'a',
      url : 'https://hkn.jp/',
      text : 'Hokan'
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

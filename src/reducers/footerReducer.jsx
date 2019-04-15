import Logo from '../img/concert2019_logo.png';
import Demo from '../img/classical-music-1838390_1280.jpg'

const initialState = {
  pictures: [
    {
      img : Logo,
      link : {
        text : 'concert logo',
        type : 'Route',
        url : '/concert'
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
  ],
};

function linksReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linksReducer;

const md = require('markdown-it')({
    html: true
  })
  .use(require('markdown-it-highlightjs'))
  .use(require('markdown-it-katex'));

const initialState = {
  articles : {},
  urlToID : {'/' : 0},
  lastID: 0,
  readArticle : [],
  title : 'Welcome!',
  body : md.render('# Loading')
};

export default function articlesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        articles: {...state.articles,...action.payload.articles}
      };
    case 'SET_URL':
      var urlToID = {...state.urlToID};
      urlToID[action.payload.url] = action.payload.id;
      return{
        ...state,
        urlToID: urlToID
      }
    case 'LOADED':
      return{
        ...state,
        loaded: true
      };
    case 'SET_LAST_ID':
      return{
        ...state,
        lastID : action.payload.lastID
      };
    case 'READ':
      return{
        ...state,
        readArticle : state.readArticle.concat(action.payload.id)
      };
    case 'SET_ARTICLE':
      const id = state.urlToID[action.payload.url];
      return{
        ...state,
        title : state.articles[id].title,
        body : md.render(state.articles[id].body)
      };
        break;
    default:
      return state;
  }
}

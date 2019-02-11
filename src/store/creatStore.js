import { createStore as rCreateStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import tasksReducer from '../reducers/tasksReducer';
import linksReducer from '../reducers/linksReducer';
import articlesReducer from '../reducers/articlesReducer';


function createStore(history) {
  return rCreateStore(
    combineReducers({
      tasks:tasksReducer,
      links:linksReducer,
      articles: articlesReducer,
      router:routerReducer,
    }),
    applyMiddleware(
      //ReduxのAction使ってrouter制御できるようになる
      routerMiddleware(history)
    )
  );
}

export default createStore;

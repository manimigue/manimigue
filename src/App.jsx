import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route} from 'react-router-dom';

import Header from './containers/Header';
import News from './containers/News';
import Pictures from './containers/Pictures'
import Contact from './containers/Contact';
import About from './containers/About';
import Members from './containers/Members';
import Concert from './containers/Concert';
import Error from './components/Error';
import Footer from './containers/Footer';
import './static/css/concert.css'
import './static/css/articles.css'
import './static/css/github1.css'
import './static/css/concert.css'

import concertRoutes from './concert';
import newsRoutes from './news';

console.log('public url: ', process.env.PUBLIC_URL)

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }

  render() {
    const newsRoutes = this.routes(news, '/news')

    return (
      <Provider store={this.props.store} >
        <ConnectedRouter history={this.props.history}>
          <div className={this.props.concert ? 'body concert' : 'body'}>
            <Header />
            <div className={`main`}>
              <Route exact path='/' component={Pictures} />
              <Route exact path='/' component={News} />
              <Route exact path='/news' component={News} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/members' component={Members} />
              <Route path='/concert' component={Concert} />
              <Route path='/error' component={Error} />
              {newsRoutes}
              {concertRoutes}
            </div>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = ({concert}) => ({
  concert: concert.concert,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

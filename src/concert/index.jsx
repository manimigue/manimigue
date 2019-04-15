import React from 'react';
import { routes } from '../article';
import components from './components'

const concertRoutes = (props) => {
  const routeList = routes(components, '/concert')
  return (
    <React.Fragment>
      {routeList}
    </React.Fragment>
  )
}

export default concertRoutes

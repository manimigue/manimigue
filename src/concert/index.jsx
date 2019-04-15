import React from 'react';
import { routes } from '../article'

const concertRoutes = (props) => {
  const routeList = routes(concert, '/concert')
  return (
    <React.Fragment>
      {routeList}
    </React.Fragment>
  )
}

export default concertRoutes

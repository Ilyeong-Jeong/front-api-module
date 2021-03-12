import * as React from 'react';

import { Link } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

import "./style/app.scss"

function App ({ route }: RouteConfigComponentProps) {
  return (
    <div className="app">
      <h1>API Module test page</h1>

      <div className="menu">
        <Link to="/">Dashboard</Link>
        <Link to="/rest">REST API page</Link>
        <Link to="/gql">GQL API page</Link>
      </div>
      
      <React.Suspense fallback={ <div>Loading...</div> }>
        { renderRoutes(route.routes) }
      </React.Suspense>  
    </div>
  )
}

export default App;
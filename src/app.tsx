import * as React from 'react';

import { Link } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

import "./style/app.scss"

function App ({ route }: RouteConfigComponentProps) {
  return (
    <div className="app">
      <h1>API Module test page</h1>
      
      <React.Suspense fallback={ <div>Loading...</div> }>
        { renderRoutes(route.routes) }
      </React.Suspense>  
    </div>
  )
}

export default App;
import * as React from 'react';

import { Link } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

import styled from 'styled-components';

import GlobalStyle from "./style/global-style"

function App ({ route }: RouteConfigComponentProps) {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <h1>API Module test page</h1>

        <Menu>
          <Link to="/">Dashboard</Link>
          <Link to="/rest">REST API page</Link>
          <Link to="/gql">GQL API page</Link>
        </Menu>
        
        <React.Suspense fallback={ <div>Loading...</div> }>
          { renderRoutes(route.routes) }
        </React.Suspense>  
      </AppWrapper>
    </>
  )
}

const AppWrapper = styled.div`
  width : 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const Menu = styled.div`
  padding: 8px;
  background-color: #777B94;

  a {
    margin-right: 8px;
  }
`;

export default App;
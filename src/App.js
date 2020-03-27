import React from 'react';
import { BrowserRouter } from "react-router-dom";

import MainRoutes from './router';
import MainContainer from './container'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BrowserRouter > 
        <MainContainer>

          <MainRoutes />
        </MainContainer>
        </BrowserRouter>
    );
  }
}

export default App;
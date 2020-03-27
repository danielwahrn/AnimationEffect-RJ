import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from '../layout/Header'
import Footer from '../layout/Footer'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <React.Fragment>
            <Header />
              {this.props.children}
            <Footer />
        </React.Fragment>
    );
  }
}

export default MainContainer;
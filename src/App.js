import React, { Component } from 'react';
// import Heading from '@dhis2/d2-ui-core/build/es/headings/Heading.component';
import { Heading } from '@dhis2/d2-ui-core';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading level={2} text="DHIS2 rocks" />
      </div>
    );
  }
}

export default App;

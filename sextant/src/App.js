import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Banner title="Sextant Dashboard"/>
              <Exhibit heading="Heading 1"/>
              <Exhibit heading="Heading 2"/>
              <Exhibit heading="Heading 3"/>
            </div>
        );
    }
}

export default App;

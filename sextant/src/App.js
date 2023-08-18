import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner title="Sextant Dashboard"/>
                <Exhibit heading="IPv4">
                    <IPAddress url="https://api.ipify.org?format=json"/>
                </Exhibit>
                <Exhibit heading="IPv6">
                    <IPAddress url="https://api64.ipify.org?format=json"/>
                </Exhibit>
            </div>
        );
    }
}

export default App;

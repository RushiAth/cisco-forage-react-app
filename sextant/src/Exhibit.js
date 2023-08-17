import React, { Component } from 'react';
import './Exhibit.css';

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
              <h3 className="Exhibit-header">{this.props.heading}</h3>
              <div className="Exhibit-child">
        
              </div>
            </div>
        );
    }
}

export default Exhibit;
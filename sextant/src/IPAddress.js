import React, { Component } from 'react';

class IPAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAd: null
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ipAd: data.ip}))
    }


    render() {
        return (
            <span className="IPAddress">
                {this.state.ipAd}
            </span>
        )
    }
}

export default IPAddress
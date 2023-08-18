import React, { Component } from 'react';
const socket = new WebSocket("ws://localhost:55455");

class Latency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }

    componentDidMount() {
        socket.onmessage = (d) => {
            this.setState({
                latency: new Date().getTime() - d.data
            })
        };
    }


    render() {
        return (
            <span className="Latency">
                {this.state.latency}
            </span>
        )
    }
}

export default Latency
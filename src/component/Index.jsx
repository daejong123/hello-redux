import React, { Component } from 'react';
import { Button } from 'antd';

export default class Index extends Component {
    render() {
        return (
            <div>
                <h1>hello dottie</h1>
                <Button onClick={() => this.props.history.push("/")}>去主页</Button>
            </div>
        );
    }
}
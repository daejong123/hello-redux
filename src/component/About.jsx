import React, { Component } from 'react';
import MenuBar from './MenuBar';
import {Button} from 'antd';

export default class About extends Component {
    render() {
        return (
            <div>
                <MenuBar current="about"></MenuBar>
                <div>hello about</div>
                <Button onClick={() => this.props.history.push('/index')}>去index</Button>
            </div>
        );
    }
}
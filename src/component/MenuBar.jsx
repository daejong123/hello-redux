import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export default class MenuBar extends Component {
    render() {
        return (
            <Menu 
                defaultSelectedKeys={[this.props.current]}
                mode="horizontal">
                <Menu.Item key="home">
                    <Link to="/"><Icon type="home" />主页</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about"><Icon type="appstore" />关于我们</Link>
                </Menu.Item>
            </Menu>
        );
    }
}
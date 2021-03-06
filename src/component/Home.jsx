import React, { Component } from 'react';
import { Button, Input } from 'antd';
import MenuBar from './MenuBar';

export default class Home extends Component {

    render() {
        console.log('1111', this.props);
        const { list } = this.props.titleReducer;
        const { addTitle, delTitle } = this.props;
        return (
            <div>
                <MenuBar current="home"></MenuBar>
                <div className="home-page ">
                    {
                        list.map(
                            (title, index) => (
                                <p key={index} style={{fontSize:'20px', width: '200px', "text-align": 'left'}}>
                                    <Button type="primary" onClick={() => delTitle(index)}>删除</Button>
                                    <span>{title}</span>
                                </p>
                            )
                        )
                    }
                    <p>
                        <Input onChange={event => this.inputValue = event.target.value} />
                        <Button onClick={() => addTitle(this.inputValue)}>添加</Button>
                    </p>
                </div>
            </div>
        );
    }
}

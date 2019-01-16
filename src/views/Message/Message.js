import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='messageView'>
                <span className='global-title'>Сообщение</span>

                <h2>{this.props.message}</h2>
            </div>
        )
    }
}

export default Message;
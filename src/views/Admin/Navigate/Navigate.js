import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigate.scss';

class Navigate extends Component {

    render() {
        return (
            <ul className='admin__nav'>
                <li><Link to='/admin/users'>Пользыватели</Link></li>
                <li><Link to='/admin/categories'>Категории</Link></li>
                <li><Link to='/admin/posts'>Публикации</Link></li>
            </ul>
        );
    }
}

export default Navigate;
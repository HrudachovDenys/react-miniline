import React, { Component } from 'react';
import './Articles.scss';

import { Categories } from '../../components';

class Articles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Categories />
            </React.Fragment>
        )
    }
}

export default Articles;
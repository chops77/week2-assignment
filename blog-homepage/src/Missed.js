import React, { Component } from 'react';
import PropTypes from 'prop-types';
import missedArticles from './missed-articles.json';
import MissedItems from './MissedItems';
import './Articles.css';

class Missed extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: missedArticles };
    }
    
    render () {
        return (
            <div className="containerItems">
                <h2>In case you missed it</h2>
                <hr className="headerLine" />
                <MissedItems articles={this.state.articles} />
            </div>
        );
    }
}

export default Missed;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import yourArticles from './your-articles.json';
import ForYouItems from './ForYouItems';
import './Articles.css';

class ForYou extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: yourArticles };
    }

    render () {
        return (
            <div className="containerItems">
                <h2>For you</h2>
                <hr className="headerLine" />
                <ForYouItems articles={this.state.articles} />
            </div>
        );
    }
}

export default ForYou;
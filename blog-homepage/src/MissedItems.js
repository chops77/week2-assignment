import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Articles.css';

class MissedItems extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                isMediumMember: PropTypes.bool.isRequired
            }),
            postedDate: PropTypes.string.isRequired,
            minutesToRead: PropTypes.number.isRequired,
            hasAudioAvailable: PropTypes.bool.isRequired,
            memberPreview: PropTypes.bool.isRequired
        })).isRequired
    }

    render() {
        const articleItems = this.props.articles.map((article) => {
            const postedDate = new Date(article.postedDate);
            let audioAndMember = "";
            if (article.hasAudioAvailable && article.memberPreview) {
                audioAndMember = <p>🕪 Audio available ★</p>;
            } else if (article.hasAudioAvailable) {
                audioAndMember = <p>🕪 Audio available</p>;
            } else if (article.memberPreview) {
                audioAndMember = <p>★ Member preview</p>;
            }
            let authorImageClass = "authorImage";
            if (article.author.isMediumMember) {
                authorImageClass = "memberAuthorImage";
            }
            return (
                <div className="missedCard">
                    <img src={article.image} alt="article-image" className="missedImage" />
                    <div className="articleDetail">
                        {audioAndMember}
                        <a href={article.link} target="_blank"><h2>{article.title}</h2></a>
                        <p>{article.description}</p>
                        <div className="authorInfo">
                            <img src={article.author.image} alt="article-image" className={authorImageClass} />
                            <svg width="25" height="25" viewBox="0 0 25 25" className="bookMark">
                                <path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" fill-rule="evenodd"></path>
                            </svg>
                            <h5>{article.author.name}</h5>
                            <p>{postedDate.toLocaleString('default', { month: 'short' })} {postedDate.getDay()} · {article.minutesToRead} min to read</p>
                        </div>
                    </div>
                </div>
            );
        });
        return <div className="articleCards">{articleItems}</div>;
    }
}

export default MissedItems;
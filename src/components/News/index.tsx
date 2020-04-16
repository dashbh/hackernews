import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import moment from 'moment';

import './index.scss';
import { fetchNews } from '../../actions';

interface IProps {
  news: Array<any>,
  page: number,
  fetchNews: (page) => {}
}

class News extends React.Component<IProps, {}> {

  componentDidMount() {
    this.loadNews();
  }

  loadNews = () => {
    const { page, fetchNews } = this.props;
    fetchNews(page);
  }

  postedAt(story) {
    const story_url = story.story_url ? story.story_url : story.url;
    try {
      const url = new URL(story_url);
      console.log(url);
      return url.host;
    }
    catch (err) {
      return;
    }
  }

  render() {
    const { news } = this.props;
    return (
      <React.Fragment>
        <ul className="news-list">
          {news && news.length ? news.map(story => {
            const story_url = this.postedAt(story);
            return (
              <li className="news" key={`news-${story.objectID}`}>
                <span className="comment-count"> {story.num_comments ? story.num_comments : ''} </span>
                <span className="upvote-count"> {story.points ? `${story.points}.` : ''} </span>
                <span className="upvote"></span>
                {story.story_title ? story.story_title : story.title}
                <span className="meta">
                  { story_url ? `(${ story_url })` : '' }
                  &nbsp; by <b>{story.author}</b>
                  &nbsp; {moment(story.created_at).fromNow()}
                </span>
              </li>
            );
          }) : ''}
          <li><a onClick={this.loadNews}>More</a></li>
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const { news, page } = state;
  return { news, page };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchNews }, dispatch)

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

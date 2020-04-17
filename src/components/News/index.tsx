import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import moment from 'moment';
import * as Utils from '../../utils';

import './index.scss';
import { fetchNews, updateStory } from '../../actions';

interface IProps {
  news: Array<any>,
  page: number,
  fetchNews: (page) => {},
  updateStory: (story) => {}
}

class News extends React.Component<IProps, {}> {

  componentDidMount() {
    this.loadNews();
  }

  loadNews = () => {
    const { page, fetchNews } = this.props;
    fetchNews(page);
  }

  upvote = (story) => {
    this.props.updateStory({
      ...story,
      points: story.points + 1
    });
  }

  toggleUserDetails = (story) => {
    const hideUserDetails = story.hideUserDetails ? story.hideUserDetails : false;
    this.props.updateStory({
      ...story,
      hideUserDetails: !hideUserDetails
    });
  }

  render() {
    const { news } = this.props;
    return (
      <React.Fragment>
        <ul className="news">
          {news && news.length ? news.map(item => {
            const story = Utils.formatStory(item);
            const story_url = Utils.hostName(story);

            return (
              <li className="story" key={`story-${story.objectID}`}>
                <span className="story__comment-count"> {story.num_comments ? story.num_comments : ''} </span>
                <span className="story__upvote-count"> {story.points ? `${story.points}.` : ''} </span>
                <span className="story__upvote" onClick={() => this.upvote(story)}></span>
                <span className="story__title">{story.story_title ? story.story_title : story.title}</span>
                {story.hideUserDetails ? '' : (<span className="story__meta">
                  {story_url ? `(${story_url})` : ''}
                  &nbsp; by <b>{story.author}</b>
                  &nbsp; {moment(story.created_at).fromNow()}
                </span>
                )}
                <a className="story__toggle-user" onClick={() => this.toggleUserDetails(story)}>
                  [ {story.hideUserDetails ? 'show' : 'hide'} ]
                </a>
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
  return bindActionCreators({ fetchNews, updateStory }, dispatch)

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);

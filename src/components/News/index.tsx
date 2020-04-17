import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Utils from '../../utils';

import './index.scss';
import { fetchNews, updateStory } from '../../actions';
import Story from '../Story';

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
      points: story.points + 1,
    });
  }

  toggleUserDetails = (story) => {
    const hideUserDetails = story.hideUserDetails ? story.hideUserDetails : false;
    this.props.updateStory({
      ...story,
      hideUserDetails: !hideUserDetails,
    });
  }

  render() {
    const { news } = this.props;
    return (
      <>
        <ul className="news">
          {news && news.length ? news.map((item) => {
            const story = Utils.formatStory(item);
            return (
              <Story
                key={story.objectID}
                story={story}
                onUpvote={this.upvote}
                onTggleUserDetails={this.toggleUserDetails}
              />
            );
          }) : ''}
          <li><a onClick={this.loadNews}>More</a></li>
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { news, page } = state;
  return { news, page };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchNews, updateStory }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News);

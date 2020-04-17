import React from 'react';
import moment from 'moment';
import * as Utils from '../../utils';

import './index.scss';

const Story = (props) => {
  const { story, onUpvote, onTggleUserDetails } = props;
  const story_url = Utils.hostName(story);
  return (
    <li className="story">
      <span className="story__comment-count">
        {' '}
        {story.num_comments ? story.num_comments : ''}
        {' '}
      </span>
      <span className="story__upvote-count">
        {' '}
        {story.points ? `${story.points}.` : ''}
        {' '}
      </span>
      <span className="story__upvote" onClick={() => onUpvote(story)} />
      <span className="story__title">{story.story_title ? story.story_title : story.title}</span>
      {story.hideUserDetails ? '' : (
        <span className="story__meta">
          {story_url ? `(${story_url})` : ''}
          &nbsp; by
          {' '}
          <b>{story.author}</b>
          &nbsp;
          {' '}
          {moment(story.created_at).fromNow()}
        </span>
      )}
      <a className="story__toggle-user" onClick={() => onTggleUserDetails(story)}>
        [
        {' '}
        {story.hideUserDetails ? 'show' : 'hide'}
        {' '}
        ]
      </a>
    </li>
  );
};

export default Story;

import React from 'react';
import { shallow } from 'enzyme';
import Story from '../Story';

const story = {
  num_comments: 2,
  points: 5,
  story_title: 'My new story',
  story_url: 'http://www.example.com',
  author: 'John',
  created_at: "2020-04-17T07:18:26.000Z",
  objectID: "22896913"
};

const props = {
  story,
  onTggleUserDetails: jest.fn()
}

describe('<Story />', () => {
  it('renders the component', () => {
    const component = shallow(<Story {...props} />);
    expect(component).toBeTruthy();
  });

  it('renders story title', () => {
    const component = shallow(<Story {...props} />);
    expect(component.find('.story__title').text()).toEqual(story.story_title);
  });

  it('shows user section when hideUserDetails false', () => {
    const component = shallow(<Story {...props} />);
    expect(component.find('.story__meta').length).toEqual(1);
  });

  it('hides user section when hideUserDetails true', () => {
    let story = props.story;
    const newProps = {
      ...props,
      story: {
        ...story,
        hideUserDetails: true
      }
    }
    const component = shallow(<Story {...newProps} />);
    expect(component.find('.story__meta').length).toEqual(0);
  });

  it('triggers onTggleUserDetails when hide/show button is clicked', () => {
    const component = shallow(<Story {...props} />);
    component.find('.story__toggle-user').first().simulate('click');
    expect(props.onTggleUserDetails).toHaveBeenCalledTimes(1);
  });
});

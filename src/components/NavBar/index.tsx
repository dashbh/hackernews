import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchNews } from '../../actions';

interface IProps {
  fetchNews: (page) => {}
}
class NavBar extends React.Component<IProps> {
  visit = (page) => {
    this.props.fetchNews(0);
  }

  render() {
    let current = 'top';
    return (
      <nav>
        <a className={current === 'top' ? 'current': ''} onClick={() => this.visit('top')}>top</a>
        |
        <a className={current === 'new' ? 'current': ''} onClick={() => this.visit('new')}>new</a>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchNews }, dispatch)

}

export default connect(
  null,
  mapDispatchToProps
)(NavBar);


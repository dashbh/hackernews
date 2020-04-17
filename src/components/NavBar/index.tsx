import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../../actions';

interface IProps {
  fetchNews: (page) => {}
}
class NavBar extends React.Component<IProps> {
  visit = () => {
    const { fetchNews } = this.props;
    fetchNews(0);
  }

  render() {
    return (
      <nav>
        <a className="current" onClick={() => this.visit()}>top</a>
        |
        <a onClick={() => this.visit()}>new</a>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchNews }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(NavBar);

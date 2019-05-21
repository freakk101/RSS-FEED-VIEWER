import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUrl, activeUrl } from "../actions/feedAction";

class UrlHistory extends Component {
  state = { url: "", isActive: false };

  handleChange = id => {
    this.setState({ isActive: true });
    this.props.activeUrl(id);
  };

  handleDelete = id => {
    this.props.deleteUrl(id);
  };

  render() {
    const urlHist = this.props.url
      ? this.props.url.map((url, id) => (
          <div
            key={id}
            className={
              this.props.activeURL === url.id
                ? "urlHistory urlHistoryActive"
                : "urlHistory"
            }
            onClick={() => this.handleChange(url.id)}
          >
            <button className="x" onClick={() => this.handleDelete(url.id)}>
              X
            </button>
            <span className="feedUrl">{url.url}</span>
          </div>
        ))
      : "type url above to begin ..";
    return <div className="urlHistoryContainer">{urlHist}</div>;
  }
}
const mapStateToProps = state => {
  return {
    url: state.feed.feeds,
    activeURL: state.feed.activeURL
  };
};
export default connect(
  mapStateToProps,
  { deleteUrl, activeUrl }
)(UrlHistory);

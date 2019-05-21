import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFeeds } from "../actions/feedAction";
import { activeUrl } from "../actions/feedAction";

class FeedInput extends Component {
  state = { feedUrl: "" };
  handleChange = e => {
    this.setState({ feedUrl: e.target.value });
  };

  onSubmit = e => {
    if (this.state.feedUrl !== "") {
      this.props.fetchFeeds(this.state.feedUrl);
      //this.props.activeUrl(this.state.feedUrl);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="inputSection">
        <form onSubmit={this.onSubmit}>
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.feedUrl}
          />
          <button type="sumbit" className="searchButton">
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { fetchFeeds, activeUrl }
)(FeedInput);

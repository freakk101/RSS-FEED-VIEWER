import React, { Component } from "react";
import { connect } from "react-redux";

class FeedDetails extends Component {
  render() {
    function search(searchKey, arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === searchKey) {
          return i;
        }
      }
    }

    let posts = this.props.posts || [];

    let indx = search(this.props.activeURL, posts) || Number(0);

    let feedDetails =
      posts.length > 0 ? (
        posts[indx].posts.items.map((item, id) => (
          <div className="feedDetails" key={id}>
            <span className="heading">{item.title}</span> <br />
            <span className="feedDescription">{item.description}</span>
          </div>
        ))
      ) : (
        <div className="feedDetails">
          <span className="heading">Feeds will be shown here</span> <br />
          <span className="feedDescription">
            Use search box to add and view the feeds
          </span>
        </div>
      );

    return <React.Fragment>{feedDetails}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    activeURL: state.feed.activeURL,
    posts: state.feed.feeds
  };
};

export default connect(
  mapStateToProps,
  null
)(FeedDetails);

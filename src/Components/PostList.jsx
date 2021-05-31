import React from "react";

import { connect } from "react-redux";

function PostList(props) {
    console.log("post list component");
  return (
    props.AllPost === undefined || props.AllPost === null ? "Click button" : <div>
    {props.AllPost.map((post, key) => {
      return (
        <div key={key}>
          <strong>{post.userID}</strong>
          <br />
          <strong>{post.post}</strong>
        </div>
      );
    })}
  </div>
  );
}

function mapStateToProps(state) {
  return {
    AllPost: state.allPosts,
  };
}

export default connect(mapStateToProps)(PostList);

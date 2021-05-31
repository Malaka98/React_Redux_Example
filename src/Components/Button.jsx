import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchposts } from "../Actions/postAction";

function Button(props) {
  return (
    <div>
      <button onClick={() => props.fetchPost()}>Click me</button>
    </div>
  );
}

function matchDispatch(dispatch) {
  return bindActionCreators({ fetchPost: fetchposts }, dispatch);
}

export default connect(null, matchDispatch)(Button);

import "./styles.css";

import { Component } from "react";

export class MorePostsButton extends Component {
  render() {
    const { text, onClick, disabled } = this.props;

    return (
      <button className="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}

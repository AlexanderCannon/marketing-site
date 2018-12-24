import React, { PureComponent } from "react";
import "./style.css"
export default class Video extends PureComponent {
  render() {
    const { src } = this.props;
    return (
      <video autoPlay loop muted playsInline className="fillWidth">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. Please upgrade your
        browser.
      </video>
    );
  }
}

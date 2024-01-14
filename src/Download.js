import React from "react";
import "./styles.scss";

export default function Download(props) {
  return (
    <div className="DownloadSection">
      <a className="DownloadButton" href={props.url} download="photo.jpg">
        Download
      </a>
    </div>
  );
}

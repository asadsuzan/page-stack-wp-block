import { Play } from "lucide-react";
import React from "react";

const MediaBtn = ({ btn }) => {
  return (
    <button className="hero-button-secondary ps_media_btn">
      <div className="hero-play-button">
        <Play className="hero-play-icon" />
      </div>
      <span>Watch Demo</span>
    </button>
  );
};

export default MediaBtn;

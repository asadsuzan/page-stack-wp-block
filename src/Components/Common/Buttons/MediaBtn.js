import { Play } from "lucide-react";
import React from "react";

const MediaBtn = ({ btn }) => {
  const { text, isShow } = btn;

  return isShow ? (
    <button className="ps_btn ps_media_btn">
      <div className="ps_media_btn_icon">
        <Play className="hero-play-icon" />
      </div>
      <span>{text}</span>
    </button>
  ) : null;
};

export default MediaBtn;

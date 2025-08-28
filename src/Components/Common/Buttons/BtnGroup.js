import { ArrowRight, Mail, Play } from "lucide-react";
import React from "react";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import MediaBtn from "./MediaBtn";

const BtnGroup = ({ buttons }) => {
  return (
    <div className="ps_btn_group">
      {buttons.map((btn) => {
        return (
          <>
            {btn?.type === "regular" && btn?.variant === "primary" && (
              <BtnPrimary {...{ btn }} />
            )}
            {btn?.type === "regular" && btn?.variant === "secondary" && (
              <BtnSecondary {...{ btn }} />
            )}
            {btn?.type === "media" && <MediaBtn {...{ btn }} />}
          </>
        );
      })}
    </div>
  );
};

export default BtnGroup;

import { ArrowRight, Mail } from "lucide-react";
import React from "react";

const BtnSecondary = ({ btn }) => {
  return (
    <a
      className="ps_btn ps_btn_secondary"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      {btn?.icons?.pre?.isShow && (
        <div>
          <Mail />
        </div>
      )}
      <span>{btn?.text}</span>

      {btn?.icons?.post?.isShow && (
        <div>
          <ArrowRight />
        </div>
      )}
    </a>
  );
};

export default BtnSecondary;

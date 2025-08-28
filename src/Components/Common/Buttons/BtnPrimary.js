import { ArrowRight, Mail } from "lucide-react";
import React from "react";

const BtnPrimary = ({ btn }) => {
  return (
    <a
      className="ps_btn ps_btn_primary"
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

export default BtnPrimary;

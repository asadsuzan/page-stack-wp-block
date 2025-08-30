import {
  ArrowRightShortIcon,
  MailIcon,
  PageStackIcon,
} from "../../../utils/icons";

const Button = ({ btn }) => {
  const {
    variant = "primary",
    icons = {},
    text = "explore more",
    url = "#",
    target = "_blank",
    isShow = true,
    rel = "",
    type = "regular",
  } = btn;

  // adjust link behavior based on type
  const href = type === "email" ? `mailto:${url}` : url;
  const finalTarget = type === "regular" ? target : undefined;
  const finalRel =
    type === "regular" ? rel || "noopener noreferrer" : undefined;
  return isShow ? (
    <a
      className={`ps_btn ps_btn_${variant?.toLowerCase()}`}
      href={href}
      target={finalTarget}
      rel={finalRel}
    >
      {icons?.pre?.isShow && (
        <>
          {icons?.pre?.icon ? (
            <div
              className="pre"
              dangerouslySetInnerHTML={{ __html: icons?.pre?.icon }}
            ></div>
          ) : (
            <div className="pre">
              {type === "email" && (
                <MailIcon height={20} width={20} color={"#fff"} />
              )}
              {type === "regular" && (
                <PageStackIcon height={20} width={20} color={"#fff"} />
              )}
            </div>
          )}
        </>
      )}

      <span>{text}</span>
      {icons?.post?.isShow && (
        <>
          {icons?.post?.icon ? (
            <div
              className="post"
              dangerouslySetInnerHTML={{ __html: icons?.post?.icon }}
            ></div>
          ) : (
            <div className="post">
              <ArrowRightShortIcon height={20} width={20} color={"#fff"} />
            </div>
          )}
        </>
      )}
    </a>
  ) : null;
};

export default Button;

import { addSvgAttrs } from '../../../utils/functions';
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

  const mySvg = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>`

  console.log(addSvgAttrs(mySvg, {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    height: "300px",
    width: "300px",
    color: "red",
  }));

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
              className='pre'

              dangerouslySetInnerHTML={{
                __html: addSvgAttrs(icons?.pre?.icon, {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: 0,
                  height: "20px",
                  width: "20px",
                  color: "#fff",
                }),
              }}
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

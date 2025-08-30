export const blockIcon = function ImStack(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z" />
    </svg>
  );
};
export const verticalLineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 14.707 14.707"
  >
    <rect x="6.275" y="0" width="2.158" height="14.707" />
  </svg>
);

export const horizontalLineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 357 357"
  >
    <path d="M357,204H0v-51h357V204z" />
  </svg>
);

export const ArrowRightShortIcon = function BsArrowRightShort(props) {
  const { height = 20, width = 20, color = "#000" } = props;
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      width={`${width}px`}
      height={`${height}px`}
      color={color}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const PageStackIcon = (props) => {
  const { height = 20, width = 20, color = "#000" } = props;
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height={`${height}px`}
      width={`${width}px`}
      color={color}
      {...props}
    >
      <path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z" />
    </svg>
  );
};

export const MailIcon = function HiOutlineMail(props) {
  const { height = 20, width = 20, color = "#000" } = props;
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height={`${height}px`}
      width={`${width}px`}
      color={color}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
};

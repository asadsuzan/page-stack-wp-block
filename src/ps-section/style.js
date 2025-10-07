import { getBackgroundCSS } from "../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { bg } = attributes || {};
  console.log(bg);
  const mainSl = `#${id}`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

         ${mainSl}{
         ${getBackgroundCSS(bg)}
      
        }`,
      }}
    />
  );
};
export default Style;

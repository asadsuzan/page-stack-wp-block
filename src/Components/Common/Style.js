import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../bpl-tools-main/utils/data";
import {
  getBackgroundCSS,
  getBorderCSS,
  getBoxCSS,
  getTypoCSS,
  isValidCSS,
} from "../../../../bpl-tools-main/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles } = attributes || {};
  const { pgTitle, pgDescription } = styles || {};
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksPageStack`;
  const pgTitleSl = `${blockSl} .ps_title`;
  const pgDescriptionSl = `${blockSl} .ps_description`;
  const pgTitleGradientSl = `${pgTitleSl} .pst_gradient`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
	
	    ${getTypoCSS("", pgTitle?.typo).googleFontLink} 
	    ${getTypoCSS("", pgDescription?.typo).googleFontLink} 
      ${getTypoCSS(pgTitleSl, pgTitle?.typo)?.styles} 
      ${getTypoCSS(pgDescriptionSl, pgDescription?.typo)?.styles} 
     
	

  
		 ${pgTitleSl}{
		 color: ${pgTitle?.color};
		 }
		 ${pgTitleGradientSl}{
		 ${getBackgroundCSS(pgTitle?.highlight?.bg)}
		 background-clip:text;
		 }

		${pgDescriptionSl}{
		color:${pgDescription?.color};

		}

	`,
      }}
    />
  );
};
export default Style;

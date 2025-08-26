import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools-main/utils/data';
import { getBackgroundCSS, getBorderCSS, getBoxCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools-main/utils/getCSS"

const Style = ({ attributes, id }) => {
	const { styles } = attributes || {}
	const { pgTitle } = styles || {}
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksPageStack`;
	const pgTitleSl = `${blockSl} .ps_title`;
	const pgTitleGradientSl = `${pgTitleSl} .pst_gradient`;


	return <style dangerouslySetInnerHTML={{
		__html: `
	
	    ${getTypoCSS("", pgTitle?.typo).googleFontLink} 
         ${getTypoCSS(pgTitleSl, pgTitle?.typo)?.styles} 
     
	

  
		 ${pgTitleSl}{
		 color: ${pgTitle?.color};
		 }
		 ${pgTitleGradientSl}{
		 ${getBackgroundCSS(pgTitle?.highlight?.bg)}
		 background-clip:text;
		 }


	`}} />;
}
export default Style;
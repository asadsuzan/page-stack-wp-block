const Style = ({ attributes, id }) => {
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksPageStack`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		p{
			margin: 0;
		}
	

	`}} />;
}
export default Style;

// in original, content is height: 100% and so extends below its container
// the last list items can't be seen
// flex-grow makes it expand to fill space

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		height: '100%',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 600,
		margin: 48,
	},
	media: {
		height: 240,
		minHeight: 240,
	},
	content: {
		flexGrow: 1,
		overflow: 'auto',
	},
	body: {
		overflow: 'auto',
		textAlign: 'left',
	},
	spinner: {
		justifyContent: 'center',
		display: 'flex',
		height: '100%',
		alignItems: 'center',
	},
};

export default styles;

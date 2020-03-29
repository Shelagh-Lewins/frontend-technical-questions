import React from 'react';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import Solution from './images/solution.png';

const question = () => {
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Four
			</Typography>
			<Typography variant="h5" gutterBottom>
				Click me
			</Typography>
			<Typography variant="body1" gutterBottom>
				This task revolves around a bug in a clickable list component.
			</Typography>
			<Typography variant="body1" gutterBottom>
				Your task if you choose to accept it, is to resolve this bug (displayed on the right and in the console).
			</Typography>
			<Typography variant="body1" gutterBottom>
				Below is what the final solution should look like; you should be able to select any list item. (Email address and phone number will vary.)
			</Typography>
			<CardMedia
				image={Solution}
				style={{
					width: '100%',
					height: 500,
					backgroundSize: 'contain',
				}}
				title="The Solution"
			/>
		</div>
	);
};

export default 	question;

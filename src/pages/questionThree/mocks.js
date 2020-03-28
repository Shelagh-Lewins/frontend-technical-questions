import AcUnit from '@material-ui/icons/AcUnit';
import UUID from 'uuid/v4';
// Assume the mock data will be extended in future
/* eslint-disable import/prefer-default-export */

/*
* Please do not add all the mock data statically here.
* While you would solve the problem, you would not be solving the bug ;)
* */

const defaultMock = {
	species: 'Human',
	name: 'Jon Snow',
	Icon: AcUnit,
	description: 'You know nothing, Jon Snow.',
};


const createRowData = ({
	name,
	species,
	Icon,
	description,
}) => ({
	id: UUID(),
	name: name || defaultMock.name,
	species: species || defaultMock.species,
	Icon: Icon || defaultMock.Icon,
	description: description || defaultMock.description,
});


export { createRowData };

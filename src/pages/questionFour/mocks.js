import AcUnit from '@material-ui/icons/AcUnit';
// Assume the mock data will be extended in future
/* eslint-disable import/prefer-default-export */

global.defaultMock = {
	species: 'Human',
	name: 'Jon Snow',
	Icon: AcUnit,
	description: 'You know nothing, Jon Snow.',
	contact: {},
	score: 10,
};

const createDefaultMock = () => {
	global.defaultMock.contact.email = `${Math.floor(Math.random() * 100000)}@test.com`;
	global.defaultMock.contact.phone = `0789 ${Math.floor(Math.random() * 100000)}`;
};

const createRowData = ({
	name,
	species,
	Icon,
	description,
}) => {
	createDefaultMock();
	const rowData = { ...global.defaultMock };
	rowData.name = name || global.defaultMock.name;
	rowData.species = species || global.defaultMock.species;
	rowData.Icon = Icon || global.defaultMock.icon;
	rowData.description = description || global.defaultMock.description;

	return rowData;
};


export { createRowData };

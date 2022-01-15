import React from 'react';

import ClayButton from '@clayui/button';

const CustomButton = () => {
	
	const [name, setName] = React.useState('test');
	
	return (
		<ClayButton displayStyle='primary'>
			TEST
		</ClayButton>
		);
}

export default CustomButton;

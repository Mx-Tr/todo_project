import React from 'react';
import cl from "./MainInput.module.css"

const MainInput = (props) => {
	return (
		<input
			className={cl.mainInput}
			{...props}
		/>
	);
};

export default MainInput;
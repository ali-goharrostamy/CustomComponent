import React from "react";

type props = {

	style          : string,
	onClick        : string,
	ButtonUrl      : string,
	styleWrapper   : string,
	ButtonContent  : string,
	buttonsWrapper : string,
}

import { Link } from "react-router-dom";

const Buttons = ({ 
	
	style         ,
	onClick       ,
	ButtonUrl     ,
	styleWrapper  ,
	ButtonContent ,
	buttonsWrapper,

} : props) => {

	return (

		<div className={buttonsWrapper} style={styleWrapper}>

			<Link style={style} to={ButtonUrl} onClick={onClick}>

				{ButtonContent}

			</Link>

		</div>
	);
};

export default Buttons;

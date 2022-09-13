import { Routes, Route } from "react-router-dom";

import { 
	
	Page404          ,
	CustomList       ,
	CustomButton     ,
	CustomDropdown   ,
	CustomToastAlert ,
	CustomSweetAlert ,
	CustomButtonGroup,

} from "../Screens";

function WebsiteRoutes() {

	return (

			<Routes>

				<Route path="/customList"        element={<CustomList        />} />
				<Route path="/customButton"      element={<CustomButton      />} />
				<Route path="/CustomDropdown"    element={<CustomDropdown    />} />
				<Route path="/customToastAlert"  element={<CustomToastAlert  />} />
				<Route path="/customSweetAlert"  element={<CustomSweetAlert  />} />
				<Route path="/customButtonGroup" element={<CustomButtonGroup />} />

				<Route path='/*' element={<Page404 />} />

			</Routes>

	)
}

export default WebsiteRoutes;

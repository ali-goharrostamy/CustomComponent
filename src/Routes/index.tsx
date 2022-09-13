import WebsiteRoutes from "./WebsiteRoutes"

import { Route, Routes } from "react-router-dom"

function index() {

	return (

		<Routes>

			<Route path='/*' element={<WebsiteRoutes />} />

		</Routes>

	)
}

export default index;

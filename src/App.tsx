import { QueryClient, QueryClientProvider } from "react-query";

import {Link} from "react-router-dom";

import Route from "./Routes"

function App() {

    return (

        <QueryClientProvider client={ new QueryClient }>

            <ul className="routesLink">

                <li><Link to="/customSweetalert"  > CustomSweetAlert  </Link></li>
                <li><Link to="/customDropdown"    > CustomDropdown    </Link></li>
                <li><Link to="/customToastAlert"  > CustomToastAlert  </Link></li>
                <li><Link to="/customButton"      > CustomButton      </Link></li>
                <li><Link to="/customButtonGroup" > CustomButtonGroup </Link></li>
                <li><Link to="/customList"        > CustomList        </Link></li>

            </ul>

            <Route />

        </QueryClientProvider>

    )

}

export default App

import {Route,Routes} from "react-router-dom";
import HomePage from "../home/page/HomePage";
import { App_Routes } from "../utils/app-routes";

const AppRoutes = () => {

    return(
        <Routes>
            <Route key={'urlhomepage'} path={App_Routes.HOME} element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes;
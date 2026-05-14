
import {Route,Routes} from "react-router-dom";
import HomePage from "../home/page/HomePage";
import AboutPage from "../home/page/AboutPage";
import ProductPage from "../home/page/ProductPage";
import ContactPage from "../home/page/ContactPage";
import { App_Routes } from "../utils/app-routes";


const AppRoutes = () => {

    return(
        <Routes>
            <Route key={'urlhomepage'} path={App_Routes.HOME} element={<HomePage />} />
            <Route key={'urlabout'} path={App_Routes.ABOUT} element={<AboutPage />} />
            <Route key={'urlproducts'} path={App_Routes.PRODUCTS} element={<ProductPage />} />
            <Route key={'urlcontact'} path={App_Routes.CONTACT} element={<ContactPage />} />
        </Routes>
    )
}

export default AppRoutes;
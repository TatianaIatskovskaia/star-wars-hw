import Header from "./Header.tsx";
import {Outlet} from "react-router";
import Footer from "./Footer.tsx";

const Layout = () => {
    return (
        <div className={'mx-2'}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
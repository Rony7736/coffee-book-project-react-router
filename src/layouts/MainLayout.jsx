import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <div className="h-16">
                {/* navbar */}
                <Navbar></Navbar>
            </div>

            {/* Dynamic Section */}
            <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
                <Outlet></Outlet>

            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
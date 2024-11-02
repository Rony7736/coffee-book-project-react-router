import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* Dynamic Section */}
            <div className="min-h-[calc(100vh-232px)]">
                

            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
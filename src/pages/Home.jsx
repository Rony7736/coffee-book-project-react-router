import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Heading */}
            <Heading title={'Browse Coffees by Category'} subTitle={'Close your desire coffee category to browse through specific coffees that fit in your taste'}></Heading>

            {/* Categories tab section */}
            {/* Dynamic Nested Components */}
        </div>
    );
};

export default Home;
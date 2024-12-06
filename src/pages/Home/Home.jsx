import Services from "./Services"
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import TeamCollaboration from "./TeamCollaboration";
import OfficeFacilities from "./OfficeFacilities";


const Home = () => {
    return (
        <div >
            <Banner ></Banner>
            <Services></Services>
            <Testimonials></Testimonials>
            <TeamCollaboration></TeamCollaboration>
            <OfficeFacilities></OfficeFacilities>
        </div>
    );
};

export default Home;
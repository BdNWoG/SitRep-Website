import { LandingThree } from "@/components/landing/landing-three";
import { LandingPricing } from "@/components/landing/landing-pricing";
import { AboutNavbar } from "@/components/landing/about-navbar";

const AboutPage = () => {
    return (
        <div className="h-full">
            <AboutNavbar/>
            <LandingThree/>
            <LandingPricing/>
        </div> 
    );
}
// animation when spawn in!

export default AboutPage;
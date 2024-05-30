import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingContent } from "@/components/landing/landing-content";
import { LandingTwo } from "@/components/landing/landing-two";

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar/>
            <LandingHero/>
            <LandingContent/>
            <LandingTwo/>
        </div> 
    );
}

export default LandingPage;
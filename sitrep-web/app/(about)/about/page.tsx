import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingContent } from "@/components/landing/landing-content";
import { LandingTwo } from "@/components/landing/landing-two";
import { LandingThree } from "@/components/landing/landing-three";
import { LandingPricing } from "@/components/landing/landing-pricing";

const AboutPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar/>
            <LandingHero/>
            <LandingContent/>
            <LandingThree/>
            <LandingPricing/>
            <LandingTwo/>
        </div> 
    );
}
// animation when spawn in!

export default AboutPage;
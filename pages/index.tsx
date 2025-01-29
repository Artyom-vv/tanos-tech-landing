import {Hero} from "@/screens/Hero";
import {Advantages} from "@/screens/Advantages";
import {Services} from "@/screens/Services";
import {Banner} from "@/screens/Banner";
import {Project} from "@/screens/Projects";

export default function Home() {
    return (
        <div className="wrapper overflow-x-hidden h-full">
            <Hero/>
            <Advantages/>
            <Services/>
            <Banner/>
            <Project/>
        </div>
    )
}
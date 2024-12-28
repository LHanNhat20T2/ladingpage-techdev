"use client";
import About from "@/components/About/About";
import ClientReview from "@/components/ClientReview/ClientReview";
import Feature from "@/components/Feature/Feature";
import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing/Pricing";
import Service from "@/components/Services/Service";
import Team from "@/components/Team/Team";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        const initAOS = async () => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            });
        };
        initAOS();
    }, []);
    return (
        <div className="overflow-hidden ">
            <Hero />
            <About />
            <Feature />
            <Service />
            <ClientReview />
            <Team />
            <Pricing />
        </div>
    );
};
export default Home;

"use client";
import MobileNav from "@/components/Home/Navbar/MobileNav";
import Nav from "@/components/Home/Navbar/Nav";
import { useState } from "react";

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);
    return (
        <div>
            <Nav openNav={openNavHandler} />
            <MobileNav showNav={showNav} closeNav={closeNavHandler} />
        </div>
    );
};
export default ResponsiveNav;

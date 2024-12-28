import FooterCard from "@/components/Footer/FooterCard";
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-16">
            <div className="w-[80%] mx-auto items-start grid-cols-1 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <FooterCard
                    title="Solution"
                    items={["Enterprise", "By Workflow", "By Team"]}
                />
                <FooterCard
                    title="Company"
                    items={[
                        "About Us",
                        "News & Press",
                        "Our Customer",
                        "Leadership",
                        "Careers",
                    ]}
                />
                <FooterCard
                    title="Resources"
                    items={["Blog", "Webinar & Events", "E-book & Guides"]}
                />
                <div>
                    <h1 className="text-lg font-bold">Contact Us</h1>
                    <div className="mt-6">
                        <h1 className="capitalize text-sm text-gray-600">
                            Our Mobile Number
                        </h1>
                        <h1 className="text-base font-bold text-blue-950">
                            +0123 4234943234
                        </h1>
                    </div>
                    <div className="mt-6">
                        <h1 className="capitalize text-sm text-gray-600">
                            Our Email
                        </h1>
                        <h1 className="text-base font-bold text-blue-950">
                            example@gmail.com
                        </h1>
                    </div>
                </div>
            </div>
            <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm ">
                <p className="text-center md:text-left">
                    Copyright © 2024 Webdev. All rights reserved
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <span>Social: </span>
                    <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
                        <FaFacebook />
                    </span>
                    <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
                        <FaTwitter />
                    </span>
                    <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
                        <FaDribbble />
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Footer;

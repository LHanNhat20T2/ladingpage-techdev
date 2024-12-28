import React from "react";

type Props = {
    children: React.ReactNode;
    time: string;
    title: string;
    price: string;
};
const PricingCard = ({ children, time, title, price }: Props) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="bg-white rounded-lg p-8 relative border-t-4 border-rose-300"
        >
            <h1 className="text-sky-500 text-xl font-bold">{title}</h1>
            <p>{children}</p>
            <div className="mt-8">
                <div className="text-gray-700 font-semibold text-lg">
                    <span className="text-4xl font-bold text-black">
                        {price}
                    </span>
                    / {time}
                </div>
            </div>
            <div className="mt-12">
                <a
                    href="#_"
                    className="px-10 py-2.5 text-base font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto"
                >
                    Upgrade Now
                </a>
            </div>
        </div>
    );
};
export default PricingCard;

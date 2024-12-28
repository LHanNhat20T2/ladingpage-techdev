import FeatureCard from "@/components/Feature/FeatureCard/FeatureCard";
import Image from "next/image";
import { GoWorkflow } from "react-icons/go";
import { LuPen } from "react-icons/lu";
import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md";

const Feature = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div>
                <h1 className="capitalize text-center text-2xl text-blue-900 font-bold">
                    Key Features Of The Product
                </h1>
                <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
                    Our product stands out with its high performance, delivering
                    blazing-fast speeds and seamless multitasking
                </p>
            </div>
            {/* Main grid */}
            <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                {/* Inner grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* 1st box */}
                    <FeatureCard
                        title="App Integration"
                        image={
                            <MdOutlineTouchApp className="w-6 h-6 text-orange-400" />
                        }
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias quis consequatur esse amet possimus
                        debitis assumenda libero
                    </FeatureCard>
                    <FeatureCard
                        title="Workflow Builder"
                        image={
                            <GoWorkflow className="w-6 h-6 text-orange-400" />
                        }
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias quis consequatur esse amet possimus
                        debitis assumenda libero
                    </FeatureCard>
                    <FeatureCard
                        title="Problem Solution"
                        image={<LuPen className="w-6 h-6 text-orange-400" />}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias quis consequatur esse amet possimus
                        debitis assumenda libero
                    </FeatureCard>
                    <FeatureCard
                        title="Lifetime Access"
                        image={
                            <MdAccessAlarm className="w-6 h-6 text-orange-400" />
                        }
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestias quis consequatur esse amet possimus
                        debitis assumenda libero
                    </FeatureCard>
                </div>
                {/* Image content */}
                <div className="">
                    <Image
                        src="/images/f1.png"
                        alt="feature"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    );
};
export default Feature;

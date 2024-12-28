import BoxText from "@/components/Helper/BoxText";
import Image from "next/image";

const About = () => {
    return (
        <div className="py-16">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image content */}
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <Image
                        src="/images/about.png"
                        alt="about"
                        width={600}
                        height={600}
                    />
                </div>
                {/* Text-content */}
                <div>
                    <BoxText>About Us</BoxText>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading[2.5rem] sm:leading-[3rem] capitalize">
                        Everything You need to grow your business
                    </h1>
                    <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus assumenda explicabo blanditiis suscipit,
                        nostrum culpa porro repellat perferendis quisquam ad
                        vitae reiciendis exercitationem facere similique quaerat
                        dicta dignissimos omnis hic eos illo facilis quia odio
                        consectetur quis. Aut, harum consequuntur.
                    </p>
                    <button className="mt-5 text-primary font-bold border-b-2 border-primary capitalize">
                        Learn More &#8594;
                    </button>
                    <div className="mt-8 border-l-2  border-gray-200">
                        <div className="ml-6">
                            <p className="text-gray-700 font-medium">
                                &quot; The many integrations that can be linked
                                really help me see data from other tools I also
                                use. &quot;
                            </p>
                            <div className="flex items-center space-x-6 mt-6">
                                <Image
                                    src="/images/u1.jpg"
                                    alt="user"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-medium">Jessica Doe</p>
                                    <p className="text-gray-700 text-sm">
                                        Web Developer @TechDev
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;

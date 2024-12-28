import BoxText from "@/components/Helper/BoxText";
import ServiceCard from "@/components/Services/ServiceCard";
import { FaBriefcase, FaChess, FaShoppingCart, FaSocks } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

const Service = () => {
    return (
        <div className="py-16">
            <div className="w-[80%] mx-auto">
                <BoxText>Our Service</BoxText>
                {/* heading */}
                <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800 capitalize">
                    Our Services Made For You?
                </h1>
                {/* desc */}
                <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, cum vel nostrum reprehenderit laboriosam eos eaque
                    ex debitis quam numquam.
                </p>
                {/* gird */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
                    {/* 1st */}
                    <ServiceCard
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-center"
                        title="Start up"
                        image={<FaSocks className="w-6 h-6 text-orange-400" />}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </ServiceCard>
                    <ServiceCard
                        title="Bussiness"
                        image={
                            <FaBriefcase className="w-6 h-6 text-orange-400" />
                        }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </ServiceCard>
                    <ServiceCard
                        title="E-commerce"
                        image={
                            <FaShoppingCart className="w-6 h-6 text-orange-400" />
                        }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </ServiceCard>
                    <ServiceCard
                        title="Digital Design"
                        image={
                            <MdOutlineDesignServices className="w-6 h-6 text-orange-400" />
                        }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </ServiceCard>
                    <ServiceCard
                        title="Unlimited Colors"
                        image={
                            <IoColorPaletteOutline className="w-6 h-6 text-orange-400" />
                        }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </ServiceCard>
                    <ServiceCard
                        title="Strategy Solution"
                        image={<FaChess className="w-6 h-6 text-orange-400" />}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </ServiceCard>
                </div>
            </div>
        </div>
    );
};
export default Service;

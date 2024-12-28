import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

type Props = {
    image: string;
    name: string;
    rating: string;
    children: React.ReactNode;
};
const ClientReviewCard = ({ image, name, rating, children }: Props) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className="bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg"
        >
            <div>
                <Image
                    src={image}
                    alt={name}
                    width={150}
                    height={150}
                    className="rounded-lg"
                />
            </div>
            <div>
                <h1 className="text-lg font-bold text-blue-950 capitalize">
                    {name}
                </h1>
                <div className="flex items-center space-x-3">
                    <p className="text-2xl font-bold text-orange-500">
                        {rating}
                    </p>
                    <div className="flex items-center">
                        <FaStar className="w-4 h-4 text-yellow-600" />
                        <FaStar className="w-4 h-4 text-yellow-600" />
                        <FaStar className="w-4 h-4 text-yellow-600" />
                        <FaStar className="w-4 h-4 text-yellow-600" />
                        <BsStarHalf className="w-4 h-4 text-yellow-600" />
                    </div>
                </div>
                <p className="mt-2 text-base text-gray-700 font-medium">
                    {children}
                </p>
            </div>
        </div>
    );
};
export default ClientReviewCard;

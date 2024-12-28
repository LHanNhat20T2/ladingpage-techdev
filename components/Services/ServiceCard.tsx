type Props = {
    title: string;
    image: React.ReactElement;
    children: React.ReactNode;
};
const ServiceCard = ({ title, image, children }: Props) => {
    return (
        <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-5"
        >
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                {image}
            </div>
            {/* text content */}
            <div>
                <p className="text-lg font-bold text-gray-700">{title}</p>
                <p className="text-sm text-gray-600">{children}</p>
            </div>
        </div>
    );
};
export default ServiceCard;

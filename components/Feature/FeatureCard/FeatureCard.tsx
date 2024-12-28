type Props = {
    title: string;
    image: React.ReactElement;
    children: React.ReactNode;
};
const FeatureCard = ({ children, title, image }: Props) => {
    return (
        <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="bg-white p-4 rounded-lg"
        >
            <div className="flex items-center space-x-3">
                {/* icon */}
                <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                    {image}
                </div>
                <h1 className="text-lg font-bold text-gray-700 capitalize">
                    {title}
                </h1>
                {/* desc */}
            </div>
            <p className="my-3 text-gray-700 leading-relaxed">{children}</p>
        </div>
    );
};
export default FeatureCard;

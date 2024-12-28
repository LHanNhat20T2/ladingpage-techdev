import PricingCard from "@/components/Pricing/PricingCard";

const Pricing = () => {
    return (
        <div className="py-16 bg-gray-100">
            <h1 className="text-center text-2xl text-blue-950 font-bold">
                Choose The Plan That&apos;s Right For You
            </h1>
            <p className="mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                magnam pariatur commodi maiores consequuntur a.
            </p>
            <div className="w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
                <PricingCard
                    title="3 Month Membership"
                    price="$39.99"
                    time="Month"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere dolores culpa in maxime tempora cumque
                </PricingCard>
                <PricingCard
                    title="12 Month Membership"
                    price="$19.99"
                    time="Month"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere dolores culpa in maxime tempora cumque
                </PricingCard>
                <PricingCard
                    title="Life time Membership"
                    price="$9.99"
                    time="Month"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere dolores culpa in maxime tempora cumque
                </PricingCard>
            </div>
        </div>
    );
};
export default Pricing;

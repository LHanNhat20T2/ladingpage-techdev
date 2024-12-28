import ClientReviewCard from "@/components/ClientReview/ClientReviewCard";

const ClientReview = () => {
    return (
        <div className="py-16 bg-gray-100">
            <h1 className="text-center text-2xl text-blue-950 font-bold">
                What Our Happy Client Says
            </h1>
            <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                magnam pariatur commodi maiores consequuntur a.
            </p>
            {/* grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
                <ClientReviewCard
                    name="Jasica Doe"
                    rating="4.7"
                    image="/images/u1.jpg"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto rerum recusandae sint quisquam ullam quo.
                </ClientReviewCard>
                <ClientReviewCard
                    name="John Doe"
                    rating="4.5"
                    image="/images/u2.jpg"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto rerum recusandae sint quisquam ullam quo.
                </ClientReviewCard>
                <ClientReviewCard
                    name="Sasuke Uchiha"
                    rating="4.3"
                    image="/images/u3.jpg"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto rerum recusandae sint quisquam ullam quo.
                </ClientReviewCard>
                <ClientReviewCard
                    name="Boruto Uzumaki"
                    rating="4.9"
                    image="/images/u4.jpg"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto rerum recusandae sint quisquam ullam quo.
                </ClientReviewCard>
            </div>
        </div>
    );
};
export default ClientReview;

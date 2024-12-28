import FooterTitle from "@/components/Footer/FooterTitle";
type Props = {
    title: string;
    items: string[];
};
const FooterCard = ({ title, items }: Props) => {
    return (
        <>
            <div className="space-y-5">
                <h1 className="text-lg font-bold">{title}</h1>
                {items.map((item, index) => (
                    <FooterTitle key={index}>{item}</FooterTitle>
                ))}
            </div>
        </>
    );
};
export default FooterCard;

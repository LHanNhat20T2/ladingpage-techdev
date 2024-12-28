type Props = {
    children: React.ReactNode;
};

const FooterTitle = ({ children }: Props) => {
    return (
        <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {children}
        </p>
    );
};
export default FooterTitle;

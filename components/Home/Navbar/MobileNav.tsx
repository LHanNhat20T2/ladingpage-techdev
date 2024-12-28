import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
    showNav: boolean;
    closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    return (
        <div>
            {/* Overlay */}
            <div
                className={` ${navOpen} fixed inset-0 z-[1002] transform bg-black opacity-70 w-full h-screen transition-all duration-500
            }`}
            ></div>

            {/* NavLinks */}
            <div
                className={` ${navOpen} fixed justify-center  inset-0 h-full w-[80%] sm:w-[60%] bg-blue-900 text-white flex flex-col space-y-6 transform transition-all delay-300 duration-500 z-[1050]
            }`}
            >
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.id}>
                        <p
                            className={`text-white  w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]`}
                        >
                            {link.label}
                        </p>
                    </Link>
                ))}
                {/* Close icon */}
                <CgClose
                    onClick={closeNav}
                    className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer "
                />
            </div>
        </div>

        // <div>
        //     {/* overlay */}
        //     <div
        //         className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
        //     ></div>
        //     {/* NavLinks */}
        //     <div
        //         className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]`}
        //     >
        //         {navLinks.map((link) => (
        //             <Link href={link.url} key={link.id}>
        //                 <p className="nav___link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm-text-[30px]">
        //                     {link.label}
        //                 </p>
        //             </Link>
        //         ))}
        //         <CgClose
        //             onClick={closeNav}
        //             className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        //         />
        //     </div>
        //     {/* Close icon */}
        // </div>
    );
};
export default MobileNav;

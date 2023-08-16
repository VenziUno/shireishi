import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import Navigation from "./navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Logo = require('../../public/images/logo.png');
  return (
    <div className="relative top-0 z-50 header__background py-1 w-full px-4 md:px-0">
      <div className="flex sm:items-center justify-between items-center custom__container">
        <div>
          <Link href="/">
            <Image layout="fixed"
                className="cursor-pointer xl:w-[80px] w-[80px]"
                src={Logo}
                alt="Shireishi"
                width={80}
                height={80}
            />
          </Link>
        </div>
        <div className="flex flex-row">
          <div className="md:hidden ">
            <button className="text-2xl" onClick={() => setIsOpen(true)} style={{ color: 'white' }}>
              <FaBars />
            </button>
          </div>
          <Navigation isMobileView={false} setIsOpen={setIsOpen} />
        </div>
      </div>
      <div
        className={`${isOpen ? "right-0" : "-right-full"
          } bg-[#3c3c3c] min-h-screen fixed top-0 w-full overflow-y-auto ease-in-out duration-500 z-50 md:hidden`}
      >
        <div className="flex items-center lg:my-6 justify-between bg-primary p-5">
          <Link href="/">
            <div className="logo__container flex">
              <Image layout="fixed"
                className="cursor-pointer"
                src={Logo}
                alt="Crypto Wallet"
                width={100}
                height={100}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </Link>
          <button className={"text-2xl md:hidden"} onClick={() => setIsOpen(false)} style={{ color: 'white' }}>
            <FaTimes />
          </button>
        </div>
        <Navigation isMobileView={true} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Header;

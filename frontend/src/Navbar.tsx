import clsx from "clsx";
import { FaWallet } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";

import { IoBookmark, IoLogoSlack } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { RiSearchFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    path: "/",
    name: "Home",
    icon: <HiMiniHome size={25} />,
  },
  {
    path: "/search",
    name: "Search",
    icon: <RiSearchFill size={25} />,
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    icon: <IoBookmark size={25} />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <MdVerifiedUser size={25} />,
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: <FaWallet size={25} />,
  },
];

export const Navbar = () => {
  const activeLink = useLocation();

  return (
    <nav className="fixed w-[5%] min-h-dvh flex flex-col items-center justify-between py-20">
      <IoLogoSlack color="white" size={45} />

      <div className="flex flex-col gap-10">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={clsx(
              "relative",
              { "text-gray": activeLink.pathname !== link.path },
              { "text-white": activeLink.pathname === link.path }
            )}
          >
            {activeLink.pathname === link.path && (
              <div className="absolute top-0 -left-[1.4vw] w-2 h-7 bg-white rounded-tr-xl rounded-br-xl" />
            )}
            {link.icon}
          </Link>
        ))}
      </div>
      <div></div>
    </nav>
  );
};

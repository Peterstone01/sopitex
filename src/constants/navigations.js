import { IoHomeOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { GrServices } from "react-icons/gr";

export const navigations = [
  {
    name: "Home",
    href: "home",
    Icon: IoHomeOutline,
  },
  {
    name: "About",
    href: "about",
    Icon: FaUserTie,
  },
  {
    name: "Services",
    href: "services",
    Icon: GrServices,
  },

  {
    name: "Contacts",
    href: "contact",
    Icon: MdPhoneInTalk,
  },
];

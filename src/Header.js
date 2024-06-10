import { useEffect, useState } from "react";
import {
  BiMenu,
  BiSearch,
  BiUser,
  BiChevronRight,
  BiHomeAlt,
  BiVolumeFull,
  BiDownArrowCircle,
  BiUserPlus,
} from "react-icons/bi";
import {
  FaInstagram,
  FaLanguage,
  FaMoneyCheckDollar,
  FaPhoneVolume,
  FaPodcast,
  FaTwitter,
} from "react-icons/fa6";
import { CiInstagram, CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
import { Sidebar } from "primereact/sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  const headerTemple = () => {
    return (
      <>
        <div className="flex items-center justify-between w-full border-b border-white/20 py-5 ">
          <h1 className="text-white font-bold">Login / Sign Up</h1>
          <BiChevronRight size={30} color="#fff" />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="dark:bg-black/90 bg-red-500 z-40 w-screen">
        <div className="px-3 py-5 md:px-36 duration-300 flex justify-between items-center">
          <div className=" flex items-center gap-3 duration-300">
            <h4 className="text-white/90 font-normal text-nowrap capitalize flex gap-1 items-center text-xl">
              Wynke <p className="text-xs mt-1">Music Clone</p>
            </h4>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden md:block">
              <div className="border border-gray-500/60 bg-gradient-to-b from-slate-600/30 to-black/5 rounded-full px-2 py-2 flex items-center justify-center gap-3">
                <BiSearch className="text-white/50 mx-3 my-1" size={20} />
                <input
                  className="bg-transparent w-60 valid:outline-none text-white"
                  placeholder="Search Song"
                ></input>
              </div>
            </div>
            <div className="">
              <ul className="flex items-center">
                <li className="hidden md:block text-white font-normal">
                  <span className="flex items-center gap-2 px-5">
                    <FaMoneyCheckDollar size={20} />
                    <label className="text-sm">Mange Subscription</label>
                  </span>
                </li>
                <li className="hidden md:block">
                  <div className="border-l border-white/40 h-10" />
                </li>
                <li className="md:hidden px-3">
                  <BiSearch color="#fff" size={25} />
                </li>
                <li className="hidden md:block text-white font-normal">
                  <span className="flex items-center gap-2 px-5">
                    <BiUser className="text-3xl" />
                    Login
                  </span>
                </li>
                <li className="text-white">
                  <BiMenu className="text-3xl" onClick={() => setOpen(!open)} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card flex justify-content-center">
        <Sidebar
          visible={open}
          showCloseIcon={false}
          header={headerTemple}
          position="right"
          onHide={() => setOpen(false)}
          className="dark:bg-slate-950"
        >
          <div>
            <ul>
              <li className="py-3">
                <span className="flex items-center gap-3 text-white/95">
                  <BiHomeAlt size={25} />
                  <label className=" text-sm">Home</label>
                </span>
              </li>
              <li className="py-3">
                <span className="flex items-center gap-3 text-white/95">
                  <FaMoneyCheckDollar size={25} />
                  <label className=" text-sm">Manage Subscription</label>
                </span>
              </li>
              <li className="py-3">
                <span className="flex items-center gap-3 text-white/95">
                  <FaPhoneVolume size={25} />
                  <label className=" text-sm">Hellotunes</label>
                </span>
              </li>
              <li className="py-3">
                <span className="flex items-center gap-3 text-white/95">
                  <FaPodcast size={25} />
                  <label className=" text-sm">Podcasts</label>
                </span>
              </li>
              <li className="py-3">
                <span className="flex items-center gap-3 text-white/95">
                  <FaLanguage size={25} />
                  <label className=" text-sm">Select Language</label>
                </span>
              </li>
              <li className="py-3">
                <span className="flex items-center gap-3 text-white/95">
                  <BiDownArrowCircle size={25} />
                  <label className=" text-sm">Donload App </label>
                </span>
              </li>
              <li className="py-3">
                <span className="flex items-center gap-3 text-white/95">
                  <BiVolumeFull size={25} />
                  <label className=" text-sm">Sound Quality</label>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex gap-3 py-3 border-t border-white/20">
              <div className="flex">
                <BiUserPlus size={30} color="#fff" />
              </div>
              <div>
                <h1 className="text-white/90 text-sm">Join Wynk for Artists</h1>
                <p className="text-white/40 text-xs mt-1">
                  Sign up as an Artist on Wynk Studio and release your original
                  songs on Wynk
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <div className="flex gap-5">
              <CiInstagram size={30} color="#fff" />
              <CiTwitter size={30} color="#fff" />
              <CiFacebook size={30} color="#fff" />
              <CiYoutube size={30} color="#fff" />
            </div>
            <div className="py-3">
              <label className="text-xs text-white/70">V6.26.0</label>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}

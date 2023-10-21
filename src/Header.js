import { useEffect, useState } from "react";
import { BiMenu,BiSearch,BiX } from "react-icons/bi";

export default function Header() {
  const [open, setOpen] =useState(false);
   return (
<>
<div className="dark:bg-slate-800 bg-red-500 z-40 w-screen">
  <div className="p-2 flex justify-between items-center">
    <div className=" flex">
    <button className="md:hidden text-3xl text-white pl-4" onClick={()=>setOpen(!open)}><BiMenu/></button>
      <h4 className="text-white font-bold uppercase p-3 flex gap-2 items-center">Wynke <p className="text-xs">Music Clone</p></h4>      
    </div>
    <div className=" hidden md:block">
      <ul className="flex">
        <li className="text-white font-bold p-3">Home</li>
        <li className="text-white font-bold p-3">About us</li>
        <li className="text-white font-bold p-3">Contact us</li>      
      </ul>
    </div>
      <div className="text-white text-2xl lg:hidden"><BiSearch/></div>     
  </div>
</div>
<div className={`${ open ? "w-full": "w-0 "} h-screen duration-75  z-50 absolute top-0`} onClick={()=>setOpen(!open)}>
<div className={`${ open ? "w-72": "w-0"} relative duration-300 bg-slate-900 h-screen`} onClick={()=>setOpen(!open)}>
<button className="text-6xl absolute right-0 top-0 text-white rounded-lg"><BiX /></button>
</div>
</div>
</>
  )
}



import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingBag, HiHome } from "react-icons/hi";
import { BiCart, BiCategoryAlt } from "react-icons/bi";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="w-full mx-auto flex py-3 px-6 justify-between items-center bg-[#f7f1f0]">
      {/* left side */}
      <div className="flex items-center text-[#252b37] ">
        <div onClick={()=>setNav(!nav)} className=" cursor-pointer">
          <FaBars size={30} />
        </div>
        <div className="pl-2 pr-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-[#252b37] ">SnehSaaj</h1>
        </div>
      </div>

      {/* search */}
      <div className="flex rounded-full px-2 items-center bg-gray-100 text-gray-800 w-[200px] sm:w-[400px] lg:w-[500px] cursor-pointer">
        <AiOutlineSearch size={25} />
        <input className="bg-transparent p-2 w-full bg-gray-100 text-gray-800 focus:outline-none " type="text" placeholder="Search Jewellery"/>  
      </div>

      {/* cart */}
      <div className="mr-2">
        <button className="bg-[#1c3244] text-white hidden md:flex rounded-full items-center py-2">
          <IoIosCart size={22} className="mr-2 ml-4"/><div className="mr-4">Cart</div>
        </button>
      </div>

      {nav? <div className="bg-black/80 fixed z-10 w-full h-screen left-0"></div> :''}
      {/* Mobile menu */}
      

      {/* side menu */}
      <div className={nav?'h-screen fixed bg-white w-full lg:w-[300px] md:w-[300px] left-0 z-10 top-0 duration-300':'h-screen fixed bg-white w-full lg:w-[300px] md:w-[300px] left-[-100%] z-10 top-0 duration-300'}>
        <FaTimes onClick={()=>setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer"/>
        <h2 className="font-signature text-2xl p-4 font-semibold">Shopping App</h2>
        <nav className="">
          <ul className="flex flex-col p-10 text-black font-semibold">
            <li className="flex items-center py-4 cursor-pointer"><HiHome size={25} className="mr-3"/>Home</li>
            <li className="flex items-center py-4 cursor-pointer"><BiCategoryAlt size={25} className="mr-3"/>Category</li>
            <li className="flex items-center py-4 cursor-pointer"><HiShoppingBag size={25} className="mr-3"/>Products</li>
            <li className="flex items-center py-4 cursor-pointer"><BiCart size={25} className="mr-3"/>Cart</li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Navbar;

// const NavBar = () => {
//   const [nav, setNav] = useState(false);

//   const links = [
//     {
//       id: 1,
//       link: "home",
//       icon: <HiHome />,
//     },
//     {
//       id: 2,
//       link: "Products",
//       icon: <HiShoppingBag />,
//     },
//     {
//       id: 3,
//       link: "Category",
//       icon: <BiCategoryAlt />,
//     },
//     {
//       id: 4,
//       link: "cart",
//       icon: <IoIosCart />,
//     },
//   ];

//   return (
//     <div className="flex flex-row justify-between w-full h-20 px-4 bg-pink-100 text-black fixed">
//       <div className="flex items-center">
//         <h2 className="text-4xl pt-3 font-bold font-signature">
//           Shopping App
//         </h2>
//       </div>
//       <div className="md:flex hidden items-center justify-center bg-pink-100 space-x-6">
//         <div className="flex relative items-center">
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               placeholder="Search"
//               className="px-6 py-1 rounded-l-full rounded-r-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-black w-80"
//             />
//             <AiOutlineSearch
//               size={20}
//               className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
//             />
//           </div>
//         </div>
//         <ul className="hidden md:flex flex-grow">
//           {links.map(({ id, link, icon }) => (
//             <li
//               key={id}
//               className="px-6 hover:scale-110 text-lg cursor-pointer capitalize font-medium text-black hover:bg-pink-400 hover:bg-opacity-10 hover:rounded-l-full hover:rounded-r-full transition-all duration-300 flex items-center relative"
//             >
//               {icon}
//               <Link
//                 to={link}
//                 smooth
//                 duration={500}
//                 className="ml-2 transition-all duration-300"
//               >
//                 {link}
//                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left"></span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pt-3 pr-4 z-10 text-black md:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//         <div className="relative flex-col items-center">
//             <input
//               type="text"
//               placeholder="Search"
//               className="px-6 py-1 rounded-l-full rounded-r-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-black w-80"
//             />
//             <AiOutlineSearch
//               size={20}
//               className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
//             />
//           </div>

//       </div>
//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black">
//           {links.map(({ id, link, icon }) => (
//             <li
//               key={id}
//               className="px-4 cursor-pointer capitalize py-6 text-4xl"
//             >
//               <Link
//                 onClick={() => setNav(!nav)}
//                 to={link}
//                 smooth
//                 duration={500}
//               >
//                 <div className="flex items-center">
//                   <span className="mr-2">{icon}</span>
//                   {link}
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;

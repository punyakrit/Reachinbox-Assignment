import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from '../assets/logo.svg'
function SideBar() {
  return (
    <div className="bg-[#101113] h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 border-[#343A40] left-0 top-0 fixed z-10">
      <div className="rounded-xl">
        <img src={logo} className="h-8 rounded-xl object-left overflow-visible" alt="Logo"></img>
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10">
        <div className='cursor-pointer'>
          <RiHome5Fill />
        </div>
        <div className='cursor-pointer'>
          <RiUserSearchLine />
        </div>
        <div className='cursor-pointer'>
          <RiMailFill />
        </div>
        <div className='cursor-pointer'>
          <IoIosSend />
        </div>
        <div className='cursor-pointer'>
          <SiElasticstack />
        </div>
        <div className='cursor-pointer'>
          <FaInbox />
        </div>
        <div className='cursor-pointer'>
          <IoStatsChartSharp />
        </div>
      </div>
      <div className="text-white bg-green-500 p-2 rounded-full">
        PS
      </div>
    </div>
  );
}

export default SideBar;

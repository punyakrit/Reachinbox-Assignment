import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

function AllInbox() {
  return (
    <div className="border-r-2 border-[#33383F] h-full overflow-y-scroll">
      <div className="px-4 pt-4 flex justify-between">
        <div className="px-4 ">
          <div className="text-2xl py-3 text-[#4285F4] font-semibold flex items-center">
            All Inbox(s){" "}
            <FaAngleDown className="ml-2 font-normal mt-1 cursor-pointer" />
          </div>
          <div className="">
            25/25 <span className="text-[#7F7F7F]">Inboxes selected</span>
          </div>
        </div>
        <div className="p-3 mt-3 bg-[#25262B] mr-4 rounded-xl h-min cursor-pointer">
          <TbReload />
        </div>
      </div>

      <div className="my-4 px-8">
        <div className="relative">
          <input
            placeholder=" Search"
            className="w-full bg-[#23272C] rounded-md p-1 pl-8 border border-[#FFFFFF1A]"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="flex justify-between py-4">
          <div>
            <span className="bg-[#222426] text-[#5C7CFA] px-2 py-1 rounded-3xl">
              26
            </span>{" "}
            New Replies
          </div>
          <div className="flex items-center">
            Newest <FaAngleDown className="ml-3 text-xl" />
          </div>
        </div>
      </div>

      <div>
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />

      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="border-t-2 border-[#ffffff25] mx-8 py-4">
      <div>
        <div className="flex justify-between">
          <div className="text-xl font-normal">Beata@gmail.com</div>
          <div className="text-[#FCFCFC66] font-thin pr-3">Mar 7</div>
        </div>
        <div className="py-2 text-[#E1E0E0] font-normal">I've tried a lot and .</div>
        <div className="flex">
          <div className="bg-[#222426] px-3 py-1 rounded-2xl text-[#57E0A6] text-sm">Interested</div>
          <div className="bg-[#222426] px-3 py-1 rounded-2xl text-[#FFFFFF] text-sm ml-2">Campaign Name</div>
        </div>
      </div>
    </div>
  );
}

export default AllInbox;

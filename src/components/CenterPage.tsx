import { FaReply } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineExpand } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

function CenterPage() {
  return (
    <div className="overflow-y-scroll h-full">
      <div className="border-b-2 border-[#33383F] w-full flex justify-between px-8 py-4">
        <div>
          <div className="text-lg">Orlando</div>
          <div className="text-[#FFFFFF66] text-sm">orladom@gmail.com</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex bg-[#1F1F1F] border border-[#343A40] items-center rounded-md py-2 px-3 text-sm">
            <GoDotFill className="text-yellow-500 text-xl" /> Meeting Completed{" "}
            <SlArrowDown className=" ml-2" />
          </div>
          <div className="bg-[#1F1F1F] flex items-center border border-[#343A40] rounded-md py-2 px-3 text-sm">
            Move <SlArrowDown className=" ml-2" />
          </div>
          <div className="bg-[#1F1F1F] border border-[#343A40] rounded-md py-2 px-3 text-sm">
            ...
          </div>
        </div>
      </div>

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full bg-[#33383F]"></div> {/* Line */}
        <div className="absolute inset-0 flex justify-center items-center">
          {" "}
          <div className="bg-[#171819] px-4 py-1 text-sm "> Today</div>
        </div>
      </div>

      <Mail />

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full bg-[#33383F]"></div> {/* Line */}
        <div className="absolute inset-0 flex justify-center items-center">
          {" "}
          <div className="bg-[#171819] px-4 py-1 text-sm flex items-center space-x-1">
            {" "}
            <MdOutlineExpand className="mr-3 text-xl text-[#AEAEAE]" /> View all{" "}
            <span className="text-blue-500"> 4 </span>
            <span>replies</span>
          </div>
        </div>
      </div>

      <div className="cursor-pointer flex items-center fixed bottom-0 ml-10 mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-10 py-2">
       <FaReply className="mr-2 text-xl"/> Reply
      </div>
    </div>
  );
}
function Mail() {
  return (
    <div className="bg-[#141517] border border-[#343A40] mx-8 rounded-md my-3">
      <div className="p-4">
        <div className="flex justify-between py-4">
          <div className="space-y-2">
            <div className="font-bold">New Product Launch</div>
            <div className="text-[#AEAEAE] text-sm">
              from : jeanne@icloud.com cc : lennon.j@mail.com
            </div>
            <div className="text-[#AEAEAE] text-sm">to : lennon.j@mail.com</div>
          </div>
          <div>
            <div className="text-[#AEAEAE] text-sm">20 june 2022 : 9:16AM</div>
          </div>
        </div>
        <div className="py-4 text-[#E1E0E0] w-2/3">
          <div>Hi FIRST_NAME,</div>
          <div className="pt-4">
            I would like to introduce you to SaaSgrow, a productized design
            service specifically tailored for saas startups. Our aim is to help
            you enhance the user experience and boost the visual appeal of your
            software products.
          </div>
        </div>
      </div>
    </div>
  );
}
export default CenterPage;

import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";

function CustomMail() {
  return (
    <div className="bg-gray-400/25 fixed top-0 left-0 flex justify-center items-center h-full w-full ">
      <div className="bg-[#141517] w-1/2 h-4/5 rounded-lg border border-[#41464B]">
        <div className="flex justify-between items-center px-4 bg-[#23272C] rounded-t-lg py-2 border-b border-[#41464B]">
          <div className="pl-4 text-sm">Reply</div>
          <div>
            <RxCross2 className="tetx-xl" />
          </div>
        </div>
        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD]">To :</div>
          <input
            className="bg-transparent ml-4"
            placeholder="Sender's Email"
          ></input>
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD]">From :</div>
          <input
            className="bg-transparent ml-4"
            placeholder="Reciever's Email"
          ></input>
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD]">Subject :</div>
          <input className="bg-transparent ml-4" placeholder="Subject"></input>
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] px-4 pr-8 pt-8 h-2/3">
          <textarea
            className="bg-transparent ml-4 w-full h-full"
            placeholder="Hi Jeanne,"
          ></textarea>
        </div>

        <div className="flex space-x-8 items-center h-16 ml-8">
          <div className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-5 py-2 rounded-md flex items-center">
            Send <FaCaretDown className="ml-4" />
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <BsLightningChargeFill className="mr-3" />
            Variables
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <FaEye className="mr-3" />
            Preview Email
          </div>
          <div className="flex space-x-3 text-xl text-[#ADADAD]">
            <div>
              {" "}
              <TbSquareLetterA />
            </div>
            <div>
              {" "}
              <IoLinkSharp />
            </div>
            <div>
              {" "}
              <FaImage />
            </div>
            <div>
              {" "}
              <FaRegSmile />
            </div>
            <div>
              {" "}
              <FaUserMinus />
            </div>
            <div>
              {" "}
              <IoMdCode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;

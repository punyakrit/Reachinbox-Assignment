import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomMail from "./CustomMail";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";

interface MailData {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  subject: string;
  body: string;
  sentAt: string;
}

interface Props {
  selectedThread: string;
}

const CenterPage: React.FC<Props> = ({ selectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedMail, setSelectedMail] = useState<MailData[]>([]);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get<MailData[]>(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          // @ts-ignore
          setSelectedMail(res.data.data);
        } catch (error) {
          console.error("Error fetching mail:", error);
        }
      } else {
        setSelectedMail([
          {
            id: 0,
            fromName: "",
            fromEmail: "",
            toName: "",
            toEmail: "",
            subject: "Default Subject",
            body: "Default Body",
            sentAt: "2022-01-01T00:00:00.000Z",
          },
        ]);
      }
    };
    fetchMail();
  }, [selectedThread]);

  console.log(selectedMail);

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
          <div className="bg-[#1F1F1F] border border-[#343A40] rounded-md py-2 px-3 text-sm">...</div>
        </div>
      </div>

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full bg-[#33383F]"></div> {/* Line */}
        <div className="absolute inset-0 flex justify-center items-center">
          {" "}
          <div className="bg-[#171819] px-4 py-1 text-sm "> Today</div>
        </div>
      </div>

<div>

      {selectedMail.map((mail) => (
        <Mail key={mail.id} {...mail} />
        ))}
        </div>

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
      <div className="mx-8">{showPopUp && <CustomMail />}</div>
      <div
        className="cursor-pointer flex items-center fixed bottom-0 ml-10 mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-10 py-2"
        onClick={togglePopUp}
      >
        <FaReply className="mr-2 text-xl" /> Reply
      </div>
    </div>
  );
};

const Mail: React.FC<MailData> = ({ fromName, subject, body, sentAt }) => {
  return (
    <div className="bg-[#141517] border border-[#343A40] mx-8 rounded-md my-3">
      <div className="p-4">
        <div className="flex justify-between py-4">
          <div className="space-y-2">
            <div className="font-bold">{subject}</div>
            <div className="text-[#AEAEAE] text-sm">
              from: {fromName} sent at: {sentAt}
            </div>
          </div>
        </div>
        <div
          className="py-4 text-[#E1E0E0] w-2/3"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default CenterPage;

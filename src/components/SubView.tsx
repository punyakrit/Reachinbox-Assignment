import axios from "axios";
import img from "../assets/i.svg";
import { useEffect } from "react";

function SubView() {

    useEffect(() => {
        async function call() {
          const token = localStorage.getItem("token");
          await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
            headers: {
              Authorization: token,
            },
          });
        }
        call();
      }, []);

      
  return (
    <div className="text-white  flex justify-center items-center h-screen flex-col">
      <div>
        <img src={img}></img>
      </div>
      <div className="text-2xl my-8">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="text-[#9E9E9E]">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default SubView;

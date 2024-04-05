import { useEffect } from "react";
import axios from "axios";
function MainPage() {
  useEffect(() => {
    async function call() {
      const token = localStorage.getItem("token");
      await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
        headers: {
          Authorization: token,
        },
      });
    }
    call();
  }, []);

  return (
    <div className="text-white  flex justify-center items-center h-screen flex-col">
      YOoo
    </div>
  );
}

export default MainPage;

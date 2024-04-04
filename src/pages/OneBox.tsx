import  { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import MainPage from "../components/MainPage";

function OneBox() {
    const Navigate = useNavigate()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  

  useEffect(() => {
      if(!token){
          Navigate('/login')
        }
    if (token) {
        
      localStorage.setItem('token', `Bearer ${token}`);
    }
  }, [token]);

  return (
    <div className="h-screen w-screen bg-black pl-14">
      <SideBar/>
      <TopBar/>
      <MainPage/>

    </div>
  );
}

export default OneBox;

import AppBar from "../components/AppBar";
import google from "../assets/google.svg";
import Footer from "../components/Footer";
function Login() {
  return (
    <div>
      <AppBar />
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div className="mt-6 border-white/40 border px-20 py-2 text-sm  flex items-center text-[#CCCCCC] rounded-lg cursor-pointer">
              <img src={google} alt="google" className="w-4 mr-3"></img>
              Sign Up with Google
            </div>
          </div>
          <div className="">
            <div className="bg-gradient-to-tr from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 text-sm py-3 rounded-md cursor-pointer">
              Create an Account
            </div>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account? <span className="text-[#C1C2C5] cursor-pointer">Sign In</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;

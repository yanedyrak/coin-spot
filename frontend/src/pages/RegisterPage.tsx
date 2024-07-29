import { IoLogoSlack } from "react-icons/io5";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className=" -translate-x-[5%] w-[100vw] h-screen fixed bg-black z-10 grid grid-cols-2">
      <div className="flex flex-col items-center justify-center bg-lightgreen rounded-tr-3xl rounded-br-3xl ">
        <h1 className="text-5xl font-bold mb-20">Register your account!</h1>

        <input
          placeholder="Email"
          className="w-96 pl-8 py-3 rounded-3xl bg-[#d7e0d5]"
          type="email"
        />
        <input
          placeholder="Password"
          className="w-96  pl-8 py-3 rounded-3xl bg-[#d7e0d5] mt-7"
          type="password"
        />
        <p className="mt-5">
          Already have an
          <Link className="underline ml-1 text-green" to="/login">
            account
          </Link>
        </p>
        <button className="mt-5 px-28 py-3 rounded-3xl text-white duration-500 bg-darkgreen hover:bg-green">
          Register
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <IoLogoSlack className="rotate-45" size={400} color="white" />
      </div>
    </div>
  );
};

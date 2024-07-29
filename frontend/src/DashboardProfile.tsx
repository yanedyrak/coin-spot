import { MdLogout } from "react-icons/md";

export const DashboardProfile = () => {
  return (
    <div className="flex items-center gap-7 ">
      <div>
        <p className="text-[#c0bfbf] text-base text-end">Hello,</p>
        <p className="text-black text-xl">John Doe</p>
      </div>
      <img
        className="rounded-full w-14 h-14"
        src="https://www.my3dselfie.com/cdn/shop/products/Professon_Chihuahua_Front_Compressed.jpg?v=1660327436"
        alt=""
      />
      <MdLogout size={30} />
    </div>
  );
};

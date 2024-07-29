import { FaShareFromSquare } from "react-icons/fa6";

export const BalanceButton = () => {
  return (
    <div className="inline-flex flex-col gap-1 group">
      <button className="bg-[#316e37] p-7 rounded-full duration-500 group-hover:brightness-75">
        <FaShareFromSquare color="white" size={25} />
      </button>
      <p className="text-xs text-center font-bold">Send</p>
    </div>
  );
};

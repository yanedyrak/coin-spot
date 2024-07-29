import { FaFilter } from "react-icons/fa6";
import { BalanceAction } from "./BalanceAction";
import { AiFillPushpin } from "react-icons/ai";

export const Actions = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p className="font-bold">ACTIONS</p>
        <div className="flex items-center gap-4">
          <AiFillPushpin size={23} />
          <FaFilter size={20} />
          <p className="text-gray">Remove</p>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <p className="text-gray">Info</p>
        <p className="text-gray">Type</p>
        <p className="text-gray">User</p>
        <p className="text-gray text-center">1h</p>
        <p className="text-gray text-center">24h</p>
        <p className="text-gray text-center">Amount</p>
      </div>
      <BalanceAction />
    </div>
  );
};

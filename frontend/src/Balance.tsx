import { BalanceButton } from "./BalanceButton";

export const Balance = () => {
  return (
    <div className="gap-3 mt-20">
      <div className="overflow-hidden">
        <div className="flex justify-between items-center">
          <p className="text-black font-bold text-lg">ACCOUNT BALANCE</p>
          <p className="text-gray"> = 2.02 BTC</p>
        </div>
        <div className="relative">
          <p className="text-[10vw] leading-none font-bold">$145,752.90</p>
          <div className="absolute bottom-0 right-0 bg-green px-3 py-2 rounded-xl rotate-6">
            +3.27%
          </div>
        </div>
        <div className="flex gap-6 mt-10 overflow-hidden overflow-x-scroll">
          <BalanceButton />
          <BalanceButton />
          <BalanceButton />
        </div>
      </div>
    </div>
  );
};

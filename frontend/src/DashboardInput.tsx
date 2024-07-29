import { useDashboardInputStore } from "./shared/store/DashboardInputStore";
import { useEffect, useState } from "react";

export const DashboardInput = () => {
  const { setInputValue } = useDashboardInputStore();
  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setInputValue(localValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [localValue]);

  return (
    <div className="flex items-center">
      <input
        className="w-[30rem] py-2 pl-5 rounded-3xl bg-[#ebf5e9] text-black text-lg outline-none"
        placeholder="Search here..."
        name="search"
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />
    </div>
  );
};

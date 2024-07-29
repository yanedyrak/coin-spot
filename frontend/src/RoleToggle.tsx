import clsx from "clsx";
import { useState } from "react";

export const RoleToggle = () => {
  const [role, setRole] = useState("Traders");
  return (
    <div className="inline-block bg-[#ebf5e9] rounded-3xl mr-6 text-lg ">
      {["Traders", "Collector"].map((option) => (
        <button
          key={option}
          className={clsx(
            "py-2 px-9 rounded-3xl duration-300",
            role === option && "bg-black text-[#ebf5e9]"
          )}
          onClick={() => setRole(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

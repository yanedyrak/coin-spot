import { FC } from "react";
import { PiExclamationMarkBold } from "react-icons/pi";

interface NewsProps {
  color: string;
  textValue: string;
}

export const News: FC<NewsProps> = ({ color, textValue }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`w-full inline-flex gap-4 p-8 items-center rounded-3xl`}
    >
      <div
        style={{ backgroundColor: color }}
        className={`p-2 brightness-75 rounded-full`}
      >
        <PiExclamationMarkBold color="white" size={30} />
      </div>
      <p className="text-sm tracking-wide text-white">{textValue}</p>
    </div>
  );
};

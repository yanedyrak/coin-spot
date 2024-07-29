import { News } from "./News";
export const NewsList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="font-bold">LATEST NEWS</p>
        <p className="text-gray">See More</p>
      </div>
      <News
        color="#925925"
        textValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <News
        color="#632222"
        textValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <News
        color="#952925"
        textValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

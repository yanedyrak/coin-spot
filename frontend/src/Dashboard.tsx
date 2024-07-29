import { Actions } from "./Actions";
import { Balance } from "./Balance";
import { NewsList } from "./NewsList";
import { RoleToggle } from "./RoleToggle";
import { DashboardInput } from "./DashboardInput";
import { DashboardProfile } from "./DashboardProfile";

export const Dashboard = () => {
  return (
    <div className="min-h-dvh w-full bg-lightgreen p-14 rounded-tl-[2rem] rounded-bl-[2rem]">
      <nav className="flex justify-between align-middle items-center ">
        <RoleToggle />
        <DashboardInput />
        <DashboardProfile />
      </nav>
      <div className="grid grid-cols-[5fr_2fr] grid-rows-2 gap-6 mt-10">
        <Balance />
        <div></div>
        <Actions />
        <NewsList />
      </div>
    </div>
  );
};

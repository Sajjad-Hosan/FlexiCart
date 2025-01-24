import { MdOutlineDashboardCustomize } from "react-icons/md";

const Overview = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center  mb-10">
        <div className="flex items-center gap-2">
          <MdOutlineDashboardCustomize className="text-3xl" />
          <p className="text-xl font-semibold">Dashboard Overview</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-circle btn-neutral btn-sm">A</button>
          <button className="btn btn-circle btn-neutral btn-sm">A</button>
          <button className="btn btn-circle btn-neutral btn-sm">A</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 w-full h-full">
        <div className="card border border-dashed border-gray-500 p-4 h-[20rem]  flex-1">
          Box 1
        </div>
        <div className="card border border-dashed border-gray-500 p-4 h-[20rem] flex-1">
          Box 2
        </div>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 w-full h-full">
        <div className="card border border-dashed border-gray-500 p-4 h-[20rem] flex-1">
          Box 3
        </div>
        <div className="card border border-dashed border-gray-500 p-4 h-[20rem] flex-1">
          Box 4
        </div>
      </div>
    </div>
  );
};

export default Overview;

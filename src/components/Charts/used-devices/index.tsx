import { cn } from "@/lib/utils";
import { DonutChart } from "./chart";

type PropsType = {
  className?: string;
};

export function UsedDevices({ className }: PropsType) {
  const data = [
    {
      name: "Subscriptions",
      amount: 77040000,
      share: "32.1%",
      color: "#06b6d4", // cyan-500
    },
    {
      name: "Ad Revenue",
      amount: 47040000,
      share: "19.6%",
      color: "#3b82f6", // blue-500
    },
    {
      name: "Partnerships",
      amount: 44640000,
      share: "18.6%",
      color: "#6366f1", // indigo-500
    },
    {
      name: "Merchandise",
      amount: 36720000,
      share: "15.3%",
      color: "#8b5cf6", // violet-500
    },
    {
      name: "Other",
      amount: 34560000,
      share: "14.4%",
      color: "#64748b", // slate-500
    },
  ];

  return (
    <div className={cn("grid grid-cols-1 grid-rows-[auto_1fr] gap-9 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Revenue Distribution
        </h2>
      </div>

      <div className="grid place-items-center">
        <DonutChart data={data} />
      </div>
    </div>
  );
}
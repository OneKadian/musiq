

import { standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import { UserGrowthChart } from "./chart";

type PropsType = {
  className?: string;
};

export function UserGrowthOverview({ className }: PropsType) {
  const data = [
    {
      date: "Jan 24",
      "Total Users": 100000,
      "Active Users": 45000,
    },
    {
      date: "Feb 24",
      "Total Users": 150000,
      "Active Users": 70000,
    },
    {
      date: "Mar 24",
      "Total Users": 200000,
      "Active Users": 95000,
    },
    {
      date: "Apr 24",
      "Total Users": 300000,
      "Active Users": 150000,
    },
    {
      date: "May 24",
      "Total Users": 450000,
      "Active Users": 220000,
    },
    {
      date: "Jun 24",
      "Total Users": 600000,
      "Active Users": 280000,
    },
    {
      date: "Jul 24",
      "Total Users": 800000,
      "Active Users": 350000,
    },
    {
      date: "Aug 24",
      "Total Users": 1000000,
      "Active Users": 450000,
    },
    {
      date: "Sep 24",
      "Total Users": 1500000,
      "Active Users": 700000,
    },
    {
      date: "Oct 24",
      "Total Users": 2000000,
      "Active Users": 900000,
    },
    {
      date: "Nov 24",
      "Total Users": 2500000,
      "Active Users": 1200000,
    },
    {
      date: "Dec 24",
      "Total Users": 3000000,
      "Active Users": 1500000,
    },
  ];

  const latestData = data[data.length - 1];

  return (
    <div className={cn("grid gap-2 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          User Growth Overview
        </h2>
      </div>

      <UserGrowthChart data={data} />

      <dl className="grid divide-stroke text-center dark:divide-dark-3 sm:grid-cols-2 sm:divide-x [&>div]:flex [&>div]:flex-col-reverse [&>div]:gap-1">
        <div className="dark:border-dark-3 max-sm:mb-3 max-sm:border-b max-sm:pb-3">
          <dt className="text-xl font-bold text-dark dark:text-white">
            {standardFormat(latestData["Total Users"])}
          </dt>
          <dd className="font-medium dark:text-dark-6">Total Users</dd>
        </div>
        <div>
          <dt className="text-xl font-bold text-dark dark:text-white">
            {standardFormat(latestData["Active Users"])}
          </dt>
          <dd className="font-medium dark:text-dark-6">Active Users</dd>
        </div>
      </dl>
    </div>
  );
}
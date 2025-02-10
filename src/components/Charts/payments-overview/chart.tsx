

"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

type UserData = {
  date: string;
  "Total Users": number;
  "Active Users": number;
};

type PropsType = {
  data: UserData[];
};

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function UserGrowthChart({ data }: PropsType) {
  const isMobile = useIsMobile();

  const options: ApexOptions = {
    legend: {
      show: true,
      position: 'top',
    },
    colors: ["#5750F1", "#0ABEF9"],
    chart: {
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
      fontFamily: "inherit",
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
      width: isMobile ? 2 : 3,
    },
    grid: {
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      marker: {
        show: true,
      },
    },
    yaxis: {
      min: 0,
      labels: {
        formatter: (value) => {
          if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
          if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
          return value.toString();
        },
      },
    },
    xaxis: {
      categories: data.map(item => item.date),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: "Total Users",
      data: data.map(item => item["Total Users"]),
    },
    {
      name: "Active Users",
      data: data.map(item => item["Active Users"]),
    },
  ];

  return (
    <div className="-ml-4 -mr-5 h-[310px]">
      <Chart
        options={options}
        series={series}
        type="area"
        height={310}
      />
    </div>
  );
}
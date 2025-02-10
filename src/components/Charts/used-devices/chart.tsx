
"use client";

import { compactFormat } from "@/lib/format-number";
import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

type PropsType = {
  data: {
    name: string;
    amount: number;
    share: string;
    color: string;
  }[];
};

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function DonutChart({ data }: PropsType) {
  const totalRevenue = data.reduce((acc, item) => acc + item.amount, 0);

  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "inherit",
    },
    colors: data.map(item => item.color),
    labels: data.map(item => item.name),
    legend: {
      show: true,
      position: "bottom",
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      formatter: (legendName, opts) => {
        return `${legendName}: ${data[opts.seriesIndex].share}`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          background: "transparent",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Total Revenue",
              fontSize: "16px",
              fontWeight: "400",
              color: "#64748b",
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: "bold",
              formatter: () => `$${compactFormat(totalRevenue)}`,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 415,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
      {
        breakpoint: 370,
        options: {
          chart: {
            width: 260,
          },
        },
      },
    ],
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`
      }
    }
  };

  return (
    <Chart
      options={chartOptions}
      series={data.map(item => item.amount)}
      type="donut"
    />
  );
}
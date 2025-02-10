
// "use client";

// import { useIsMobile } from "@/hooks/use-mobile";
// import type { ApexOptions } from "apexcharts";
// import dynamic from "next/dynamic";

// type SongData = {
//   date: string;
//   "Song Name": string;
//   Streams: number;
// };

// type PropsType = {
//   data: SongData[];
// };

// const Chart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// export function TopSongsChart({ data }: PropsType) {
//   const isMobile = useIsMobile();

//   const options: ApexOptions = {
//     chart: {
//       type: "bar",
//       height: 310,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ["#5750F1"],
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "55%",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     grid: {
//       strokeDashArray: 5,
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     stroke: {
//       width: isMobile ? 2 : 3,
//     },
//     xaxis: {
//       categories: data.map(item => item.date),
//     },
//     yaxis: {
//       labels: {
//         formatter: (value) => {
//           if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
//           if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
//           return value.toString();
//         },
//       },
//     },
//     tooltip: {
//       y: {
//         formatter: (value) => `${value.toLocaleString()} streams`,
//       },
//       custom: function({ series, seriesIndex, dataPointIndex }) {
//         const songInfo = data[dataPointIndex]["Song Name"];
//         return `<div class="p-2">
//           <div>${songInfo}</div>
//           <div>${series[seriesIndex][dataPointIndex].toLocaleString()} streams</div>
//         </div>`;
//       }
//     }
//   };

//   const series = [{
//     name: "Streams",
//     data: data.map(item => item.Streams),
//   }];

//   return (
//     <div className="-ml-4 -mr-5 h-[310px]">
//       <Chart
//         options={options}
//         series={series}
//         type="bar"
//         height={310}
//       />
//     </div>
//   );
// }

"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

type SongData = {
  // date: string;
  "Song Name": string;
  Streams: number;
};

type PropsType = {
  data: SongData[];
};

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function TopSongsChart({ data }: PropsType) {
  const isMobile = useIsMobile();

  // Color palette for different bars
  const colors = [
    "#5750F1",  // Purple
    "#10B981",  // Green
    "#EF4444",  // Red
    "#F59E0B",  // Yellow
    "#6366F1"   // Indigo
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 310,
      toolbar: {
        show: false,
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      width: isMobile ? 2 : 3,
    },
    xaxis: {
      categories: data.map(item => item["Song Name"]),
labels: {
  formatter: (value: string, timestamp?: number, opts?: any) => {
    const numValue = Number(value);
    if (numValue >= 1000000) return `${(numValue / 1000000).toFixed(1)}M`;
    if (numValue >= 1000) return `${(numValue / 1000).toFixed(0)}K`;
    return numValue.toString();
  },
},
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
        }
      }
    },
    tooltip: {
      y: {
        formatter: (value) => `${value.toLocaleString()} streams`,
      },
      custom: function({ series, seriesIndex, dataPointIndex }) {
        const songInfo = data[dataPointIndex]["Song Name"];
        return `<div class="p-2">
          <div>${songInfo}</div>
          <div>${series[seriesIndex][dataPointIndex].toLocaleString()} streams</div>
        </div>`;
      }
    }
  };

  const series = [{
    name: "Streams",
    data: data.map(item => item.Streams),
  }];

  return (
    <div className="-ml-4 -mr-5 h-[310px]">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={310}
      />
    </div>
  );
}
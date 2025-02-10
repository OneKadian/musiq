
import { cn } from "@/lib/utils";
import { TopSongsChart } from "./chart";

type PropsType = {
  className?: string;
};

export function TopSongsOverview({ className }: PropsType) {
  // const data = [
  //   {
  //     date: "Jan 24",
  //     "Song Name": "Starboy - The Weeknd",
  //     Streams: 4444444,
  //   },
  //   {
  //     date: "Feb 24",
  //     "Song Name": "Lose Yourself - Eminem",
  //     Streams: 5344444,
  //   },
  //   {
  //     date: "Mar 24",
  //     "Song Name": "Under the Influence - Drake",
  //     Streams: 1244444,
  //   },
  //   {
  //     date: "Apr 24",
  //     "Song Name": "Not like us - Kendrick Lamar",
  //     Streams: 4878787,
  //   },
  //   {
  //     date: "May 24",
  //     "Song Name": "Blinding Lights - The Weeknd",
  //     Streams: 5130022,
  //   },
  //       {
  //     date: "May 24",
  //     "Song Name": "Blinding Lights - The Weeknd",
  //     Streams: 5130022,
  //   },
  // ];

  const data = [
  { date: "Jan 24", "Song Name": "Anti-Hero - Taylor Swift", Streams: 4823123 },
  { date: "Feb 24", "Song Name": "Lose Yourself - Eminem", Streams: 5344444 },
  { date: "Mar 24", "Song Name": "God's Plan - Drake", Streams: 1244444 },
  { date: "Apr 24", "Song Name": "Not Like Us - Kendrick Lamar", Streams: 4878787 },
  { date: "May 24", "Song Name": "Sicko Mode - Travis Scott", Streams: 5210312 },
  { date: "Jun 24", "Song Name": "Bad Habit - Steve Lacy", Streams: 4679821 },
  { date: "Jul 24", "Song Name": "Paint The Town Red - Doja Cat", Streams: 5983211 },
  { date: "Aug 24", "Song Name": "Die For You - The Weeknd", Streams: 5362345 },
  { date: "Sep 24", "Song Name": "Super Bass - Nicki Minaj", Streams: 4731223 },
  { date: "Oct 24", "Song Name": "MONEY - Cardi B", Streams: 4543322 },
  { date: "Nov 24", "Song Name": "HUMBLE. - Kendrick Lamar", Streams: 6123123 },
  { date: "Dec 24", "Song Name": "No Role Modelz - J. Cole", Streams: 5021231 }
];


  return (
    <div className={cn("grid gap-2 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Top Songs Overview
        </h2>
      </div>
      <TopSongsChart data={data} />
    </div>
  );
}
// import { compactFormat } from "@/lib/format-number";
// import { getOverviewData } from "../../fetch";
// import { OverviewCard } from "./card";
// import * as icons from "./icons";

// export async function OverviewCardsGroup() {
//   const { views, profit, products, users } = await getOverviewData();

//   return (
//     <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
//       <OverviewCard
//         label="Total Views"
//         data={{
//           ...views,
//           value: compactFormat(views.value),
//         }}
//         Icon={icons.Views}
//       />

//       <OverviewCard
//         label="Total Profit"
//         data={{
//           ...profit,
//           value: "$" + compactFormat(profit.value),
//         }}
//         Icon={icons.Profit}
//       />

//       <OverviewCard
//         label="Total Products"
//         data={{
//           ...products,
//           value: compactFormat(products.value),
//         }}
//         Icon={icons.Product}
//       />

//       <OverviewCard
//         label="Total Users"
//         data={{
//           ...users,
//           value: compactFormat(users.value),
//         }}
//         Icon={icons.Users}
//       />
//     </div>
//   );
// }

import { OverviewCard } from "./card";
import * as icons from "./icons";

const data = [
  {
    name: "Total Users",
    stat: "3M",
    growthRate: 99.9,
    icon: icons.Users
  },
  {
    name: "Active Users",
    stat: "1.5M",
    growthRate: 99.9,
    icon: icons.Views
  },
  {
    name: "Total streams",
    stat: "50B Hrs",
    growthRate: 99.9,
    icon: icons.Product
  },
  {
    name: "Revenue",
    stat: "240M$",
    growthRate: 99.9,
    icon: icons.Profit
  },
  {
    name: "Top Artist",
    stat: "Eminem",
    growthRate: 0,
    icon: icons.Users
  },
];

export function OverviewCardsGroup() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-5 2xl:gap-7.5">
      {data.map((item) => (
        <OverviewCard
          key={item.name}
          label={item.name}
          data={{
            value: item.stat,
            growthRate: item.growthRate
          }}
          Icon={item.icon}
        />
      ))}
    </div>
  );
}
// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["Country", "Popularity"],
//   ["Germany", 200],
//   ["United States", 300],
//   ["Brazil", 400],
//   ["Canada", 500],
//   ["France", 600],
//   ["RU", 700],
//   ["India", 900],
//   ["India", 900],
//   ["Bangladesh", 1100],
// ];

// export default function GeoChart() {
//   return (
//     <Chart
//       chartEvents={[
//         {
//           eventName: "select",
//           callback: ({ chartWrapper }) => {
//             const chart = chartWrapper.getChart();
//             const selection = chart.getSelection();
//             if (selection.length === 0) return;
//             const region = data[selection[0].row + 1];
//             console.log("Selected : " + region);
//           },
//         },
//       ]}
//       chartType="GeoChart"
//       width="100%"
//       height="270px" 
//       data={data}
//     />
//   );
// }



import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["India", 900],
  ["India", 900],
  ["Bangladesh", 1100],
];

const GeoChart: React.FC = () => {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }: any) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="270px"
      data={data}
    />
  );
};

export default GeoChart;

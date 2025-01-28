import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TemperatureChart = () => {
  const data = [
    { month: "Jan", temp: 28 },
    { month: "Feb", temp: 26 },
    { month: "Mar", temp: 26 },
    { month: "Apr", temp: 27 },
    { month: "May", temp: 26 },
    { month: "Jun", temp: 28 },
    { month: "Jul", temp: 27 },
    { month: "Aug", temp: 26 },
    { month: "Sep", temp: 25 },
    { month: "Oct", temp: 24 },
    { month: "Nov", temp: 23 },
    { month: "Dec", temp: 22 },
  ];

  return (
    <div className="w-full h-full p-4 rounded-3xl border border-border">
      <h2 className="text-[#5A5A5A] text-base font-normal font-inter mb-8">
        Average daily maximum temperature
      </h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="4"
              vertical={false}
              stroke="#E5E5E5"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#5A5A5A",
                fontSize: 12,
                fontFamily: "Inter",
              }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#5A5A5A",
                fontSize: 12,
                fontFamily: "Inter",
              }}
              domain={[0, 32]}
              ticks={[0, 8, 16, 24, 32]}
              dx={-10}
            />
            <Bar
              dataKey="temp"
              fill="#FFA5B8"
              radius={[4, 4, 0, 0]}
              maxBarSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureChart;

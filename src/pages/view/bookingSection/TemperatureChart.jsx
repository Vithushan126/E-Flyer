import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList
} from "recharts";

const TemperatureChart = ({ title, data, color = "#FFA5B8", yDomain = [0, 32], yTicks = [0, 8, 16, 24, 32] }) => {
  return (
    <div className="w-full h-full py-4 rounded-3xl border border-border px-8">
      <h2 className="text-[#5A5A5A] text-base font-normal font-inter mb-4">
        {title}
      </h2>
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            height={150}
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4" vertical={false} stroke="#E5E5E5" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5A5A5A", fontSize: 12, fontFamily: "Inter" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5A5A5A", fontSize: 12, fontFamily: "Inter" }}
              domain={yDomain}
              ticks={yTicks}
              dx={-10}
            />
            <Bar dataKey="value" fill={color} background={{ fill: "#eee" }} radius={[4, 4, 0, 0]} barSize={15}>
              <LabelList dataKey="value" position="top" fill="#5A5A5A" fontSize={12} fontFamily="Inter" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureChart;

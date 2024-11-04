"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "1月",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "2月",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "3月",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "4月",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "5月",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "6月",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

interface ProjectOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ProjectOverview({ className, ...props }: ProjectOverviewProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>プロジェクト概要</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
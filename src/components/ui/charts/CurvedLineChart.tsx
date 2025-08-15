import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 40,
    pv: 24,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 30,
    pv: 13.9,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 20,
    pv: 98,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 27.8,
    pv: 39.08,
    amt: 2000,
  },
  {
    name: "May",
    uv: 18.9,
    pv: 48.0,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 23.9,
    pv: 38.0,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 34.9,
    pv: 43.0,
    amt: 2100,
  },
];

export default function CurvedLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fill: "#ffffff", fontSize: 14 }} // tick label color
          label={{
            value: "Months",
            position: "insideBottom",
            fill: "#ffffff",
            dy: 10,
          }} // axis label color
        />
        <YAxis
          tick={{ fill: "#ffffff", fontSize: 14 }} // tick label color
          label={{
            // value: "Months",
            position: "insideBottom",
            fill: "#ffffff",
            dy: 10,
          }} // axis label color
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          // activeDot={{ r: 3 }}
          strokeWidth={2}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

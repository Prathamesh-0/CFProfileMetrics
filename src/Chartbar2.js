import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
const barcolor = ["#90EE90", "#2AAA8A"];
function Chartbar2(props) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          stroke="#2AAA8A"
          dataKey="name"
          style={{ fontFamily: "'Cormorant SC', serif" }}
        />
        <YAxis
          stroke="#2AAA8A"
          style={{ fontFamily: "'Cormorant SC', serif" }}
          domain={[0, "dataMax+20"]}
        />
        <Tooltip />
        {/* <Legend wrapperStyle={{ fontFamily: "'Cormorant SC', serif" }} /> */}
        <Bar dataKey={props.var} fill="#90EE90">
          {props.data.map((entry, index) => (
            <LabelList
              key={index}
              dataKey={props.var}
              position="top"
              style={{ fontFamily: "'Cairo', sans-serif", color: "#c4a88a" }}
            />
          ))}
          {props.data.map((entry, index) => (
            <Cell key={index} fill={barcolor[index % 2]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chartbar2;

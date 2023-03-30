import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import MediaCard from '../../components/statisticCards/index';
import { Box } from "@mui/material";

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
];

const MyChart = ({ data }) => (
  <Box sx={{ background: '#2C3539', borderRadius: 2 }}>
    <BarChart
      width={300}
      height={150}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" color="#fff" />
      <XAxis dataKey="name" stroke="#fff" />
      <YAxis stroke="#fff" />
      <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ color: '#fff' }} />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  </Box>
);

const App = () => {
  return (
    <div>
      <MediaCard
        chartData={data}
        chartComponent={MyChart}
        cardTitle="Completed Tasks"
        cardSubtitle="Last Campaign Performance"
        body="just updated"
      />
    </div>
  );
};

export default App;

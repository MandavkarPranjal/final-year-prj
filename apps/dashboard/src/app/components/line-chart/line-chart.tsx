import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';

const LineChartComponent = () => {
  const [genderData, setGenderData] = useState({ male: 0, female: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/lchart');
        setGenderData(response.data);
      } catch (error) {
        console.error('Error fetching gender count:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    {
      curve: 'catmullRom',
      data: [genderData.male],
    },
    {
      curve: 'catmullRom',
      data: [genderData.female],
    },
  ];

  return (
    <div>
      <h2>Gender Line Chart for Current Month</h2>
      <LineChart series={chartData} width={500} height={300} />
    </div>
  );
};

export default LineChartComponent;

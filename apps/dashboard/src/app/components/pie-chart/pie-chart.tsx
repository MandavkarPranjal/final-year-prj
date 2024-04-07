import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';

const PieChartComponent = () => {
  const [genderData, setGenderData] = useState({ Male: 0, Female: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pie');
        setGenderData(response.data);
        console.log(genderData);
      } catch (error) {
        console.error('Error fetching gender count:', error);
      }
    };

    fetchData();
  }, []);

  // Assuming your chart library has a PieChart component and accepts data in a specific format
  const chartData = [
    { id: 1, value: genderData.Male, label: 'Male' },
    { id: 2, value: genderData.Female, label: 'Female' },
  ];

  return (
    <div>
      <PieChart series={[
        { 
          data: chartData ,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 360,
          cx: 150,
          cy: 150,
        }
      ]} width={400} height={280} />
    </div>
  );
};

export default PieChartComponent;

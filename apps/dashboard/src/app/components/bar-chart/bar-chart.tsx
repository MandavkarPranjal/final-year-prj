import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

function SimpleBarChart() {
  const [specializations, setSpecializations] = useState([]);
  const [maleData, setMaleData] = useState([]);
  const [femaleData, setFemaleData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch specializations
        // const specializationsResponse = 
        await axios
          .get('http://localhost:3000/lchart/specializations')
          .then(response => {
            setSpecializations(response.data);
          })
          .catch(error => {
            console.error('Error fetching specializations:', error);
          });
        // setSpecializations(specializationsResponse.data);

        // Fetch male gender count by specialization
        // const maleDataResponse = 
        await axios
          .get('http://localhost:3000/lchart/gender-count?gender=Male')
          .then(response => {
            setMaleData(response.data);
          })
          .catch(error => {
            console.error('Error fetching specializations:', error);
          });
        // setMaleData(maleDataResponse.data);

        // Fetch female gender count by specialization
        // const femaleDataResponse = 
        await axios
          .get('http://localhost:3000/lchart/gender-count?gender=Female')
          .then(response => {
            setFemaleData(response.data);
          })
          .catch(error => {
            console.error('Error fetching specializations:', error);
          });
        // setFemaleData(femaleDataResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const data = {
    labels: specializations,
    datasets : [
      {
        label: 'Male',
        data: maleData,
        backgroundColor: 'rgba(2, 178, 175, 1)',
      },
      {
        label: 'Female',
        data: femaleData,
        backgroundColor: 'rgba(114, 204, 255, 1)',
      }
    ]
  }

  return (
    <div>
      <Bar 
        height={350}
        width={700}
        options={options} 
        data={data}
      />
    </div>
  );
}

export default SimpleBarChart;

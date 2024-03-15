import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts';
import axios from 'axios';

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

  const mData = maleData;
  const fData = femaleData;
  const xLabels = specializations;

  return (
    <div>
      <BarChart
        width={1000}
        height={500}
        series={[
          { data: mData, label: 'Male', id: 'maleId' },
          { data: fData, label: 'Female', id: 'femaleId' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
    </div>
  );
}

export default SimpleBarChart;

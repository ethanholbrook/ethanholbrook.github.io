import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from "../data/simulationsData.json"; // Adjust path as needed

const Dashboard = () => {
  const [selectedArchitecture, setSelectedArchitecture] = useState('All');
  const [selectedPotential, setSelectedPotential] = useState('All');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    let tempData = data;

    if (selectedArchitecture !== 'All') {
      tempData = tempData.filter(d => d.architecture === selectedArchitecture);
    }

    if (selectedPotential !== 'All') {
      tempData = tempData.filter(d => d.potential === selectedPotential);
    }

    setFilteredData(tempData);
  }, [selectedArchitecture, selectedPotential]);

  const architectures = ['All', ...new Set(data.map(d => d.architecture))];
  const potentials = ['All', ...new Set(data.map(d => d.potential))];

  return (
    <div style={{ padding: '20px', marginTop: '60px' }}>
      <h1>Simulation Energy & Carbon Dashboard</h1>
      <p>
        Explore the energy consumption (electricity) and carbon emissions associated with running molecular dynamics simulations. Filter by architecture, potential type, and system size.
      </p>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Architecture:{' '}
          <select value={selectedArchitecture} onChange={(e) => setSelectedArchitecture(e.target.value)}>
            {architectures.map(arch => <option key={arch} value={arch}>{arch}</option>)}
          </select>
        </label>
        &nbsp; &nbsp;
        <label>
          Potential:{' '}
          <select value={selectedPotential} onChange={(e) => setSelectedPotential(e.target.value)}>
            {potentials.map(pot => <option key={pot} value={pot}>{pot}</option>)}
          </select>
        </label>
      </div>
      
      <h2>Electricity Consumption vs. Atoms</h2>
      <BarChart width={600} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="atoms" />
        <YAxis label={{ value: 'Electricity (kWh)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="electricity_kWh" fill="#8884d8" />
      </BarChart>

      <h2 style={{ marginTop: '40px' }}>Carbon Emissions vs. Atoms</h2>
      <BarChart width={600} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="atoms" />
        <YAxis label={{ value: 'Carbon Emissions (kg CO2)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="carbon_kgCO2" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
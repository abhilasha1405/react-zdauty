import React from 'react';
import './style.css';
import Header from './header.js';
import Table from './table.js';

export default function App() {
  const initialPetList = [
    {
      name: 'ice',
      type: 'dog'
    },
    {
      name: 'milo',
      type: 'cat'
    },
    {
      name: 'stupid',
      type: 'rabbit'
    }
  ];

  const [pets, setPets] = React.useState(initialPetList);

  function handleRemove(index) {
    const newPetList = pets.filter((pet, i) => i != index);
    setPets(newPetList);
  }
  return (
    <div>
      <Header />
      <Table
        tableOneHeader={'Pet Name'}
        tableTwoHeader={'Pet Type'}
        tableData={pets}
        onRemove={handleRemove}
      />
    </div>
  );
}

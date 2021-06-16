import React from 'react';
import './style.css';
import Header from './header.js';
import Button from './button.js';
import Table from './table.js';

export default function App() {
  const pets = [
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
  return (
    <div>
      <Header />
      <Table tableData={pets} />
      <Button />
    </div>
  );
}

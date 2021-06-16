import React from 'react';
import Button from './button';
import './style.css';

export default function Table(props) {
  const { tableData, tableOneHeader, tableTwoHeader, onRemove } = props;

  const tableHeader = () => {
    return (
      <thead>
        <tr>
          <th>{tableOneHeader}</th>
          <th>{tableTwoHeader}</th>
          <th>Delete</th>
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    const rows = tableData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.type}</td>
          <td>
            <Button clickAction={() => onRemove(index)} />
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };

  return (
    <div>
      <table>
        {tableHeader()}
        {tableBody()}
      </table>
    </div>
  );
}

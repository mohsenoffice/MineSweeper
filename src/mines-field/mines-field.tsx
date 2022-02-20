import React from 'react';
import './mines-field.scss';

interface MinesFieldProps {
  size: number;
}

export const MinesField = (props: MinesFieldProps) => {
  const { size } = props;
  
  const renderRow = (rowIndex: number, size: number) => {
    const firstCellKey = rowIndex*size;
    const rowCells = Array(size).fill(0).map((_cell,i) => {
      const key = firstCellKey+i;
      return <div key={key} />
    });
    return rowCells;
  };

  const renderRows = (size: number) => 
    Array(size).fill(0).map((_row,i)=> <div key={i}>{renderRow(i, size)}</div>);

  return <div className={'mines-field'}>{renderRows(size)}</div>;
};


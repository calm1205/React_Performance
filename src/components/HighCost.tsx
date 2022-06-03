import React, { useState } from 'react';

/**
 * レンダリングコストの高いコンポーネント
 */
export const HighCost = () => {
  const dimensions = 250;
  const data = Array.from({ length: dimensions }, () =>
    Array.from({ length: dimensions }, () => Math.random() * 100)
  );

  const initialRowsColumns = Math.floor(dimensions / 2);
  const [rows, setRows] = useState(initialRowsColumns);
  const [columns, setColumns] = useState(initialRowsColumns);

  return (
    <div>
      <form>
        <div>
          <label>Rows to display: </label>
          <input
            value={rows}
            type="number"
            min={1}
            max={dimensions}
            onChange={(e) => setRows(Number(e.target.value))}
          />
          {` (max: ${dimensions})`}
        </div>
        <div>
          <label>Columns to display: </label>
          <input
            value={columns}
            type="number"
            min={1}
            max={dimensions}
            onChange={(e) => setColumns(Number(e.target.value))}
          />
          {` (max: ${dimensions})`}
        </div>
      </form>

      <br />
      <div style={{ width: data.length * 40 }}>
        {data.slice(0, rows).map((row, i) => (
          <div key={i} style={{ display: 'flex' }}>
            {row.slice(0, columns).map((cell, i) => (
              <div
                key={i}
                style={{
                  outline: `1px solid black`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  color: cell > 50 ? 'white' : 'black',
                  backgroundColor: `rgba(0, 0, 0, ${cell / 100})`,
                }}
              >
                {Math.floor(cell)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

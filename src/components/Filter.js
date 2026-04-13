import React from 'react';

const Filter = ({ titleFilter, setTitleFilter, rateFilter, setRateFilter }) => {
  return (
    <div className="filter-section">
      <h3>Filter Movies</h3>
      <input
        type="text"
        placeholder="Search by title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating..."
        value={rateFilter}
        onChange={(e) => setRateFilter(Number(e.target.value))}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
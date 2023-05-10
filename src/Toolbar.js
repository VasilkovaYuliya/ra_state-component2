import React from "react";

function Toolbar (props) {
    const {filters, selected, onSelectFilter} = props;


const handleFilterSelect = (filter) => {
    onSelectFilter(filter);
  }

  return (
    <div>
      {filters.map(filter => (
        <button key={filter} onClick={() => handleFilterSelect(filter)}>{filter}</button>
      ))}
      <p>Selected filter: {selected}</p>
    </div>
  )
}

export default Toolbar;
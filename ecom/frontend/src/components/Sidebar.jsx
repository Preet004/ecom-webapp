
import React from 'react';

function Sidebar({ categories, onFilter }) {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onFilter(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

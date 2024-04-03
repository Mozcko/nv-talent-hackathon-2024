import React, { useState } from 'react';

const Filter = ({ options, value, onChange }) => (
    <div className="mb-4">
      <h6 className="text-lg font-medium text-gray-900 dark:text-white">
        Filter by {options[0]}
      </h6>
      <div className="mt-2">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-gray-500 focus:border-blue-gray-500 sm:text-sm"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  
export default Filter;
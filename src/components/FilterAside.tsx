import React, { useState } from 'react';

const Filter = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleTagSelect = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const handleLocationSelect = (location) => {
    if (selectedLocation === location) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(location);
    }
  };

  const tags = ["Design", "Project", "Visual", "Branding", "Illustration"];
  const locations = ["New York", "Los Angeles", "San Francisco", "London", "Paris"];

  return (
    <div className="w-64 bg-gray-100 border-r border-gray-300">
      <div className="p-4">
        <h6 className="text-lg font-medium text-gray-900 dark:text-white">
          Filter by tag
        </h6>
        <div className="mt-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagSelect(tag)}
              className={`text-sm py-1 px-2 rounded-full mr-2 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-gray-500 focus:ring-opacity-50 ${selectedTag === tag ? 'bg-blue-gray-100 text-blue-gray-800' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h6 className="text-lg font-medium text-gray-900 dark:text-white">
          Filter by location
        </h6>
        <div className="mt-2">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => handleLocationSelect(location)}
              className={`text-sm py-1 px-2 rounded-full mr-2 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-gray-500 focus:ring-opacity-50 ${selectedLocation === location ? 'bg-blue-gray-100 text-blue-gray-800' : ''}`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
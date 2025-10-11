// src/components/JobSearch.js
import React, { useState } from 'react';

const JobSearch = ({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ title, location });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 p-4">
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default JobSearch;

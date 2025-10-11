import React, { useState } from 'react';
import axios from 'axios';

const GlobalJobSearch = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/jobsearch/search', {
        params: { title, location },
      });
      setJobs(res.data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🌍 Global Job Search</h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Job Title"
          className="border p-2 flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 flex-1"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      <div>
        {jobs.length > 0 ? (
          jobs.map((job, idx) => (
            <div key={idx} className="border p-4 rounded mb-4 shadow">
              <h3 className="text-xl font-semibold">{job.job_title}</h3>
              <p className="text-gray-600">{job.employer_name} - {job.job_city}, {job.job_country}</p>
              <a
                href={job.job_apply_link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                Apply Now
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default GlobalJobSearch;

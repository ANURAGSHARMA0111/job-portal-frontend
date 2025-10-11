import React, { useState } from "react";
import axios from "axios";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const fetchGlobalJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs/global", {
        params: { title, location },
      });
      setJobs(res.data.data); // API से data array आता है
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>🌍 Global Job Search</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchGlobalJobs}>Search Jobs</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <h3>{job.job_title}</h3>
            <p>{job.employer_name} - {job.job_city}, {job.job_country}</p>
            <a href={job.job_apply_link} target="_blank" rel="noreferrer">
              Apply
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPage;

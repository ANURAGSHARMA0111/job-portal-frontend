import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetailsPage = () => {
  const { id } = useParams();  // Extract ID from URL params
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data); // Store fetched job in state
      } catch (err) {
        console.error("Error fetching job:", err.response ? err.response.data : err.message);
        setError("Failed to fetch job");
      } finally {
        setLoading(false); // Set loading to false when the request is done
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {job ? (
        <div>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p>{job.salary}</p>
        </div>
      ) : (
        <p>Job not found</p>
      )}
    </div>
  );
};

export default JobDetailsPage;

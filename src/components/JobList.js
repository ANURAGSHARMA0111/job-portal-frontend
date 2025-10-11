import React, { useState, useEffect } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [sortBySalary, setSortBySalary] = useState(false);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs", {
        params: {
          title: searchTitle,
          location: searchLocation,
          type: selectedType,
          category: selectedCategory,
          experience: selectedExperience,
          sort: sortBySalary ? "salary" : "",
        },
      });
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleBookmark = async (jobId) => {
    try {
      await axios.put(`http://localhost:5000/api/jobs/${jobId}/bookmark`, {
        userId: "dummyUser123", // Replace this with actual user ID from auth
      });
      alert("Job bookmarked!");
    } catch (err) {
      console.error("Bookmark error:", err);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Search Jobs</h2>

      {/* Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Job Title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Category</option>
          <option value="Software">Software</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
        </select>
        <select
          value={selectedExperience}
          onChange={(e) => setSelectedExperience(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="1-3 Years">1-3 Years</option>
          <option value="3+ Years">3+ Years</option>
        </select>
        <button
          onClick={() => setSortBySalary(!sortBySalary)}
          className="bg-gray-200 p-2 rounded"
        >
          Sort by Salary: {sortBySalary ? "On" : "Off"}
        </button>
      </div>

      <button
        onClick={fetchJobs}
        className="bg-blue-600 text-white px-6 py-2 rounded mb-6"
      >
        Search Jobs
      </button>

      {/* Job Listings */}
      <div className="grid gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p>{job.location}</p>
            <p>Type: {job.type}</p>
            <p>Category: {job.category}</p>
            <p>Experience: {job.experience}</p>
            <p>Salary: ₹{job.salary}</p>
            <button
              onClick={() => handleBookmark(job._id)}
              className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
            >
              Bookmark
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;

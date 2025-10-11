// src/components/JobSection.js
import React, { useState } from "react";

const dummyJobs = [
  {
    _id: "1",
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Lucknow",
    type: "Full Time",
    category: "Software",
    experience: "1-3 Years",
    salary: "₹500000",
    contact: "9876543210",
  },
  {
    _id: "2",
    title: "Backend Developer",
    company: "Code Base",
    location: "Delhi",
    type: "Full Time",
    category: "Software",
    experience: "3+ Years",
    salary: "₹700000",
    contact: "9123456789",
  },
];

const JobSection = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState(dummyJobs);
  const [likes, setLikes] = useState({});
  const [bookmarks, setBookmarks] = useState({});

  const handleSearch = () => {
    const filtered = dummyJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(title.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
    setJobs(filtered);
  };

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBookmark = (id) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="px-4 py-10 font-sans bg-gray-100 min-h-screen">
      {/* Search Section */}
      <section className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Find Your Dream Job</h2>
        <p className="text-gray-600 mb-6">
          Browse thousands of jobs from top companies — apply now and kickstart your career.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <input
            type="text"
            placeholder="Frontend Developer"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-4 py-2 rounded w-64"
          />
          <input
            type="text"
            placeholder="Location (e.g., Lucknow)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border px-4 py-2 rounded w-64"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Search Jobs
          </button>
        </div>
      </section>

      {/* Job Listings */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-6 rounded-lg shadow relative">
            <h3 className="text-xl font-semibold text-blue-600 mb-1">{job.title}</h3>
            <p className="text-gray-700 font-medium">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-sm text-gray-600 mt-2">
              {job.category} • {job.type} • {job.experience}
            </p>
            <p className="text-sm text-gray-700 mt-1">Salary: {job.salary}</p>
            <p className="text-sm text-gray-700 mt-1">Contact: {job.contact}</p>

            <div className="flex justify-between items-center mt-4">
              <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
                Apply Now
              </button>

              <div className="flex gap-3 text-xl">
                <button onClick={() => toggleBookmark(job._id)}>
                  {bookmarks[job._id] ? "🔖" : "📑"}
                </button>
                <button onClick={() => toggleLike(job._id)}>
                  {likes[job._id] ? "👍" : "👎"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobSection;

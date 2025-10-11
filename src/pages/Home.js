import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100">
      {/* Welcome Section */}
      <section className="bg-blue-700 text-white text-center py-20 shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to the AI-powered Job Portal & Resume Builder
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Find your dream job and advance your career using AI-driven
          recommendations.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">
          Start Your Career Journey
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Explore AI Features
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/ai-job-recommendations"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            AI Job Recommendations
          </Link>
          <Link
            to="/ai-career-advisor"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            AI Career Advisor
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-gray-600">
        © {new Date().getFullYear()} AI Job Portal. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;

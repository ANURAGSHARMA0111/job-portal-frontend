// // frontend/src/pages/Dashboard.js
// import React from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { FileText, Bot, Briefcase } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {/* Welcome Banner */}
//       <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
//         <CardContent className="p-6">
//           <h1 className="text-2xl font-bold mb-2">Welcome back, Anurag Sharma!</h1>
//           <p className="text-sm">Here's what AI recommends and offers today </p>
//         </CardContent>
//       </Card>

//       {/* AI Job Recommendations */}
//       <Card className="bg-white">
//         <CardContent className="p-4">
//           <div className="flex items-center space-x-2 mb-3">
//             <Briefcase className="text-blue-500" />
//             <h2 className="text-lg font-semibold">AI Job Recommendations</h2>
//           </div>
//           <p className="text-sm text-gray-600 mb-3">
//             Discover tailored job suggestions based on your skills and preferences.
//           </p>
//           <Button
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//             onClick={() => navigate("/ai-job-recommendations")}
//           >
//             Explore Jobs
//           </Button>
//         </CardContent>
//       </Card>

//       {/* AI Resume Builder */}
//       <Card className="bg-white">
//         <CardContent className="p-4">
//           <div className="flex items-center space-x-2 mb-3">
//             <FileText className="text-green-500" />
//             <h2 className="text-lg font-semibold">AI Resume Builder</h2>
//           </div>
//           <p className="text-sm text-gray-600 mb-3">
//             Let AI help you build a professional resume in seconds.
//           </p>
//           <Button
//             className="w-full bg-green-600 hover:bg-green-700 text-white"
//             onClick={() => navigate("/resume-builder")}
//           >
//             Build Resume
//           </Button>
//         </CardContent>
//       </Card>

//       {/* AI Career Advisor */}
//       <Card className="bg-white">
//         <CardContent className="p-4">
//           <div className="flex items-center space-x-2 mb-3">
//             <Bot className="text-purple-600" />
//             <h2 className="text-lg font-semibold">AI Career Advisor</h2>
//           </div>
//           <p className="text-sm text-gray-600 mb-3">
//             Get career guidance and interview tips from AI anytime.
//           </p>
//           <Button
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white"
//             onClick={() => navigate("/career-advisor")}
//           >
//             Chat with AI
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FileText, Bot, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 👈 import

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); //

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Welcome Banner */}
      <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">
            Welcome {user?.Fullname || ""}
          </h1>
          <p className="text-sm">Here's AI recommends and Resume builder with AI Support</p>
        </CardContent>
      </Card>

      {/* AI Job Recommendations */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Briefcase className="text-blue-500" />
            <h2 className="text-lg font-semibold">AI Job Recommendations</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Discover tailored job suggestions based on your skills and preferences.
          </p>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => navigate("/ai-job-recommendations")}
          >
            Explore Jobs
          </Button>
        </CardContent>
      </Card>

      {/* AI Resume Builder */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <FileText className="text-green-500" />
            <h2 className="text-lg font-semibold">AI Resume Builder</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Let AI help you build a professional resume in seconds.
          </p>
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            onClick={() => navigate("/resume-builder")}
          >
            Build Resume
          </Button>
        </CardContent>
      </Card>

      {/* AI Career Advisor */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Bot className="text-purple-600" />
            <h2 className="text-lg font-semibold">AI Career Advisor</h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Get career guidance and interview tips from AI anytime.
          </p>
          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => navigate("/career-advisor")}
          >
            Chat with AI
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

// import React, { useState, useRef } from "react";
// import html2pdf from "html2pdf.js";

// const ResumeBuilder = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     linkedin: "",
//     github: "",
//     summary: "",
//     education: "",
//     skills: "",
//     certifications: "",
//     projects: "",
//     training: "",
//     jobs: "",
//     photo: null,
//   });

//   const resumeRef = useRef();

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "photo") {
//       setFormData({ ...formData, photo: URL.createObjectURL(files[0]) });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleDownload = () => {
//     const element = resumeRef.current;

//     const options = {
//       margin: 0.2,
//       filename: "resume.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true, scrollY: 0 }, // ✅ Fix scroll cut
//       jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
//     };

//     html2pdf().set(options).from(element).save();
//   };

//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", padding: "20px" }}>
//       {/* Left Form Section */}
//       <div
//         style={{
//           background: "#fff",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "bold" }}>
//           Enter Your Resume Info
//         </h2>

//         {/* Profile Photo */}
//         <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//           <label style={{ width: "120px", fontSize: "14px" }}>Profile Photo:</label>
//           <input type="file" name="photo" accept="image/*" onChange={handleChange} />
//         </div>

//         {/* One line form fields */}
//         {[
//           { name: "name", type: "text", placeholder: "Your full name" },
//           { name: "email", type: "email", placeholder: "Your email" },
//           { name: "phone", type: "text", placeholder: "Your phone number" },
//           { name: "linkedin", type: "url", placeholder: "LinkedIn profile link" },
//           { name: "github", type: "url", placeholder: "GitHub profile link" },
//         ].map((field) => (
//           <div key={field.name} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//             <label style={{ width: "120px", fontSize: "14px", textTransform: "capitalize" }}>
//               {field.name}:
//             </label>
//             <input
//               type={field.type}
//               name={field.name}
//               placeholder={field.placeholder}
//               value={formData[field.name]}
//               onChange={handleChange}
//               style={{ flex: 1, padding: "6px", border: "1px solid #ccc", borderRadius: "5px" }}
//             />
//           </div>
//         ))}

//         {/* Bigger sections */}
//         {[
//           { name: "summary", label: "Summary" },
//           { name: "education", label: "Education" },
//           { name: "skills", label: "Skills" },
//           { name: "certifications", label: "Certifications" },
//           { name: "projects", label: "Projects" },
//           { name: "training", label: "Training / Internship" },
//           { name: "jobs", label: "Job Experience" },
//         ].map((section) => (
//           <div key={section.name} style={{ marginBottom: "12px" }}>
//             <label style={{ display: "block", fontSize: "14px", marginBottom: "4px" }}>
//               {section.label}:
//             </label>
//             <textarea
//               name={section.name}
//               value={formData[section.name]}
//               onChange={handleChange}
//               rows="3"
//               style={{ width: "100%", padding: "6px", border: "1px solid #ccc", borderRadius: "5px" }}
//             />
//           </div>
//         ))}

//         <button
//           onClick={handleDownload}
//           style={{
//             width: "100%",
//             padding: "10px",
//             background: "green",
//             color: "#fff",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             fontWeight: "bold",
//           }}
//         >
//           Download Resume
//         </button>
//       </div>

//       {/* Right Preview Section */}
//       <div
//         ref={resumeRef}
//         style={{
//           background: "#fff",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//           width: "794px", // A4 width
//           minHeight: "1123px", // A4 height
//           margin: "0 auto",
//         }}
//       >
//         {/* Profile Photo */}
//         {formData.photo && (
//           <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
//             <img
//               src={formData.photo}
//               alt="profile"
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//                 border: "2px solid #ccc",
//               }}
//             />
//           </div>
//         )}

//         {/* Name & Contact */}
//         {(formData.name || formData.email || formData.phone || formData.linkedin || formData.github) && (
//           <div style={{ textAlign: "center", marginBottom: "10px" }}>
//             {formData.name && <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>{formData.name}</h2>}
//             {(formData.email || formData.phone) && (
//               <p>
//                 {formData.email} {formData.phone && ` | ${formData.phone}`}
//               </p>
//             )}
//             <p>
//               {formData.linkedin && (
//                 <a href={formData.linkedin} target="_blank" rel="noreferrer" style={{ color: "blue" }}>
//                   LinkedIn
//                 </a>
//               )}
//               {formData.github && (
//                 <>
//                   {" "} |{" "}
//                   <a href={formData.github} target="_blank" rel="noreferrer" style={{ color: "blue" }}>
//                     GitHub
//                   </a>
//                 </>
//               )}
//             </p>
//           </div>
//         )}

//         <hr style={{ margin: "10px 0" }} />

//         {/* Dynamic Sections – show only if filled */}
//         {[
//           { key: "summary", title: "Summary" },
//           { key: "education", title: "Education" },
//           { key: "skills", title: "Skills" },
//           { key: "certifications", title: "Certifications" },
//           { key: "projects", title: "Projects" },
//           { key: "training", title: "Training / Internship" },
//           { key: "jobs", title: "Job Experience" },
//         ].map(
//           (section) =>
//             formData[section.key] && (
//               <div key={section.key} style={{ marginBottom: "12px" }}>
//                 <h3
//                   style={{
//                     fontSize: "14px",
//                     fontWeight: "bold",
//                     textTransform: "uppercase",
//                     borderBottom: "1px solid #ddd",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   {section.title}
//                 </h3>
//                 <p style={{ whiteSpace: "pre-line", fontSize: "13px" }}>{formData[section.key]}</p>
//               </div>
//             )
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;


import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    summary: "",
    education: "",
    skills: "",
    certifications: "",
    projects: "",
    training: "",
    jobs: "",
    photo: null,
  });

  const resumeRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDownload = () => {
    const element = resumeRef.current;

    const options = {
      margin: 0.2,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, scrollY: 0, backgroundColor: "#ffffff" }, // ✅ White background
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", padding: "20px" }}>
      {/* Left Form Section */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "bold" }}>
          Enter Your Resume Info
        </h2>

        {/* Profile Photo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <label style={{ width: "120px", fontSize: "14px" }}>Profile Photo:</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </div>

        {/* One line form fields */}
        {[
          { name: "name", type: "text", placeholder: "Your full name" },
          { name: "email", type: "email", placeholder: "Your email" },
          { name: "phone", type: "text", placeholder: "Your phone number" },
          { name: "linkedin", type: "url", placeholder: "LinkedIn profile link" },
          { name: "github", type: "url", placeholder: "GitHub profile link" },
        ].map((field) => (
          <div key={field.name} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <label style={{ width: "120px", fontSize: "14px", textTransform: "capitalize" }}>
              {field.name}:
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              style={{ flex: 1, padding: "6px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>
        ))}

        {/* Bigger sections */}
        {[
          { name: "summary", label: "Summary" },
          { name: "education", label: "Education" },
          { name: "skills", label: "Skills" },
          { name: "certifications", label: "Certifications" },
          { name: "projects", label: "Projects" },
          { name: "training", label: "Training / Internship" },
          { name: "jobs", label: "Job Experience" },
        ].map((section) => (
          <div key={section.name} style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", fontSize: "14px", marginBottom: "4px" }}>
              {section.label}:
            </label>
            <textarea
              name={section.name}
              value={formData[section.name]}
              onChange={handleChange}
              rows="3"
              style={{ width: "100%", padding: "6px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>
        ))}

        <button
          onClick={handleDownload}
          style={{
            width: "100%",
            padding: "10px",
            background: "green",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Download Resume
        </button>
      </div>

      {/* Right Preview Section */}
      <div
        ref={resumeRef}
        style={{
          background: "#fff", // ✅ White background
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          width: "794px", // A4 width
          minHeight: "1123px", // A4 height
          margin: "0 auto",
          color: "#000", // Text color black
        }}
      >
        {/* Profile Photo */}
        {formData.photo && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
            <img
              src={formData.photo}
              alt="profile"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ccc",
              }}
            />
          </div>
        )}

        {/* Name & Contact */}
        {(formData.name || formData.email || formData.phone || formData.linkedin || formData.github) && (
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            {formData.name && <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>{formData.name}</h2>}
            {(formData.email || formData.phone) && (
              <p>
                {formData.email} {formData.phone && ` | ${formData.phone}`}
              </p>
            )}
            <p>
              {formData.linkedin && (
                <a href={formData.linkedin} target="_blank" rel="noreferrer" style={{ color: "blue" }}>
                  LinkedIn
                </a>
              )}
              {formData.github && (
                <>
                  {" "} |{" "}
                  <a href={formData.github} target="_blank" rel="noreferrer" style={{ color: "blue" }}>
                    GitHub
                  </a>
                </>
              )}
            </p>
          </div>
        )}

        <hr style={{ margin: "10px 0" }} />

        {/* Dynamic Sections – show only if filled */}
        {[
          { key: "summary", title: "Summary" },
          { key: "education", title: "Education" },
          { key: "skills", title: "Skills" },
          { key: "certifications", title: "Certifications" },
          { key: "projects", title: "Projects" },
          { key: "training", title: "Training / Internship" },
          { key: "jobs", title: "Job Experience" },
        ].map(
          (section) =>
            formData[section.key] && (
              <div key={section.key} style={{ marginBottom: "12px" }}>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #ddd",
                    marginBottom: "6px",
                  }}
                >
                  {section.title}
                </h3>
                <p style={{ whiteSpace: "pre-line", fontSize: "13px" }}>{formData[section.key]}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;

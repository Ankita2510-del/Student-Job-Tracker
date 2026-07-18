import { useState } from "react";
import { useEffect } from "react";
import "./AddJob.css";

function AddJob({ jobs, setJobs, goDashboard, editIndex, setEditIndex}) {
    const [job, setJob] = useState({
    company: "",
    role: "",
    location: "",
    status: "Applied",
    date: "",
    notes: "",
  });
  useEffect(() => {
  if (editIndex !== null) {
    setJob(jobs[editIndex]);
  }
}, [editIndex, jobs]);

 const handleSubmit = () => {
  if (editIndex !== null) {
    const updatedJobs = [...jobs];
    updatedJobs[editIndex] = job;
    setJobs(updatedJobs);
    setEditIndex(null);
    alert("Job Updated Successfully!");
  } else {
    setJobs([...jobs, job]);
    alert("Job Added Successfully!");
  }

  goDashboard();
};

  return (
    <div className="addjob-container">
      <div className="addjob-box">
        <h2>Add New Job</h2>

        <input
    type="text"
    placeholder="Company Name"
    value={job.company}
    onChange={(e) =>
    setJob({ ...job, company: e.target.value })
  }
    />

        <input
    type="text"
    placeholder="Job Role"
    value={job.role}
    onChange={(e) =>
    setJob({ ...job, role: e.target.value })
  }
/>

        <input
    type="text"
    placeholder="Location"
    value={job.location}
    onChange={(e) =>
    setJob({ ...job, location: e.target.value })
  }
/>

        <select
  value={job.status}
  onChange={(e) =>
    setJob({ ...job, status: e.target.value })
  }
>
  <option>Applied</option>
  <option>Interview</option>
  <option>Selected</option>
  <option>Rejected</option>
</select>

        <input
  type="date"
  value={job.date}
  onChange={(e) =>
    setJob({ ...job, date: e.target.value })
  }
/>

        <button onClick={handleSubmit}>
  {editIndex !== null ? "Update Job" : "Add Job"}
</button>
      </div>
    </div>
  );
}

export default AddJob;
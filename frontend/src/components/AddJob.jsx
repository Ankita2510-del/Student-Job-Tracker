import { useState } from "react";
import "./AddJob.css";

function AddJob() {
    const [job, setJob] = useState({
    company: "",
    role: "",
    location: "",
    status: "Applied",
    date: "",
    notes: "",
  });

  const handleSubmit = () => {
    console.log(job);
    alert("Job Added Successfully!");
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
  Add Job
</button>
      </div>
    </div>
  );
}

export default AddJob;
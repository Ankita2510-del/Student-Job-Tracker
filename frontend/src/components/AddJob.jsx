import "./AddJob.css";

function AddJob() {
  return (
    <div className="addjob-container">
      <div className="addjob-box">
        <h2>Add New Job</h2>

        <input type="text" placeholder="Company Name" />

        <input type="text" placeholder="Job Role" />

        <input type="text" placeholder="Location" />

        <select>
          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>
        </select>

        <input type="date" />

        <button>Add Job</button>
      </div>
    </div>
  );
}

export default AddJob;
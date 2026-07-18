import "./Dashboard.css";

function Dashboard({ openAddJob, jobs, deleteJob, editJob }) {
  return (
    <div className="dashboard">
      <h2>Welcome 👋</h2>
      <p>Manage all your job applications here.</p>

      <div className="cards">
        <div className="card">
          <h3>Total Jobs</h3>
          <p>{jobs.length}</p>
        </div>

        <div className="card">
          <h3>Applied</h3>
          <p>{jobs.filter((job) => job.status === "Applied").length}</p>
        </div>

        <div className="card">
          <h3>Interview</h3>
          <p>{jobs.filter((job) => job.status === "Interview").length}</p>
        </div>

        <div className="card">
          <h3>Selected</h3>
          <p>{jobs.filter((job) => job.status === "Selected").length}</p>
        </div>
      </div>

      <button className="add-btn" onClick={openAddJob}>
        + Add Job
      </button>

      <h2 style={{ marginTop: "30px" }}>Job List</h2>

      <table className="job-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Location</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td colSpan="6">No jobs added yet.</td>
            </tr>
          ) : (
            jobs.map((job, index) => (
              <tr key={index}>
                <td>{job.company}</td>
                <td>{job.role}</td>
                <td>{job.location}</td>
                <td>{job.status}</td>
                <td>{job.date}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => editJob(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteJob(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
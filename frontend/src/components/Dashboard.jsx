import "./Dashboard.css";

function Dashboard({ openAddJob }) {
  return (
    <div className="dashboard">
      <h2>Welcome 👋</h2>
      <p>Manage all your job applications here.</p>

      <div className="cards">
        <div className="card">
          <h3>Total Jobs</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Applied</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Interview</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Selected</h3>
          <p>0</p>
        </div>
      </div>

      <button className="add-btn" onClick={openAddJob}>
        + Add Job
      </button>
    </div>
  );
}

export default Dashboard;
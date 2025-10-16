import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button
        id="wd-add-assignment"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button
        id="wd-add-assignment-group"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div className="input-group" style={{ width: "300px" }}>
        <span className="input-group-text bg-white">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search for Assignments"
          id="wd-search-assignment"
        />
      </div>
    </div>
  );
}
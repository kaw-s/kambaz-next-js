"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { addAssignment, updateAssignment } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  //const assignment = db.assignments.find((a: any) => a._id === aid);

  // get assignments from reducer
  const { assignments = [] } = useSelector(
    (state: any) => state.assignmentReducer || {}
  );

  console.log("aid:", aid);
  console.log("All assignments:", assignments);
  console.log("Looking for assignment with id:", aid);

  // if we are directed to add a new assignment
  const isNewAssignment = aid === "new";

  // check if the assigment exists
  const existingAssignment = !isNewAssignment
    ? assignments.find((a: any) => a._id === aid)
    : null;

  const [assignment, setAssignment] = useState({
    title: "",
    description:
      "This assignment requires you to demonstrate your understanding of the course material.",
    points: "100",
    dueDate: "2025-05-24",
    availableDate: "2025-05-20",
    availableUntil: "2025-05-28",
  });

  useEffect(() => {
    if (isNewAssignment) {
      // Reset to default values for new assignment
      setAssignment({
        title: "",
        description:
          "This assignment requires you to demonstrate your understanding of the course material.",
        points: "100",
        dueDate: "2025-05-24",
        availableDate: "2025-05-20",
        availableUntil: "2025-05-28",
      });
    } else if (existingAssignment) {
      // Load existing assignment data
      setAssignment({
        title: existingAssignment.title,
        description:
          existingAssignment.description ||
          "This assignment requires you to demonstrate your understanding of the course material.",
        points: existingAssignment.points || "100",
        dueDate: existingAssignment.dueDate || "2025-05-24",
        availableDate: existingAssignment.availableDate || "2025-05-20",
        availableUntil: existingAssignment.availableUntil || "2025-05-28",
      });
    }
  }, [aid, existingAssignment, isNewAssignment]);

  const handleSave = () => {
    if (isNewAssignment) {
      dispatch(
        addAssignment({
          ...assignment,
          course: cid as string,
        })
      );
    } else {
      dispatch(
        updateAssignment({
          _id: aid as string,
          ...assignment,
          course: cid as string,
        })
      );
    }
  };

  //if the assignment isnt found display message
  if (!isNewAssignment && !existingAssignment) {
    return <div className="p-3">Assignment not found.</div>;
  }
  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="wd-name"
          defaultValue={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="wd-description"
          rows={5}
          value={
            assignment.description
          }
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="wd-points"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-3 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-9">
          <select className="form-select" id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="OPTION2">OPTION 2</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-3 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-9">
          <select className="form-select" id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            <option value="LETTER GRADE">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-3 col-form-label text-end"
        >
          Submission Type
        </label>
        <div className="col-sm-9">
          <div className="border p-3 rounded">
            <select className="form-select mb-3" id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="OPTION2">Option 2</option>
            </select>

            <div className="fw-bold mb-2">Online Entry Options</div>
            {[
              "Text Entry",
              "Website URL",
              "Media Recordings",
              "Student Annotation",
              "File Uploads",
            ].map((option, idx) => (
              <div className="form-check mb-2" key={idx}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`wd-${option.toLowerCase().replace(" ", "-")}`}
                  name="check-entry-type"
                />
                <label
                  className="form-check-label"
                  htmlFor={`wd-${option.toLowerCase().replace(" ", "-")}`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-sm-3 col-form-label text-end">Assign</label>
        <div className="col-sm-9">
          <div className="border p-3 rounded">
            <label htmlFor="wd-assign-to" className="form-label fw-bold">
              Assign to
            </label>
            <div
              className="form-control mb-3 d-flex flex-wrap gap-2 align-items-center"
              style={{ minHeight: "38px" }}
            >
              <span
                className="badge d-flex align-items-center gap-1 py-2 px-2"
                style={{ backgroundColor: "#e9ecef", color: "#000" }}
              >
                Everyone
                <button
                  type="button"
                  className="btn-close"
                  style={{ fontSize: "0.6rem" }}
                  aria-label="Remove"
                />
              </span>
            </div>

            <label htmlFor="wd-due-date" className="form-label fw-bold">
              Due
            </label>
            <input
              type="date"
              className="form-control mb-3"
              id="wd-due-date"
              defaultValue={assignment.dueDate || "2025-05-24"}
              onChange={(e) =>
                setAssignment({ ...assignment, dueDate: e.target.value })
              }
            />

            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <label
                  htmlFor="wd-available-from"
                  className="form-label fw-bold"
                >
                  Available from
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="wd-available-from"
                  defaultValue={assignment.availableDate || "2025-05-20"}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="wd-available-until"
                  className="form-label fw-bold"
                >
                  Until
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="wd-available-until"
                  defaultValue={assignment.availableUntil || "2025-05-28"}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableUntil: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end gap-2">
        <Link
          href={`/Courses/${cid}/Assignments`}
          className="btn btn-secondary btn-lg"
        >
          Cancel
        </Link>
        <Link
          href={`/Courses/${cid}/Assignments`}
          onClick={handleSave}
          className="btn btn-danger btn-lg"
        >
          Save
        </Link>
      </div>
    </div>
  );
}

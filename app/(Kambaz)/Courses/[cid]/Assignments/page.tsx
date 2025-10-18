"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a: any) => a.course === cid);

  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <br />
      <div>
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroupItem className="wd-assignment-group p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-2 fs-3" />
              ASSIGNMENTS
              <AssignmentControlButtons />
            </div>

            <ListGroup className="wd-assignments-list rounded-0">
              {assignments.map((assignment: any) => (
                <ListGroupItem
                  key={assignment._id}
                  className="wd-assignment-list-item p-3 ps-1 left-green-only"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  <GiNotebook className="me-2 fs-3 text-success" />

                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-dark text-decoration-none fw-bold"
                  >
                    {assignment.title}
                  </Link>

                  <AssignmentItemControlButtons />

                  <div className="text-muted small mt-1 ms-5 ps-2">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <strong>Due</strong> TBD | 100pts
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}

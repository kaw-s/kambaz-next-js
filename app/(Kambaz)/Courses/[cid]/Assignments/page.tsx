import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";
import { GiNotebook } from "react-icons/gi";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Assignments() {
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
              <ListGroupItem className="wd-assignment-list-item p-3 ps-1  left-green-only">
                <BsGripVertical className="me-2 fs-3" />
                <GiNotebook className="me-2 fs-3 text-success" />
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-dark text-decoration-none fw-bold"
                >
                  A1 - ENV + HTML
                </Link>
                <AssignmentItemControlButtons />
                <div className="text-muted small mt-1 ms-5 ps-2">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not Available until</strong> May 6 at 12:00am |{" "}
                  <strong>Due</strong> May 13 at 11:59pm | 100pts
                </div>
              </ListGroupItem>
              <ListGroupItem className="wd-assignment-list-item p-3 ps-1  left-green-only">
                <BsGripVertical className="me-2 fs-3" />
                <GiNotebook className="me-2 fs-3 text-success" />
                <Link
                  href="/Courses/1234/Assignments/124"
                  className="wd-assignment-link text-dark text-decoration-none fw-bold"
                >
                  A2 - CSS + BOOTSTRAP
                </Link>
                <AssignmentItemControlButtons />
                <div className="text-muted small mt-1 ms-5 ps-2">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not Available until</strong> May 13 at 12:00am |{" "}
                  <strong>Due</strong> May 20 at 11:59pm | 100pts
                </div>
              </ListGroupItem>
              <ListGroupItem className="wd-assignment-list-item p-3 ps-1  left-green-only">
                <BsGripVertical className="me-2 fs-3" />
                <GiNotebook className="me-2 fs-3 text-success" />
                <Link
                  href="/Courses/1234/Assignments/125"
                  className="wd-assignment-link text-dark text-decoration-none fw-bold"
                >
                  A3 - JAVASCRIPT + REACT
                </Link>
                <AssignmentItemControlButtons />
                <div className="text-muted small mt-1 ms-5 ps-2">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not Available until</strong> May 20 at 12:00am |{" "}
                  <strong>Due</strong> May 27 at 11:59pm | 100pts
                </div>
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}

"use client";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { deleteAssignment } from "./reducer";
import { Button, Modal } from "react-bootstrap";

export default function Assignments() {
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDialog(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete._id));
    }
    setShowDialog(false);
    setAssignmentToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDialog(false);
  };
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

                  <AssignmentItemControlButtons
                    onDelete={() => handleDeleteClick(assignment)}
                  />

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
      <Modal show={showDialog} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove the assignment "
          {assignmentToDelete?.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

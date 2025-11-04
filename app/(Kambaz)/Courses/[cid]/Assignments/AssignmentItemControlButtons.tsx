import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

export default function AssignmentItemControlButtons({
  onDelete,
}: {
  onDelete: () => void;
}) {
  return (
    <div className="float-end">
      <FaTrash
        className="me-2 text-danger"
        style={{ cursor: "pointer" }}
        onClick={onDelete}
      />
      <FaCheckCircle className="text-success me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="badge rounded-pill bg-secondary border fw-normal border-dark text-dark me-2 px-2 py-1">
        40% of Total
      </span>
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

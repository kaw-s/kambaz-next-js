import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { TbCancel } from "react-icons/tb";

import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="text-nowrap d-flex justify-content-end"
    >
      <Button
        variant="secondary"
        size="lg"
        className="me-2"
        id="wd-collapse-all"
      >
        Collapse All
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="me-2"
        id="wd-view-progress"
      >
        View Progress
      </Button>
      <Dropdown className="me-2">
        <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </DropdownItem>
          <DropdownItem id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </DropdownItem>
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            <TbCancel /> Unpublish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            <TbCancel />Unpublish modules only
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button variant="danger" size="lg" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FormControl } from "react-bootstrap";

import * as client from "../../../Account/client";

export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    onClose();
  };

  const [user, setUser] = useState<any>({});
  const fetchUser = async () => {
    if (!uid) return;
    const u = await client.findUserById(uid);
    setUser(u || {});
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [role, setRole] = useState("");

  const startEditing = () => {
    setName(`${user.firstName ?? ""} ${user.lastName ?? ""}`.trim());
    setEmail(user.email ?? "");
    setRole(user.role ?? "");
    setEditing(true);
  };

  const saveUser = async () => {
    let fullName = name.trim();
    if (!fullName) {
      fullName = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();
    }
    const [firstName, lastName] = fullName.split(" ");

    const emailToSave = email.trim() || user.email || "";

    const roleToSave = role || user.role;

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email: emailToSave,
      role: roleToSave,
    };

    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose();
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={onClose}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editing && (
          <FaPencil
            onClick={startEditing}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}

        {!editing && (
          <div className="wd-name" onClick={startEditing}>
            {user.firstName} {user.lastName}
          </div>
        )}

        {user && editing && (
          <FormControl
            className="w-50 wd-edit-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>
      <b>Roles:</b>
      {!editing && <span className="wd-roles"> {user.role} </span>}
      {editing && (
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-select w-50 wd-edit-role"
        >
          <option value="STUDENT">Student</option>
          <option value="TA">Assistant</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrator</option>
        </select>
      )}
      <br />
      <b>Login ID:</b> <span className="wd-login-id"> {user.loginId} </span>{" "}
      <br />
      <b>Section:</b> <span className="wd-section"> {user.section} </span>{" "}
      <br />
      <b>Total Activity:</b>{" "}
      <span className="wd-total-activity">{user.totalActivity}</span>
      <br />
      <b>Email:</b> {!editing && <span className="wd-email">{user.email}</span>}
      {editing && (
        <FormControl
          type="email"
          className="wd-edit-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              saveUser();
            }
          }}
        />
      )}
      <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
      <button
        onClick={onClose}
        className="btn btn-secondary float-end me-2 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}

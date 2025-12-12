"use client";
import PeopleTable from "./Table/page";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as client from "../../client";

export default function People() {
  const { cid } = useParams();
  const [courseUsers, setCourseUsers] = useState<any[]>([]);

  const fetchCourseUsers = async () => {
    if (!cid) return;

    try {
      const enrolledUsers = await client.findUsersForCourse(cid as string);
      setCourseUsers(enrolledUsers);
    } catch (error) {
      console.error("Error fetching course users:", error);
    }
  };

  useEffect(() => {
    fetchCourseUsers();
  }, [cid]);

  return (
    <div id="wd-people">
      <PeopleTable users={courseUsers} fetchUsers={fetchCourseUsers} />
    </div>
  );
}

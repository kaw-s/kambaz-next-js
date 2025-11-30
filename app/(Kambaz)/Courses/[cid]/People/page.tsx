"use client";
import PeopleTable from "./Table/page";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as client from "../../client";

export default function People() {
  const params = useParams();
  const cid = params?.courseId as string;
  const [courseUsers, setCourseUsers] = useState<any[]>([]);

  const fetchCourseUsers = async () => {
    if (!cid) return;
    const displayUsers = courseUsers.length > 0 ? courseUsers : 0;
    console.log(displayUsers);

    try {
      const enrolledUsers = await client.findUsersForCourse(cid);
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  console.log("this is the pathname:", pathname);
  // Example output: /Courses/1234/Piazza

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        // Build link href if people make People/Table instead
        const href =
          link === "People"
            ? `/Courses/${cid}/People/Table`
            : `/Courses/${cid}/${link}`;

        // get active link
        const isActive =
          pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={link}
            href={href}
            className={`list-group-item border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link} 
          </Link>
        );
      })}
    </div>
  );
}

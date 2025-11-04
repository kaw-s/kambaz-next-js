"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  imageName: string;
  description: string;
}
export default function CoursesLayout({ children }: { children: ReactNode }) {
  const params = useParams();
  const cid = params.cid as string;
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: Course) => course._id === cid);

  const [showNavigation, setShowNavigation] = useState(true);

  const toggleNavigation = () => {
    console.log("clicking");
    setShowNavigation(!showNavigation);
  };

  return (
    <div id="wd-courses">
      <h2>
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={toggleNavigation}
          style={{ cursor: "pointer" }}
        />
        {course?.name}
      </h2>

      <hr />
      <div className="d-flex">
        {showNavigation && (
          <div>
            <CourseNavigation cid={cid} />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}

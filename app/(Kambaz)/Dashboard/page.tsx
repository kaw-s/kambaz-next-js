"use client";

import { useDispatch, useSelector } from "react-redux";
import * as client from "../Courses/client";

import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
} from "../Courses/reducer";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FormControl,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import { enrollments as dbEnrollments } from "../Database";

import {
  enrollCourse,
  unenrollCourse,
  toggleShowAllCourses,
  setEnrollments, // ← Make sure this is here
} from "./reducer";
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  imageName: string;
  description: string;
}

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showAllCourses } = useSelector(
    (state: any) => state.enrollmentsReducer
  );

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(
      setCourses(courses.filter((course: Course) => course._id !== courseId))
    );
  };

  const dispatch = useDispatch();
  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    imageName: "reactjs.jpg",
    description: "New Description",
  });
  useEffect(() => {
    if (currentUser) {
      const savedEnrollments = localStorage.getItem("enrollments");
      if (savedEnrollments) {
        dispatch(setEnrollments(JSON.parse(savedEnrollments)));
      } else {
        // Initialize from database enrollments only once
        const initialEnrollments = dbEnrollments.map((e: any) => ({
          userId: e.user,
          courseId: e.course,
        }));
        dispatch(setEnrollments(initialEnrollments));
      }
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    if (currentUser && enrollments.length > 0) {
      localStorage.setItem("enrollments", JSON.stringify(enrollments));
    }
  }, [enrollments, currentUser]);

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (e: any) => e.userId === currentUser._id && e.courseId === courseId
    );
  };

  const handleEnroll = (courseId: string) => {
    if (currentUser) {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };

  const handleUnenroll = (courseId: string) => {
    if (currentUser) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    }
  };
  const displayedCourses = () => {
    if (!currentUser) return courses;
    if (currentUser.role === "FACULTY") return courses;
    if (showAllCourses) return courses;
    return courses.filter((c: Course) => isEnrolled(c._id));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c: Course) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <FormControl
            value={course.name}
            className="mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            placeholder="Course Description"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      <hr />
      <div>
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        <hr />
        {isStudent && (
          <Button
            onClick={() => dispatch(toggleShowAllCourses())}
            variant="primary"
          >
            {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
          </Button>
        )}
      </div>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses().map((course: Course) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    if (!isFaculty && !isEnrolled(course._id)) {
                      e.preventDefault();
                      alert(
                        "You must be enrolled in this course to access it."
                      );
                    }
                  }}
                >
                  <CardImg
                    src={`/images/${course.imageName || "neu.png"}`}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary"> Go </Button>
                    {isFaculty && (
                      <>
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            onDeleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </Button>
                        <Button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </Button>
                      </>
                    )}
                    {isStudent && (
                      <>
                        {isEnrolled(course._id) ? (
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              handleUnenroll(course._id);
                            }}
                            variant="danger"
                            className="float-end"
                          >
                            Unenroll
                          </Button>
                        ) : (
                          showAllCourses && (
                            <Button
                              onClick={(event) => {
                                event.preventDefault();
                                handleEnroll(course._id);
                              }}
                              variant="success"
                              className="float-end"
                            >
                              Enroll
                            </Button>
                          )
                        )}
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

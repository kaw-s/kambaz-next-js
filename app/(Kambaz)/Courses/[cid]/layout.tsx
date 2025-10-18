import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

import { Row, Col } from "react-bootstrap";
import { courses } from "../../Database";
import Breadcrumb from "./BreadCrumb";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        {/** add the bread crumb instead of the course heading */}
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <Row>
        <Col
          className="d-none d-lg-block position-fixed"
          style={{ width: "200px" }}
        >
          {/** pass the cid to the courseNavigation*/}
          <CourseNavigation cid={cid} />
        </Col>

        <Col xs={12} className="pt-4">
          <div className="d-none d-lg-block" style={{ marginLeft: "200px" }}>
            {children}
          </div>
          <div className="d-lg-none">{children}</div>
        </Col>
      </Row>
    </div>
  );
}

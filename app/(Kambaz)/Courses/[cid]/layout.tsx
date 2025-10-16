import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course {cid}
      </h2>
      <hr />
      <Row>
        
        <Col
          className="d-none d-lg-block position-fixed"
          style={{ width: "200px" }}
        >
          <CourseNavigation />
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

"use client";
import React, { useState } from "react";
import { FormControl, Row, Col } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div>
      <h3>Path Parameters</h3>

      <FormControl
        className="mb-2"
        id="wd-path-parameter-a"
        type="number"
        defaultValue={a}
        onChange={(e) => setA(e.target.value)}
      />
      <FormControl
        className="mb-3"
        id="wd-path-parameter-b"
        type="number"
        defaultValue={b}
        onChange={(e) => setB(e.target.value)}
      />

      <Row className="mb-2">
        <Col>
          <a
            className="btn btn-primary w-100"
            id="wd-path-parameter-add"
            href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
          >
            Add {a} + {b}
          </a>
        </Col>
        <Col>
          <a
            className="btn btn-danger w-100"
            id="wd-path-parameter-subtract"
            href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
          >
            Sub {a} - {b}
          </a>
        </Col>
      </Row>

      <Row>
        <Col>
          <a
            className="btn btn-primary w-100"
            id="wd-path-parameter-multiply"
            href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
          >
            Mul {a} * {b}
          </a>
        </Col>
        <Col>
          <a
            className="btn btn-danger w-100"
            id="wd-path-parameter-divide"
            href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
          >
            Div {a} / {b}
          </a>
        </Col>
      </Row>

      <hr />
    </div>
  );
}

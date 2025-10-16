export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online Submit a link to the landing page of"
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            id="wd-points"
            defaultValue={100}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-3 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-9">
          <select className="form-select" id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="OPTION2">OPTION 2</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-3 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-9">
          <select className="form-select" id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            <option value="LETTER GRADE">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-3 col-form-label text-end"
        >
          Submission Type
        </label>
        <div className="col-sm-9">
          <div className="border p-3 rounded">
            <select className="form-select mb-3" id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="OPTION2">Option 2</option>
            </select>

            <div className="fw-bold mb-2">Online Entry Options</div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-text-entry"
                name="check-entry-type"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-website-url"
                name="check-entry-type"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-media-recordings"
                name="check-entry-type"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-student-annotation"
                name="check-entry-type"
              />
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-file-upload"
                name="check-entry-type"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-sm-3 col-form-label text-end">Assign</label>
        <div className="col-sm-9">
          <div className="border p-3 rounded">
            <label htmlFor="wd-assign-to" className="form-label fw-bold">
              Assign to
            </label>
            <div
              className="form-control mb-3 d-flex flex-wrap gap-2 align-items-center"
              style={{ minHeight: "38px" }}
            >
              <span
                className="badge d-flex align-items-center gap-1 py-2 px-2"
                style={{ backgroundColor: "#e9ecef", color: "#000" }}
              >
                Everyone
                <button
                  type="button"
                  className="btn-close"
                  style={{ fontSize: "0.6rem" }}
                  aria-label="Remove"
                />
              </span>
            </div>

            <label htmlFor="wd-due-date" className="form-label fw-bold">
              Due
            </label>
            <input
              type="date"
              className="form-control mb-3"
              id="wd-due-date"
              defaultValue="2025-05-24"
            />

            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <label
                  htmlFor="wd-available-from"
                  className="form-label fw-bold"
                >
                  Available from
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="wd-available-from"
                  defaultValue="2025-05-24"
                />
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="wd-available-until"
                  className="form-label fw-bold"
                >
                  Until
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="wd-available-until"
                  defaultValue="2025-05-28"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-secondary btn-lg">Cancel</button>
        <button className="btn btn-danger btn-lg">Save</button>
      </div>
    </div>
  );
}

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>

      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue={
          "The assignment is available online Submit a link to the landing page of"
        }
      ></textarea>
      <br />
      <table>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS"> Assignments</option>
              <option value="OPTION2"> OPTION 2</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as"> Display Grade as </label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE"> Percentage</option>
              <option value="LETTER GRADE"> Letter Grade</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-wd-submission-type"> Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE"> Online</option>
              <option value="OPTION2"> Option 2</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <label> Online Text Entry Options </label>
          <br />
          <input type="checkbox" name="check-entry-type" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br />
          <input type="checkbox" name="check-entry-type" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
          <br />
          <input
            type="checkbox"
            name="check-entry-type"
            id="wd-media-recordings"
          />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
          <br />
          <input
            type="checkbox"
            name="check-entry-type"
            id="wd-student-annotation"
          />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
          <br />
          <input type="checkbox" name="check-entry-type" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
        </tr>
        <br />
        <tr>
          <td></td>

          <label htmlFor="wd-assign-to"> Assign To </label>
          <br />
          <input placeholder="Everyone..." id="wd-assign-to" />
        </tr>
        <br />
        <tr>
          <td></td>
          <label htmlFor="wd-due-date">Due </label>
          <br />
          <input type="date" value="2025-05-24" id="wd-due-date" />
          <br />
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-available-from"> Available from</label>
            <br />
            <input
              type="date"
              defaultValue="2025-05-24"
              id="wd-available-from"
            />
          </td>
          <td>
            <label htmlFor="wd-available-until"> Available Until</label>
            <br />
            <input
              type="date"
              defaultValue="2025-05-28"
              id="wd-available-until"
            />
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button>Save</button>
        <button>Cancel</button>
      </div>

      <br />
    </div>
  );
}

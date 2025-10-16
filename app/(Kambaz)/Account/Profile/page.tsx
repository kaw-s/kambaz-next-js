import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl
        defaultValue="alice"
        placeholder="username"
        className="mb-2"
      />
      <FormControl
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password mb-2"
      />
      <FormControl
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2"
      />

      <FormControl
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2"
      />
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" className="mb-2"/>

      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" className="mb-2"/>

      <FormControl defaultValue="FACULTY" id="wd-role" className="mb-2"/>

      <Link href="Signin"> Sign out </Link>
    </div>
  );
}

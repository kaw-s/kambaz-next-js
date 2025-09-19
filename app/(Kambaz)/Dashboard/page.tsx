import Link from "next/link";
import Image from "next/image";
/**
 * 1.4.3
 * create a dashboard displaying
 * at least 7 courses and images for each
 */
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.png"
              width={200}
              height={150}
              alt="React"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4032" className="wd-dashboard-course-link">
            <Image src="/images/sql.png" width={200} height={150} alt="MySql" />
            <div>
              <h5> CS4032 Databases </h5>
              <p className="wd-dashboard-course-title">
                Buiding Relational Models in SQL
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5115" className="wd-dashboard-course-link">
            <Image
              src="/images/uiuix.jpg"
              width={200}
              height={150}
              alt="UI/UX Design"
            />
            <div>
              <h5> CS5115 UI/UX </h5>
              <p className="wd-dashboard-course-title">
                User Interface and Experience Design
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4324" className="wd-dashboard-course-link">
            <Image
              src="/images/algo.png"
              width={200}
              height={150}
              alt="Algorithms"
            />
            <div>
              <h5> CS4324 Algo </h5>
              <p className="wd-dashboard-course-title">
                Algorithms and Data Structures
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2929" className="wd-dashboard-course-link">
            <Image
              src="/images/phil.jpeg"
              width={200}
              height={150}
              alt="Tech and Human Values"
            />
            <div>
              <h5> CS2929 Philosophy </h5>
              <p className="wd-dashboard-course-title">
                Technology and Human Values
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1101" className="wd-dashboard-course-link">
            <Image
              src="/images/os.png"
              width={200}
              height={150}
              alt="Operating Systems"
            />
            <div>
              <h5> CS1101 Operating Systems </h5>
              <p className="wd-dashboard-course-title">Operating Systems</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2067" className="wd-dashboard-course-link">
            <Image
              src="/images/discrete.jpg"
              width={200}
              height={150}
              alt="Discrete Math"
            />
            <div>
              <h5> CS2067 Math </h5>
              <p className="wd-dashboard-course-title">Discrete Mathematics</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

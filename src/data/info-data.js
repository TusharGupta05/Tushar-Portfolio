import iiitBhopal from "../assets/iiitBhopal.png";
import splitWise from "../assets/splitWise.jpeg";
import tekionLogo from "../assets/tekion-logo.png";

const infoData = {
  experience: [
    {
      id: 0,
      logoAlt: "Tekion",
      logoSrc: tekionLogo,
      name: "Tekion",
      Url: "https://tekion.com/",
      role: "ASE Intern (Frontend)",
      textColor: "#05deba",
      duration: "Jan 2023 – Present",
      aboutRolePara1:
        "• Experienced in contributing to the development of FormBuilder, a dynamic application featuring a user-friendly canvas interface enabling the intuitive dragging and dropping of container elements, including rows.",
      aboutRolePara2:
        "• Implemented robust support for comprehensive customization of form field styles (including padding, margin, label, placeholder, and more), events ,(such as onChange and onBlur), and validations (such as non-empty, numeric values, and more). Users now have unparalleled control overthe appearance and behavior of theirform fields.",
      aboutRolePara3:
        "• Attained expertise in udecode’s Rich Text Editor Framework, enabling me to tackle critical challenges head-on. Resolved complex issues with the serialization and deserialization of the content.",
      technologies: "HTML, CSS, Javascript, React.js, Redux",
    },
  ],
  education: [
    {
      id: 1,
      logoAlt: "IIITBhopal",
      logoSrc: iiitBhopal,
      name: "IIIT Bhopal",
      Url: "https://iiitbhopal.ac.in/",
      role: "Bachelors of Technology",
      textColor: "#288DFB",
      duration: "August 2019 – July 2023",
      aboutRolePara1: "B.Tech. in Information Technology – 9.07 CGPA",
      courses: [
        "Data Structures, ",
        "Design and Analysis of Algorithms, ",
        "Computer Networks, ",
        "Operating System, ",
        "Database Management Systems, ",
        "Software Engineering, ",
        "Machine Learning, ",
        "Natural Language Processing, and ",
        "Real Time Systems.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      logoAlt: "Splitwise",
      logoSrc: splitWise,
      name: "Splitwise",
      Url: "https://splitwise-three.vercel.app",
      technologies: "React.js, Redux, Vercel",
      about1: (
        <>
          <strong>Expense Management:</strong> Implemented an intuitive
          interface that enables users to add expenses and split them among
          friends. Supported split types include equal and percentage
        </>
      ),
      about2: (
        <>
          <strong>Category System:</strong> Developed a flexible category system
          where users can select predefined categories from a dropdown menu or
          create new ones by typing the name. Leveraged React Editable Select
          for seamless category management
        </>
      ),
      about3: (
        <>
          <strong>Expense Summary:</strong> Provided users with a clear summary
          of their financial obligations, showcasing the amounts owed to and by
          them. This feature helps users keep track of their debts effortlessly.
        </>
      ),
      about4: (
        <>
          <strong>Analytics and Filters:</strong> Enabled users to analyze their
          monthly expenses in two ways: all expenses analytics and categorical
          analytics. Implemented filters such as date range and category
          selection to refine the analytics results, offering deeperinsights
          into spending patterns.
        </>
      ),
    },
  ],
  skills: [
    {
      id: 1,
      title: "Programming",
      value: ["C++", "Dart", "Java", "Python"],
    },
    {
      id: 2,
      title: "Development",
      value: [
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "Redux",
        "Flutter",
        "Django Rest Framework",
        "GraphQL",
      ],
    },
    {
      id: 3,
      title: "Databases",
      value: ["Firebase", "MySQL"],
    },
    {
      id: 4,
      title: "Version Control",
      value: ["Git", "GitHub", "GitLab", "BitBucket"],
    },
  ],
  achievements: [
    {
      id: 1,
      description: (
        <>
          •{" "}
          <strong>
            AIR{" "}
            <i>
              68<sup>th</sup>
            </i>
          </strong>{" "}
          and{" "}
          <strong>
            Global rank{" "}
            <i>
              179<sup>th</sup>
            </i>
          </strong>{" "}
          in Google Kickstart Round F 2022 out of 9k+ participants globally.
          <br />
          <br />•{" "}
          <strong>
            AIR{" "}
            <i>
              54<sup>th</sup>
            </i>
          </strong>{" "}
          and{" "}
          <strong>
            Global rank{" "}
            <i>
              603<sup>rd</sup>
            </i>
          </strong>{" "}
          in Facebook Hackercup Round 2 2022 out of 27k+ participants globally.
          <br />
          <br />•{" "}
          <strong>
            Global rank{" "}
            <i>
              61<sup>st</sup>
            </i>
          </strong>{" "}
          in Codegoda 2022 and{" "}
          <strong>
            Global rank{" "}
            <i>
              98<sup>th</sup>
            </i>
          </strong>{" "}
          in 2023 out of 50k+ participants globally.
          <br />
          <br />• Rated among{" "}
          <strong>
            top <i>1000</i>
          </strong>{" "}
          Indians on codeforces(0.05%) and codechef(0.005%), and in{" "}
          <strong>
            top <i>1%</i>
          </strong>{" "}
          globally on Leetcode.
          <br />
          <br />•{" "}
          <strong>
            <i>
              10<sup>th</sup>
            </i>
          </strong>{" "}
          rank in ISTE MANIT Codathon'22 out of 4k+ participants.
          <br />
          <br />•{" "}
          <strong>
            <i>
              62<sup>nd</sup>
            </i>
          </strong>{" "}
          in Kanpur-21 and{" "}
          <strong>
            <i>
              73<sup>rd</sup>
            </i>
          </strong>{" "}
          rank in Gwalior-22 regionals of ACM ICPC.
        </>
      ),
    },
  ],
};

export default infoData;

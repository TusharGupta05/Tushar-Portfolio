import styles from "./Info.module.css";
import Cards from "../Cards/Cards";
import infoData from "../../data/info-data";
import Skills from "../Skills/Skills";
import { useEffect, useRef } from "react";

const Info = ({ changeActive }) => {
  const { experience, education, projects, skills, achievements } = infoData;

  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const achievementsRef = useRef(null);

  useEffect(() => {
    let observer = null;
    if (
      experienceRef.current &&
      educationRef.current &&
      projectsRef.current &&
      skillsRef.current &&
      achievementsRef.current &&
      resumeRef.current
    ) {
      const options = {
        threshold: 0.2,
      };
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            changeActive(entry.target.id);
          }
        });
      }, options);
      observer.observe(experienceRef.current);
      observer.observe(educationRef.current);
      observer.observe(projectsRef.current);
      observer.observe(skillsRef.current);
      observer.observe(achievementsRef.current);
      observer.observe(resumeRef.current);
    }

    return () => observer?.disconnect();
  }, [
    experienceRef,
    educationRef,
    projectsRef,
    skillsRef,
    achievementsRef,
    resumeRef,
    changeActive,
  ]);
  return (
    <section className={styles.info}>
      <div id="experience" ref={experienceRef}>
        <h1 className={styles.infoSectionHeading}>
          Experience
          <div className={styles.infoSectionLine}></div>
        </h1>
        <Cards data={experience} />
      </div>
      <div id="education" ref={educationRef}>
        <h1 className={styles.infoSectionHeading}>
          Education
          <div className={styles.infoSectionLine}></div>
        </h1>
        <Cards data={education} />
      </div>
      <div id="projects" ref={projectsRef}>
        <h1 className={styles.infoSectionHeading}>
          Projects
          <div className={styles.infoSectionLine}></div>
        </h1>
        <Cards data={projects} isProjects />
      </div>
      <div id="skills" ref={skillsRef}>
        <h1 className={styles.infoSectionHeading}>
          Skills
          <div className={styles.infoSectionLine}></div>
        </h1>
        <Skills data={skills} />
      </div>
      <div id="achievements" ref={achievementsRef}>
        <h1 className={styles.infoSectionHeading}>
          Achievements
          <div className={styles.infoSectionLine}></div>
        </h1>
        <Cards data={achievements} isAchievements />
      </div>
      <div id="resume" ref={resumeRef}>
        <h1 className={styles.infoSectionHeading}>
          Resume
          <div className={styles.infoSectionLine}></div>
        </h1>
        <a
          className={styles.infoSectionDownloadBtn}
          href="https://drive.google.com/file/d/1aN_WVPtYIQegMrGrw9ry10UvYgvQWqKz/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Info;

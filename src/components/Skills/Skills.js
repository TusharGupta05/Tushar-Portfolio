import styles from "./Skills.module.css";
import Skill from "../Skill/Skill";

const Skills = ({ data }) => {
  return (
    <div className={styles.skills}>
      {data.map((category) => (
        <div className={styles.skillsCategory} key={category.id}>
          <p className={styles.skillsCategoryHeading}>{category.title}</p>
          <div className={styles.skillsCategoryValues}>
            {category.value.map((skill, i) => (
              <Skill dataItem={skill} key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

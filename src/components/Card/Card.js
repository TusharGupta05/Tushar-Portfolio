import styles from "./Card.module.css";
const Card = ({ dataItem, isProjects, isAchievements }) => {
  if (isAchievements) {
    const { description } = dataItem;
    return (
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  if (isProjects) {
    const {
      logoSrc,
      logoAlt,
      name,
      Url,
      technologies,
      about1,
      about2,
      about3,
      about4,
    } = dataItem;
    return (
      <div className={styles.card}>
        <img className={styles.cardImage} src={logoSrc} alt={logoAlt} />
        <p className={styles.cardHeading}>
          <a
            href={Url}
            className={styles.cardName}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </p>
        <p className={styles.cardTechnologies}>{technologies}</p>
        <div className={styles.cardBody}>
          {about1 && <p>{about1}</p>}
          {about2 && <p>{about2}</p>}
          {about3 && <p>{about3}</p>}
          {about4 && <p>{about4}</p>}
        </div>
      </div>
    );
  }

  const {
    logoSrc,
    logoAlt,
    role,
    name,
    Url,
    duration,
    aboutRolePara1,
    aboutRolePara2,
    aboutRolePara3,
    technologies,
    textColor,
    courses,
  } = dataItem;
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={logoSrc} alt={logoAlt} />
      <p className={styles.cardHeading}>
        <span className={styles.cardRole}>{role}</span>
        <span>{" @ "}</span>
        <a
          href={Url}
          className={styles.cardName}
          style={{ color: textColor }}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </p>
      <p className={styles.cardDuration}>{duration}</p>
      {technologies && (
        <p className={styles.cardTechnologies}>{technologies}</p>
      )}
      <div className={styles.cardBody}>
        {aboutRolePara1 && <p>{aboutRolePara1}</p>}
        {aboutRolePara2 && <p>{aboutRolePara2}</p>}
        {aboutRolePara3 && <p>{aboutRolePara3}</p>}
        {courses && (
          <p>
            <strong>Courese: </strong>
            {courses.map((course) => (
              <span key={course}>{course}</span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;

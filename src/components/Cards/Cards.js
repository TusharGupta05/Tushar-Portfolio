import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ data, isProjects, isAchievements }) => {
  return (
    <div className={styles.cards}>
      {data.map((d) => (
        <Card
          dataItem={d}
          key={d.id}
          isProjects={isProjects}
          isAchievements={isAchievements}
        />
      ))}
    </div>
  );
};

export default Cards;

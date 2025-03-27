import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Digitalclock.png';
import freshBurger from '../../assets/Color changer game.png';
import hipsster from '../../assets/Numberguessing game.png';
import fitLift from '../../assets/Keycodechecker.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/AnitaKanwar8890/Digital-Clock"
          h3="Digital Clock"

        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/AnitaKanwar8890/Color-Changing-Game"
          h3="Color Changing"

        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/AnitaKanwar8890/Number-Guessing-Game"
          h3="Number Guessing Game"

        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/AnitaKanwar8890/Event-KeyCode-Checker"
          h3="Event KeyCode Checker"

        />
      </div>
    </section>
  );
}

export default Projects;

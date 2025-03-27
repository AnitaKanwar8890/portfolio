import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useState } from 'react';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import TogetherAI from '../../together-ai/TogetherAI';
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const [question, setQuestion] = useState('');

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={`${styles.hero} ${styles.circularImage}`}
          alt="Profile picture of Anita Kanwar"
        />
      </div>
      <div className={styles.info}>
        <h1>Anita Kanwar</h1>
        <h2>Frontend Developer</h2>
        <p className={styles.description}>Write a brief intro here</p>

        <span>
          <a href="https://x.com/AnitaRa59049282" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/AnitaKanwar8890" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/anita-kanwar-0a5904271/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

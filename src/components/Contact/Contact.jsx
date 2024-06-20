


import { getImageUrl } from "../../utlis"
import styles from "./Contact.module.css"
export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
        <div className={styles.text}>Contact
        <p>Feel Free to react out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon"></img>
                <a href="mailto:rohansahu30238@gmail.com">Gmail</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="email icon"></img>
                <a href="https://www.linkedin.com/in/rohan-sahu-13a785218/">Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="email icon"></img>
                <a href="https://github.com/Prograam">GitHub</a>
            </li>
        </ul>
        </footer>
    )
}


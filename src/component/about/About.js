import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id={"about"}>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ME} alt={"About Image"} />
                    </div>
                </div>
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={'about__card'}>
                            <FaAward className={"about__icon"} />
                            <h5>Experience</h5>
                            <small>1+ Years Personal experience</small>
                        </article>
                        <article className={'about__card'}>
                            <FiUsers className={"about__icon"} />
                            <h5>Clients</h5>
                            <small>No Clients</small>
                        </article>
                        <article className={'about__card'}>
                            <VscFolderLibrary className={"about__icon"} />
                            <h5>Projects</h5>
                            <small>30+ Projects</small>
                        </article>
                    </div>
                    <p>
                        Building projects my clients love have always been my passion.
                        Being in the web development industry for over 3 years and serving
                        more than 70 happy client worldwide, I'm always motivated to do more!
                    </p>
                    <p>
                        Hi, My name is Sayem Aslam from kurla, Mumbai. I'm a full-stack web developer
                        with a bachelore degree in Bsc Maths. My top priority to get your business online the
                        right way, giving you industry-standard design and all the functionality you need
                        to operate smoothly online. Get in touch today with the details of your project let's
                        get started! Check out my resume below!
                    </p>
                    <a href={"contact"} className={"btn btn-primary"}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
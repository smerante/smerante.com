import classNames from 'classnames';
import { FunctionComponent, useState } from 'react';
import "./CV.scss"
const CVComponent: FunctionComponent<{}> = (props) => {

    const [toggleCards, setToggleCards] = useState([true, false, false, false, false]);
    const toggleCard = (i: number) => {
        toggleCards.forEach(
            (val: boolean, index: number) => {
                setToggleCards((toggleCardsArr) => { toggleCardsArr[index] = false; return [...toggleCardsArr]; });
                if (index === i)
                    setToggleCards((toggleCardsArr) => { toggleCardsArr[index] = true; return [...toggleCardsArr]; });
            }
        );
    }
    return (
        <>
            <h1 className="sam-title">Sam Merante's Curriculum Vitae</h1>
            <div className="card mb-3">
                <div id="cvHeader" className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <button className={classNames('nav-link', { 'active': toggleCards[0] })} onClick={() => toggleCard(0)}>Developer Experience</button>
                        </li>
                        <li className="nav-item">
                            <button className={classNames('nav-link', { 'active': toggleCards[1] })} onClick={() => toggleCard(1)}>Employment
                                Experience</button>
                        </li>
                        <li className="nav-item">
                            <button className={classNames('nav-link', { 'active': toggleCards[2] })} onClick={() => toggleCard(2)}>Education</button>
                        </li>
                        <li className="nav-item">
                            <button className={classNames('nav-link', { 'active': toggleCards[3] })} onClick={() => toggleCard(3)}>Interests</button>
                        </li>
                        <li className="nav-item">
                            <button className={classNames('nav-link', { 'active': toggleCards[4] })} onClick={() => toggleCard(4)}>Honours &amp;
                                Achievements</button>
                        </li >
                    </ul >
                </div >
                <div className={classNames('card-body', { 'hidden': !toggleCards[0] })}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-title">Languages</li>
                        <li className="list-group-item">AngularJS/Angular</li>
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">JavaScript/HTML5</li>
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">Java for Android</li>
                        <li className="list-group-item">C#</li>
                        <li className="list-group-item">C++</li>
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">C</li>
                        <li className="list-group-item">Eiffel</li>
                        <li className="list-group-item">Prolog</li>
                    </ul>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-title">Tech Stack</li>
                        <li className="list-group-item">Front end: JS, AngularJs, Angular </li>
                        <li className="list-group-item">Back end: Java EE, C#</li>
                        <li className="list-group-item">Databases: SQL, Oracle</li>
                        <li className="list-group-item">Machine Learning, AI, Natural Language Processing (NLP)</li>
                        <li className="list-group-item">BDD (Behavior Driven Development), TDD (Test Driven Development) in Java and Angular
                        </li>
                        <li className="list-group-item">Source Control: GIT (Bitbucket, Github)</li>
                        <li className="list-group-item">Project Management: Confluence, JIRA</li>
                        <li className="list-group-item">Agile methodologies</li>
                        <li className="list-group-item">Dev Ops: Jenkins </li>
                        <li className="list-group-item">Source Control: GIT (Bitbucket, Github)</li>
                    </ul>
                </div>

                <div className={classNames('card-body', { 'hidden': !toggleCards[1] })}>
                    <div className="row">
                        <div className="col-sm-6 list-bold">
                            CAPCO - Software Consultant
                        </div>
                        <div className="col-sm-6 text-right">
                            June 2018 - Present
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Worked at a NA bank creating a design system built for front end with angular.</li>
                        <li className="list-group-item">Created
                            reusable and scalable software including common components to be used throughout the online space</li>
                    </ul>
                    <div className="row" style={{ marginTop: '32px' }}>
                        <div className="col-sm-6 list-bold">
                            Toronto-Dominion Bank (TD Canada Trust)
                        </div>
                        <div className="col-sm-6 text-right">
                            May 2017 - June 2018
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Worked on a large project involving many different teams on web applications, in Java
                            HTML, and Java script
                            using
                            the angular framework to provide the best user experience.</li>
                        <li className="list-group-item">Created and won second place in a hackathon challenge for TD where I programmed an
                            application from scratch
                            in
                            Java Spring Boot and Angular 6, to innovate the onboarding process.</li>
                        <li className="list-group-item">Developed project and time management skills by working with the agile framework in a
                            fast paced
                            environment
                            meeting critical timeframes given.</li>
                        <li className="list-group-item">Led a group of software developers when given the task of delivering defects and
                            error fixes in a timely
                            manner
                            while ensuring that deadlines were met while producing quality code.</li>
                        <li className="list-group-item">Experienced in delivering quality assurance; wrote Gherkin feature files and
                            behaviour driven development
                            (BDD)
                            test cases using the selenium framework in Java.</li>
                        <li className="list-group-item">Took initiative by training and mentoring new developers; running weekly check in
                            meetings to discuss
                            achievements, events, and news within the technology community.</li>
                        <li className="list-group-item">Managed deployments of the applications to servers using Jenkins to ensure builds are
                            meeting test,
                            security, and
                            automation script completion in preparation for production.</li>
                    </ul>
                    <div className="row" style={{ marginTop: '32px' }}>
                        <div className="col-sm-6 list-bold">
                            Real Programming for Kids
                        </div>
                        <div className="col-sm-6 text-right">
                            April 2015 – June 2017
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Managed a class of 4 students from grades 1 – 12 to develop computer science skills
                            which led them be critical
                            problem solvers and analytical thinkers.</li>
                        <li className="list-group-item">Demonstrated leadership skills, and teamwork skills, when faced with problems such as
                            fixing bugs. I supported my
                            team members by communicating my ideas with them to find errors, fix them, and inform management to prevent for
                            future errors.</li>
                        <li className="list-group-item">Developed project and time management skills by working with the agile framework in a
                            fast paced
                            environment
                            meeting critical timeframes given.</li>
                        <li className="list-group-item">Innovated the way classes are taught by allowing students to create their own games
                            from scratch rather than
                            following a set plan, which allowed for more development of programming skills in addition to facilitating
                            creativity.</li>
                        <li className="list-group-item">Showed initiative by creating a program for my team that automates the process of
                            creating report cards, which
                            significantly reduced the time required to complete them</li>
                    </ul>
                </div >
                <div className={classNames('card-body', { 'hidden': !toggleCards[2] })}>
                    <div className="row">
                        <div className="list-title">
                            E-Health Project, Software Design Course
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-bold">
                            Final Grade: B
                        </li>
                        <li className="list-group-item">
                            Designed an E-Health System to keep track of Doctors, Patients, Medicine, and Prescriptions with a Design by
                            Contract approach using Eiffel. Implemented the system using maps and set data structures along with sorting
                            algorithms. As a result the system prevented dangerous prescription/interactions and ensured safe practices in
                            hospitals.
                        </li>
                    </ul>
                    <div style={{ marginTop: "32px" }} className="row">
                        <div className="list-title">
                            Data Structure Designs
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-bold">
                            Final Grade: A
                        </li>
                        <li className="list-group-item">
                            Implemented a variety of data structure techniques to solve real world problems such as a Priority Queue to
                            organize patients waiting in an emergency triage.
                        </li>
                    </ul>

                    <div style={{ marginTop: "32px" }} className="row">
                        <div className="list-title">
                            Asymptotic Analysis
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-bold">
                            Final Grade: B+
                        </li>
                        <li className="list-group-item">
                            Analyzed problems based on time/space complexity and determined which data structures will be best suited to
                            solve the problem most efficiently. Problems involved the use of programming techniques such as dynamic
                            programming, greedy algorithms, and memoization.
                        </li>
                    </ul>

                    <div style={{ marginTop: "32px" }} className="row">
                        <div className="list-title">
                            Software Courses
                        </div>
                    </div>
                    <ul className="list-group list-group">
                        <li className="list-group-item">
                            Software Tools
                        </li>
                        <li className="list-group-item">
                            AI and Logic Programming
                        </li>
                        <li className="list-group-item">
                            Computer Organization
                        </li>
                        <li className="list-group-item">
                            Computer Security
                        </li>
                        <li className="list-group-item">
                            Computers, Information and Society
                        </li>
                        <li className="list-group-item">
                            Design and Analysis of Algorithms
                        </li>
                        <li className="list-group-item">
                            Differential Calculus with Applications
                        </li>
                        <li className="list-group-item">
                            Digital Media
                        </li>
                        <li className="list-group-item">
                            Discrete Math
                        </li>
                        <li className="list-group-item">
                            Fundamentals of Data Structures
                        </li>
                        <li className="list-group-item">
                            Integral Calculus with Applications
                        </li>
                        <li className="list-group-item">
                            Mathematical Logic for Computer Science
                        </li>
                        <li className="list-group-item">
                            Net-centric Computing
                        </li>
                        <li className="list-group-item">
                            Operating System Fundamentals
                        </li>
                        <li className="list-group-item">
                            Probability
                        </li>
                        <li className="list-group-item">
                            Professional Practice in Computing
                        </li>
                        <li className="list-group-item">
                            Research Directions in Computing
                        </li>
                        <li className="list-group-item">
                            Software Design
                        </li>
                        <li className="list-group-item">
                            Software Tools
                        </li>
                        <li className="list-group-item">
                            Theory of Computation
                        </li>
                    </ul>
                </div >
                <div className={classNames('card-body', { 'hidden': !toggleCards[3] })}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Self improvement</li>
                        <li className="list-group-item">Web development &amp; design</li>
                        <li className="list-group-item">Learning new frameworks and programming languages</li>
                        <li className="list-group-item">Reading books</li>
                        <li className="list-group-item">Playing and creating video games</li>
                        <li className="list-group-item">Keeping active and healthy</li>
                    </ul>
                    <div style={{ marginTop: '32px' }} className="row">
                        <div className="col-sm-6 list-bold">
                            Application Development - Android
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            I enjoy developing mobile games and apps for the android platform, check out my
                            <a className="card-link" target="_blank" rel="noreferrer"
                                href="https://play.google.com/store/apps/developer?id=0110+Studios&hl=en">Google
                                Play developer account.</a>
                        </li>
                    </ul>
                    <div style={{ marginTop: '32px' }} className="row">
                        <div className="col-sm-6 list-bold">
                            Volunteer Experience
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Helped mentor youth at risk by teaching social and school skills.
                        </li>
                    </ul>
                </div >
                <div className={classNames('card-body', { 'hidden': !toggleCards[4] })}>
                    <div className="row">
                        <div className="col-sm-6 list-bold">
                            Ontario Scholar
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Awarded to students who have obtained an average of 80% or above in any six Grade 12 University Courses.
                        </li>
                    </ul>

                    <div style={{ marginTop: "16px" }} className="row">
                        <div className="col-sm-6 list-bold">
                            York University Entrance Scholarship
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Awarded to students with an average of 90% or above upon graduating from Grade 12.
                        </li>
                    </ul>

                    <div style={{ marginTop: "16px" }} className="row">
                        <div className="col-sm-6 list-bold">
                            Spring Boot Expert
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Award upon completion of spring boot <a className="card-link" target="_blank" rel="noreferrer"
                                href="https://www.udemy.com/certificate/UC-03Z43GPF/">Udemy
                                course</a>.
                        </li>
                    </ul>

                    <div style={{ marginTop: "16px" }} className="row">
                        <div className="col-sm-6 list-bold">
                            React
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Award upon completion of React Basic <a className="card-link" target="_blank" rel="noreferrer"
                                href="https://www.udemy.com/certificate/UC-CROAYZBT/">Udemy
                                course</a>.
                        </li>
                    </ul>
                </div >
            </div >
        </ >)
}

export default CVComponent
import React from "react";
import {
    Container,
    Row,
} from "reactstrap";
import ProjectBlock from "./ProjectBlock";
import CampusMapImg from "../../assets/img/campus-map.png";
import AdaptedToyInventoryImg from "../../assets/img/adapted-toy-inventory.png";
import LinkedIntListPlaygroundImg from "../../assets/img/linked-list-playground.png";
import WordMasterImg from  "../../assets/img/word-master.png";
import CSSLintImg from "../../assets/img/css-lint.png";
import KickstarterImg from "../../assets/img/kickstarter.png";
import SynthesisImg from "../../assets/img/synthesis.png";

function Projects() {
    return (
        <>
            <div className="section" id="projects">
                <Container>
                    <h2 className="title">Projects</h2>
                    <Row>
                        <ProjectBlock
                            name={"Campus Map"}
                            imageLink={CampusMapImg}
                            alt="Thumbnail for Campus Map"
                            live={false}
                            code={false}
                            description={"A React web application for finding the shortest path between two campus " +
                            "buildings in the University of Washington using Dijkstra's algorithm. Backend incorporates " +
                            "a custom Graph data structure and a Spark Java server."}
                        />
                        <ProjectBlock
                            name={"LinkedIntList Playground"}
                            link="https://courses.cs.washington.edu/courses/cse154/cp/19sp/cp2/smash-ball/index.html"
                            imageLink={LinkedIntListPlaygroundImg}
                            alt="Thumbnail for LinkedIntList Playground"
                            live={true}
                            code={true}
                            codeLink="https://github.com/LuckyQXW/cse154-linked-list-playground"
                            description={"An interactive playground for visualizing simple link lists. Built with HTML, " +
                            "CSS, JavaScript, also incorporates input validation in HTML and CSS animation for a smooth " +
                            "experience."}
                        />
                        <ProjectBlock
                            name={"Word Master Game"}
                            link="https://courses.cs.washington.edu/courses/cse154/cp/19sp/cp3/kavik/index.html"
                            imageLink={WordMasterImg}
                            alt="Thumbnail for Word Master Game"
                            live={true}
                            code={true}
                            codeLink="https://github.com/LuckyQXW/cse154-word-master-game"
                            description={"A local two-player game for players to compete utilizing their vocabulary. Built with HTML, " +
                            "CSS, JavaScript, also validates player responses using Merriam-Webster's Collegiate® Dictionary with Audio API. " +
                            "Includes timers to add more challenge by incorporating JavaScript timing events."}
                        />
                    </Row>
                    <Row>
                        <ProjectBlock
                            name={"CSS Linter"}
                            link="https://github.com/LuckyQXW/cse154-css-linter"
                            imageLink={CSSLintImg}
                            alt="Thumbnail for CSS Linter"
                            live={false}
                            code={true}
                            codeLink="https://github.com/LuckyQXW/cse154-css-linter"
                            description={"A CSS linter validating style for the CSS file according to the CSE 154 Style Guide. " +
                            "Frontend was built with HTML, CSS, JavaScript, which sends data to the PHP backend and validates the " +
                            "given CSS rules using Regex. Also displays line number and possible issues. "}
                        />
                        <ProjectBlock
                            name={"Adapted Toy Inventory"}
                            link="https://students.washington.edu/wenq97/adapted-toy-inventory/adapted-toy-inventory.html"
                            imageLink={AdaptedToyInventoryImg}
                            alt="Thumbnail for Adapted Toy Inventory"
                            live={true}
                            code={true}
                            codeLink="https://github.com/LuckyQXW/adapted-toy-inventory"
                            description={"A prototype site for the HuskyADAPT club to display their available adapted toys " +
                            "in stock. Utilized Bootstrap for frontend styling, PHP for processing filter or search " +
                            "requests and reconstructing filter queries for SQL database in the backend. Also avoids potential" +
                            " malicious SQL injection by using PDO prepare statements."}
                        />
                    </Row>
                    <Row>
                        <ProjectBlock
                            name={"Kickstarter Data Analysis"}
                            link="https://github.com/LuckyQXW/cse163-kickstarter-analysis"
                            imageLink={KickstarterImg}
                            alt="Thumbnail for Kickstarter Data Analysis"
                            live={false}
                            code={true}
                            codeLink="https://github.com/LuckyQXW/cse163-kickstarter-analysis"
                            description={"A data analysis project using Kickstarter data on Kaggle, investigates the trends among " +
                            "projects on Kickstarter platform and backer behavior using Pandas and scikit-learn decision tree " +
                            "models, then generates data visualization using Matplotlib and Seaborn."}
                        />
                        <ProjectBlock
                            name={"Synthesis"}
                            link="https://synthesis.autodesk.com/overview.html"
                            imageLink={SynthesisImg}
                            alt="Thumbnail for Synthesis"
                            live={true}
                            code={true}
                            codeLink="https://github.com/Autodesk/synthesis"
                            description={"A simulator for robotics teams participating in the First Robotics Competition to " +
                            "design, test and experiment with their robot models. I was a part of the 2017 Synthesis Team and " +
                            "developed the robot camera and sensor features for the simulator."}
                        />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Projects;
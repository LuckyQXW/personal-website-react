import React from "react";
import {
    Container,
    Row,
    Col, Button
} from "reactstrap";
import {Link} from "react-router-dom";
import ProjectBlock from "./ProjectBlock";
import AdaptedToyInventoryImg from "../../assets/img/adapted-toy-inventory.png";
import LinkedIntListPlaygroundImg from "../../assets/img/linked-list-playground.png";
import WordMasterImg from  "../../assets/img/word-master.png";
import CSSLintImg from "../../assets/img/css-lint.png";
import KickstarterImg from "../../assets/img/kickstarter.png";
import SynthesisImg from "../../assets/img/synthesis.png";

function Projects() {
    return (
        <>
            <div className="section">
                <Container>
                    <h2 className="title">Projects</h2>
                    <Row>
                        <ProjectBlock
                            link="https://courses.cs.washington.edu/courses/cse154/cp/19sp/cp2/smash-ball/index.html"
                            imageLink={LinkedIntListPlaygroundImg}
                            alt="Thumbnail for LinkedIntList Playground"
                            live={true}
                            codeLink="https://github.com/LuckyQXW/cse154-linked-list-playground"
                        />
                        <ProjectBlock
                            link="https://courses.cs.washington.edu/courses/cse154/cp/19sp/cp3/kavik/index.html"
                            imageLink={WordMasterImg}
                            alt="Thumbnail for Word Master Game"
                            live={true}
                            codeLink="https://github.com/LuckyQXW/cse154-word-master-game"
                        />
                    </Row>
                    <Row>
                        <ProjectBlock
                            link="https://github.com/LuckyQXW/cse154-css-linter"
                            imageLink={CSSLintImg}
                            alt="Thumbnail for CSS Linter"
                            live={false}
                            codeLink="https://github.com/LuckyQXW/cse154-css-linter"
                        />
                        <ProjectBlock
                            link="https://students.washington.edu/wenq97/adapted-toy-inventory/adapted-toy-inventory.html"
                            imageLink={AdaptedToyInventoryImg}
                            alt="Thumbnail for Adapted Toy Inventory"
                            live={true}
                            codeLink="https://github.com/LuckyQXW/adapted-toy-inventory"
                        />
                    </Row>
                    <Row>
                        <ProjectBlock
                            link="https://github.com/LuckyQXW/cse163-kickstarter-analysis"
                            imageLink={KickstarterImg}
                            alt="Thumbnail for Kickstarter Data Analysis"
                            live={false}
                            codeLink="https://github.com/LuckyQXW/cse163-kickstarter-analysis"
                        />
                        <ProjectBlock
                            link="https://synthesis.autodesk.com/overview.html"
                            imageLink={SynthesisImg}
                            alt="Thumbnail for Synthesis"
                            live={true}
                            codeLink="https://github.com/Autodesk/synthesis"
                        />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Projects;
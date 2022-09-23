import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

function Bio() {
    return (
        <>
            <div className="section section-tabs" id="bio">
                <Container>
                    <h2 className="title">About Me</h2>
                    <Row className="">
                        <Col className="w-75">
                            <div>
                                <p>
                                    Currently a Combined BS/MS Candidate studying Computer Science at the University of Washington-Seattle, 
                                    I enjoy building things and have involved in a wide range of projects including web development,
                                    data analysis, physical computing, robotics, game development, mobile interface design and app development.
                                    I like exploring the intersection of design and engineering, and human-computer
                                    interaction is an area that always fascinates me.
                                </p>
                                <p>
                                    Besides coding, I am also passionate about CS education and have been a math tutor since
                                    my freshman year of college for the University of Washington STARS Program, a engineering
                                    enrichment program designed for students from underserved backgrounds in engineering. Now
                                    I focus on being a teaching assistant for the intro programming courses, including CSE 143
                                    Computer Programming II with Java as the programming language. You are welcome to read more about my
                                    first quarter experience as a
                                    TA <a href="https://medium.com/@wenqiu97/first-quarter-recap-as-a-new-cse-14x-ta-50f948d6b5b4" target="_blank" rel="noopener noreferrer">here</a>.
                                    Currently, I am one of the head teaching assistants for CSE 163 Intermediate Data Programming,
                                    which teaches tools and libraries for data processing in Python. During the past spring break,
                                    I redesigned the whole interface of the course website for better usability and accessibility,
                                    and documented my process and learnings in <a href="https://medium.com/@wenqiu97/redesigning-the-course-website-in-one-week-day-0-7179ba2f2430" target="_blank" rel="noopener noreferrer">a blog post series</a>.
                                </p>
                                <p>
                                    In my free time, I like to do digital sketches for video game characters. It is my go-to way of
                                    experiencing a sense of flow and sharpening my observation skills. You can check out most of my
                                    artwork and past design pieces in
                                    my <a href="https://wenqiu.carbonmade.com/" target="_blank" rel="noopener noreferrer">digital art portfolio</a>.
                                    I also enjoy crocheting and creating my own sweaters and hats with colorful yarn 🧶.
                                </p>
                            </div>
                        </Col>
                        <Col md="3">
                            <div>
                                <img
                                    alt="profile"
                                    className="rounded-circle"
                                    src={require("assets/img/profile-pic.jpg")}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Bio;

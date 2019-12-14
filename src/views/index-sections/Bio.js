import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

function Bio() {
    return (
        <>
            <div className="section">
                <Container>
                    <h2 className="title">About Me</h2>
                    <Row className="">

                        <Col className="w-75">
                            <div>
                                <p>
                                    Currently a junior studying Computer Science at the University of Washington-Seattle, I enjoy
                                    building things and have experienced involved in a wide range of projects including robotics,
                                    game development in Unity, mobile interface design and iOS app development, web development,
                                    and data analysis. I like exploring the intersection of design and engineering, and human-computer
                                    interaction is an area that always fascinates me.
                                </p>
                                <p>
                                    Besides coding, I am also passionate about CS education and has been involved in math tutoring
                                    for the University of Washington STARS Program, a engineering enrichment program designed for
                                    students from underserved backgrounds in engineering, since my freshman year of college. Now
                                    I focus on being a teaching assistant for the intro to programming courses, including CSE 143
                                    Computer Programming II with Java as the programming language, and you can read more about my
                                    first quarter experience as a TA <a href="https://medium.com/@wenqiu97">here</a>. In the upcoming
                                    quarters I am also going to be a teaching assistant for CSE 163 Intermediate Data Programming
                                    which teaches tools and libraries for data processing in Python.
                                </p>
                                <p>
                                    In my free time, I like to do digital sketches for video game characters. It is my go-to way of
                                    experiencing a sense of flow and sharpening my observation skills. You can check out most of my
                                    artwork and past design pieces in my <a href="https://wenqiu.carbonmade.com/">digital art portfolio</a>.
                                </p>
                            </div>
                        </Col>
                        <Col md="3">
                            <div>
                                <img
                                    alt="profile picture"
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
import React from "react";
import {
    Container,
    Row
} from "reactstrap";
import Timeline from "./Timeline";

function Experience() {
    return (
        <>
            <div className="section section-tabs" id="experience">
                <Container>
                    <h2 className="title">Experience</h2>
                    <Row>
                        <Timeline />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Experience;

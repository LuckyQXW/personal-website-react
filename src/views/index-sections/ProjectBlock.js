import React from "react";
import {
    Container,
    Row,
    Col, Button
} from "reactstrap";
import {Link} from "react-router-dom";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import HoverPage from "./HoveredImage";

const ProjectBlock = (props) => {
    return (
        <>
            <div className="col">
                <a href={props.link} target="_blank">
                    <img
                        alt={props.alt}
                        className="img-raised"
                        src={props.imageLink}
                    />
                </a>
                <Row className="justify-content-around mt-3 mb-4">
                    <Button
                        className="btn-round"
                        color="default"
                        outline
                        href={props.link}
                        target="_blank"
                        style={{display: props.live ? 'block' : 'none'}}
                    >
                        View Website
                    </Button>
                    <Button
                        className="btn-round"
                        color="default"
                        outline
                        href={props.codeLink}
                        target="_blank"
                    >
                        View Source Code
                    </Button>
                </Row>
            </div>
        </>
    )
}

export default ProjectBlock;
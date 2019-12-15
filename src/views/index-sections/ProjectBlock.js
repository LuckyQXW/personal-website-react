import React from "react";
import {
    Button,
    FormGroup,
    Container,
    Modal,
    ModalBody,
    Row,
    Col,
    UncontrolledTooltip,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover
} from "reactstrap";
import {Link} from "react-router-dom";

const ProjectBlock = (props) => {
    const [modal, setModal] = React.useState(false);

    return (
        <>
            <div className="col col-sm-12 col-md-6 col-lg-6">
                <h4>{props.name}</h4>
                <a href={props.link} target="_blank">
                    <img
                        alt={props.alt}
                        className="img-raised"
                        src={props.imageLink}
                    />
                </a>
                <Row className="justify-content-around mt-3 mb-2">
                    <Button
                        className="btn-round"
                        color="default"
                        outline
                        href={props.link}
                        target="_blank"
                        style={{display: props.live ? 'block' : 'none'}}
                    >
                        Website
                    </Button>
                    <Button
                        className="btn-round"
                        color="default"
                        outline
                        onClick={() => setModal(true)}
                    >
                        Description
                    </Button>
                    <Button
                        className="btn-round"
                        color="default"
                        outline
                        href={props.codeLink}
                        target="_blank"
                    >
                        Source Code
                    </Button>
                    <Modal isOpen={modal} toggle={() => setModal(false)} style={{top: "30%"}}>
                        <div className="modal-header justify-content-center">
                            <button
                                className="close"
                                type="button"
                                onClick={() => setModal(false)}
                            >
                                <i className="now-ui-icons ui-1_simple-remove"/>
                            </button>
                            <h4 className="title">{props.name}</h4>
                        </div>
                        <ModalBody>
                            <p>
                                {props.description}
                            </p>
                        </ModalBody>
                    </Modal>
                </Row>
            </div>
        </>
    )
}

export default ProjectBlock;
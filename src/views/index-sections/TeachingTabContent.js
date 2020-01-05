import React from "react";

// reactstrap components
import {
    TabPane,
} from "reactstrap";

// core components

const TeachingTabContent = (props) => {
    return (
        <>
            <TabPane tabId={props.id}>
                <h3>Course Description</h3>
                <p>{props.description}</p>
                <h3>Responsibilities</h3>
                <p>{props.responsibilities}</p>
                <h3>Quarter</h3>
                <p>{props.duration}</p>
            </TabPane>
        </>
    );
};

export default TeachingTabContent;

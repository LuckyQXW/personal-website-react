/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function HomeHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div className="page-header">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/homebg.jpg") + ")"
                    }}
                    ref={pageHeader}
                />
                <Container>
                    <div className="content-center brand" style={{top: '50%'}}>
                        <img
                            alt="..."
                            className="n-logo"
                            src={require("assets/img/wq-logo.png")}
                        />
                        <h1 className="h1-seo">Hello</h1>
                        <h1 className="h1-seo">I am Wen Qiu</h1>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default HomeHeader;

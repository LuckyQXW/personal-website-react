import React from "react";
// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";
import Resume from '../../assets/documents/QIU_WEN.pdf'

function HomeNavBar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });

    function scrollToTop(e) {
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} color="white" expand="lg">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
                            onClick={e => scrollToTop(e)}
                        >
                            Home
                        </NavbarBrand>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar" />
                            <span className="navbar-toggler-bar middle-bar" />
                            <span className="navbar-toggler-bar bottom-bar" />
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#bio">
                                    About Me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#projects">
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#teaching">
                                    Teaching
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#artwork">
                                    Artwork
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://medium.com/@wenqiu97" target="_blank" rel="noopener noreferrer">
                                    Blog
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={Resume} target="_blank" rel="noopener noreferrer">
                                    Resume
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://github.com/LuckyQXW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github mr-2"/>
                                    Github
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.linkedin.com/in/wen-qiu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin mr-2"/>
                                    LinkedIn
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default HomeNavBar;

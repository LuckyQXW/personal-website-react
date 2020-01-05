import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  Container,
  Row,
  Col
} from "reactstrap";
import TeachingTabContent from "./TeachingTabContent";

// core components
const items = [
  {
    id: "CSE 163 TA",
    icon: "tech_laptop",
    description: "Intermediate data programming. Topics include writing programs that manipulate different types of " +
        "data; leveraging the growing ecosystem of tools and libraries for data programming; writing programs that " +
        "are both efficient and elegant; and writing medium-scale programs (100 to 200 lines).",
    responsibilities: "Plan and lead an one-hour section every week with a partner covering practice problems on " +
        "lecture topics. Review and give feedback for pre-lecture readings. " +
        "Help students with course concept and final project on data analysis during office hours.",
    duration: "Winter 2020 (current)"
  },
  {
    id: "CSE 143 TA",
    icon: "tech_laptop",
    description: "Second course in the programming intro series at UW. Involves concepts of data abstraction and " +
        "encapsulation including stacks, queues, linked lists, binary trees, recursion, instruction to complexity " +
        "and use of predefined collection classes.",
    responsibilities: "Planned and led two one-hour section every week covering practice problems on lecture topics. " +
        "Graded programming homework assignments with feedback on code quality and style. Helped students with course " +
        "concept and homework assignments in computer labs two hours a week.",
    duration: "Fall 2019"
  },
  {
    id: "CSE 190Z TA",
    icon: "education_agenda-bookmark",
    description: "Companion workshop for CSE 143 offered to second-year students in the University of Washington STARS " +
        "Program. Aims to complement course material as well as enhance problem-solving skills in Computer Science.",
    responsibilities: "Helped plan weekly workshops and led one workshop on object inheritance in Java. Had one-on-one " +
        "half-hour check-in meetings with 4 students every week and answered questions on course concepts and extra " +
        "practices assigned in workshop. Graded weekly quizzes and practice exams. ",
    duration: "Spring 2019"
  },
  {
    id: "STARS Math Mentor",
    icon: "education_hat",
    description: "Companion workshop for first-year students in the University of Washington STARS Program. Covers " +
        "various topics in pre-calculus. Helps students build a strong mathematical foundation for college-level " +
        "calculus and enhances their math problem-solving skills.",
    responsibilities: "Helped plan weekly workshops and led multiple workshops with a combined length of 7.5 hours each " +
        "week. Provided personalized tutoring contents for students from different backgrounds.",
    duration: "Fall 2018"
  },
  ];
function Tabs() {
  const [iconPills, setIconPills] = React.useState("CSE 163 TA");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <h2 className="title">Teaching</h2>
            <Card>
              <Row>
                <Col md="4" xl="3">
                  <CardHeader>
                    <Nav className="justify-content-center" tabs vertical>
                      {items.map(item => {
                        return (
                            <NavItem key={item.id + " tab"}>
                              <NavLink
                                  className={iconPills === item.id ? "active" : ""}
                                  href="#pablo"
                                  onClick={e => {
                                    e.preventDefault();
                                    setIconPills(item.id);
                                  }}
                              >
                                <i className={"now-ui-icons " + item.icon}/>
                                {item.id}
                              </NavLink>
                            </NavItem>
                            );
                          }
                        )
                      }
                    </Nav>
                  </CardHeader>
                </Col>
                <Col>
                  <CardBody>
                    <TabContent
                      className="text-left"
                      activeTab={iconPills}
                    >
                      {items.map(item => {
                            return (
                                <TeachingTabContent key={item.id + " content"}
                                    id={item.id}
                                    description={item.description}
                                    responsibilities={item.responsibilities}
                                    duration={item.duration}
                                />
                            );
                          }
                      )
                      }
                    </TabContent>
                  </CardBody>
                </Col>
              </Row>
            </Card>
        </Container>
      </div>
    </>
  );
}

export default Tabs;

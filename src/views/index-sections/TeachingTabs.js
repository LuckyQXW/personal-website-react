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
    id: "CSE 163 Summer Instructor",
    description: "Intermediate data programming. Topics include writing programs that manipulate different types of " +
        "data; leveraging the growing ecosystem of tools and libraries for data programming; writing programs that " +
        "are both efficient and elegant; and writing medium-scale programs (100 to 200 lines).",
    responsibilities: "Led three class sessions each week guiding student through lecture reading practices in flipped classroom style. " +
      "Managed a team of nine TAs and led staff meetings and head TA planning meetings. " +
      "Developed optional small creative projects for students interested in exploring more content outside class assignments. ",
    duration: "Summer 2022"
  },
  {
    id: "CSE 160 TA",
    description: "Introduction to computer programming. Assignments solve real data manipulation tasks from science, engineering, business, and the humanities. " +
        "Concepts of computational thinking, problem-solving, data analysis, Python programming, control and data abstraction, file processing, and data visualization. " +
        "Intended for students without prior programming experience.",
    responsibilities: "Managed grading duties as the grading lead and ensure feedback quality and consistency, introduced minor improvements on the grading process. " +
      "Developed autograder scripts on Gradescope for midterm and final exams. " +
      "Planned and led an one-hour section every week covering practice problems on lecture topics. ",
    duration: "Fall 2021"
  },
  {
    id: "CSE 163 TA",
    description: "Intermediate data programming. Topics include writing programs that manipulate different types of " +
        "data; leveraging the growing ecosystem of tools and libraries for data programming; writing programs that " +
        "are both efficient and elegant; and writing medium-scale programs (100 to 200 lines).",
    responsibilities: "Redesigned the course website for better usability and accessibility. " +
      "As the grading head TA, managed grading duties, assigned grading tasks to TAs and ensured feedback quality and consistency. " +
      "Contributed to the transition from traditional lecture to flipped classroom and mastery grading format. " +
      "Planned and led an one-hour section every week with a partner covering practice problems on lecture topics. " +
      "Edited, reviewed and gave feedback for pre-lecture readings. " +
      "Helped students with course concept and final project on data analysis during office hours.",
    duration: "Winter 2020- Summer 2020, Winter 2021- Spring 2021, Winter- Spring 2022"
  },
  {
    id: "CSE 143 TA",
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
    description: "Companion workshop for CSE 143 offered to second-year students in the University of Washington STARS " +
        "Program. Aims to complement course material as well as enhance problem-solving skills in Computer Science.",
    responsibilities: "Helped plan weekly workshops and led one workshop on object inheritance in Java. Had one-on-one " +
        "half-hour check-in meetings with 4 students every week and answered questions on course concepts and extra " +
        "practices assigned in workshop. Graded weekly quizzes and practice exams. ",
    duration: "Spring 2019"
  },
  {
    id: "STARS Math Mentor",
    description: "Companion workshop for first-year students in the University of Washington STARS Program. Covers " +
        "various topics in pre-calculus. Helps students build a strong mathematical foundation for college-level " +
        "calculus and enhances their math problem-solving skills.",
    responsibilities: "Helped plan weekly workshops and led multiple workshops with a combined length of 7.5 hours each " +
        "week. Provided personalized tutoring contents for students from different backgrounds.",
    duration: "Fall 2018"
  },
  ];
function TeachingTabs() {
  const [iconPills, setIconPills] = React.useState("CSE 163 TA");
  return (
    <>
      <div className="section" id="teaching">
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

export default TeachingTabs;

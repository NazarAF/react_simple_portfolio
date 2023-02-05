/** @format */

import "../assets/css/Description.css";

// React Cmponent
import { Parallax } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";
import ReactTypingEffect from "react-typing-effect";

// Botstrap Component
import Container from "react-bootstrap/esm/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Description() {
   return (
      <div id="description">
         <Container className="content-container">
            <div className="line-dark">
               <div className="dot-dark">
                  <div className="inner-dot-dark"></div>
               </div>
               <h1 className="title-dark">
                  <Parallax translateY={[-70, 70]} translateX={[-30, 30]} scale={[1.3, 0.5, "easeInQuad"]} speed={10}>
                     <Tilt tiltEnable={false} scale={1.1} transitionSpeed={1000}>
                        <span className="blue">detail</span>(
                        <ReactTypingEffect
                           text={["$nazar);"]}
                           cursorRenderer={cursor => <h1>{cursor}</h1>}
                           speed={100}
                           typingDelay={1000}
                           eraseSpeed={100}
                           eraseDelay={12000}
                           displayTextRenderer={(text, i) => {
                              return (
                                 <h1>
                                    {text.split("").map((char, i) => {
                                       const key = `${i}`;
                                       return (
                                          <span key={key} className={i < 6 ? ["red"] : {}}>
                                             {char}
                                          </span>
                                       );
                                    })}
                                 </h1>
                              );
                           }}
                        />
                     </Tilt>
                  </Parallax>
               </h1>
               <div className="text-dark">
                  <p>
                     <Tilt tiltEnable={false} scale={1.1}>
                        <ReactTypingEffect
                           text={["['Nazar Abdul Fattah', '19 Years', 'Student'],"]}
                           cursorRenderer={cursor => <p>{cursor}</p>}
                           speed={100}
                           typingDelay={1000}
                           eraseSpeed={100}
                           eraseDelay={7350}
                           displayTextRenderer={(text, i) => {
                              return (
                                 <p>
                                    {text.split("").map((char, i) => {
                                       const key = `${i}`;
                                       const selection = [0, 21, 33];
                                       return (
                                          <span key={key} className={selection.includes(i) || i >= 44 ? ["orange"] : ["green"]}>
                                             {char}
                                          </span>
                                       );
                                    })}
                                 </p>
                              );
                           }}
                        />
                     </Tilt>
                     <Tilt tiltEnable={false} scale={1.1}>
                        <ReactTypingEffect
                           text={["['Fullstack', 'Network Administrator']"]}
                           cursorRenderer={cursor => <p>{cursor}</p>}
                           speed={100}
                           typingDelay={1000}
                           eraseSpeed={100}
                           eraseDelay={8000}
                           displayTextRenderer={(text, i) => {
                              return (
                                 <p>
                                    {text.split("").map((char, i) => {
                                       const key = `${i}`;
                                       const selection = [0, 37, 12];
                                       return (
                                          <span key={key} className={selection.includes(i) ? ["orange"] : ["green"]}>
                                             {char}
                                          </span>
                                       );
                                    })}
                                 </p>
                              );
                           }}
                        />
                     </Tilt>
                  </p>
                  <p>
                     <div className="progress-bar-container">
                        <Row>
                           <Col md="12" className="text-center">
                              <p className="purple desc-title">Skills</p>
                           </Col>
                           <Col>
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar red">HTML</p>
                                 <ProgressBar now={90} className="bar" variant="bar-red" />
                              </Tilt>
                           </Col>
                           <Col>
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar blue">CSS</p>
                                 <ProgressBar now={80} className="bar" variant="bar-blue" />
                              </Tilt>
                           </Col>
                           <Col>
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar orange">Javascript</p>
                                 <ProgressBar now={70} className="bar" variant="bar-orange" />
                              </Tilt>
                           </Col>
                           <Col className="mt-3">
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar red">PHP</p>
                                 <ProgressBar now={80} className="bar" variant="bar-red" />
                              </Tilt>
                           </Col>
                           <Col className="mt-3">
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar purple">Sass</p>
                                 <ProgressBar now={70} className="bar" variant="bar-purple" />
                              </Tilt>
                           </Col>
                           <Col className="mt-3">
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar blue">ReactJS</p>
                                 <ProgressBar now={30} className="bar" variant="bar-blue" />
                              </Tilt>
                           </Col>
                           <Col className="mt-3">
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar red">Laravel</p>
                                 <ProgressBar now={75} className="bar" variant="bar-red" />
                              </Tilt>
                           </Col>
                           <Col className="mt-3">
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar blue">Tailwind</p>
                                 <ProgressBar now={65} className="bar" variant="bar-blue" />
                              </Tilt>
                           </Col>
                           <Col className="mt-3">
                              <Tilt tiltEnable={false} scale={1.1}>
                                 <p className="label-bar green">VueJS</p>
                                 <ProgressBar now={30} className="bar" variant="bar-green" />
                              </Tilt>
                           </Col>
                        </Row>
                     </div>
                  </p>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Description;

/** @format */

// CSS Component
import "../assets/css/About.css";

// React Library
import ReactTypingEffect from 'react-typing-effect';
import { Parallax } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";

// Bootstrap Component
import Container from "react-bootstrap/Container";

function About() {
    return (
       <div id="about">
          <Container className="content-container">
             <div className="line-light">
                <div className="dot-light">
                   <div className="inner-dot-light"></div>
                </div>
                <h1 className="title-light">
                   <Parallax translateY={[-70, 70]} translateX={[-30, 30]} scale={[1.3, 0.5, "easeInQuad"]} speed={10}>
                      <Tilt tiltEnable={false} scale={1.1} transitionSpeed={1000}>
                         <span className="blue">about</span>(
                         <ReactTypingEffect
                            text={["'Nazar Abdul Fattah');"]}
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
                                           <span key={key} className={i < 20 ? "green" : {}}>
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
                <div className="text-light">
                   <p>
                      <Tilt tiltEnable={false} scale={1.1}>
                         <span className="purple">I am a </span>
                         <ReactTypingEffect
                            text={["Web Developer", "Network Engineer"]}
                            cursorRenderer={cursor => <p>{cursor}</p>}
                            speed={100}
                            typingDelay={1000}
                            eraseSpeed={100}
                            eraseDelay={2000}
                            displayTextRenderer={(text, i) => {
                               return (
                                  <p>
                                     {text.split("").map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                           <span key={key} className={ "red" }>
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
                </div>
             </div>
          </Container>
       </div>
    );
}

export default About;
/** @format */

// CSS Component
import "../assets/css/Projects.css";

// React Library
import ReactTypingEffect from "react-typing-effect";
import { Parallax } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";

// Bootstrap Component
import Container from "react-bootstrap/Container";

function Projects() {
   return (
      <div id="activities">
         <Container className="content-container">
            <div className="line-light">
               <div className="dot-light">
                  <div className="inner-dot-light"></div>
               </div>
               <h1 className="title-light">
                  <Parallax translateY={[-70, 70]} translateX={[-30, 30]} scale={[1.3, 0.5, "easeInQuad"]} speed={10}>
                     <Tilt tiltEnable={false} scale={1.1} transitionSpeed={1000}>
                        <span style={{ color: "#4e94c6" }}>activities</span>(
                        <ReactTypingEffect
                           text={["myRecord);"]}
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
                                          <span key={key} className={i < 8 ? "orange" : {}}>
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
                        <ReactTypingEffect
                           text={["['IT Support', 1/1/2019, 29/3/2019],"]}
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
                                          <span key={key} className={i > 0 && i <= 12 ? "green" : "orange"}>
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
                           text={["['Freelance', 1/1/2021, datetime.now()]"]}
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
                                          <span key={key} className={i > 0 && i <= 11 ? "green" : i >= 24 && i <= 31 ? "red" : i >= 33 && i <= 37 ? "blue" : "orange"}>
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

export default Projects;

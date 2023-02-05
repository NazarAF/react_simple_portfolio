import "../assets/css/Contact.css";

// React Cmponent
import { Parallax } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";
import ReactTypingEffect from "react-typing-effect";

// export default Contact
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

// Botstrap Component
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Contact() {
   return (
      <div id="contact">
         <Container className="content-container">
            <div className="line-dark">
               <div className="dot-dark">
                  <div className="inner-dot-dark"></div>
               </div>
               <h1 className="title-dark">
                  <Parallax translateY={[-70, 70]} translateX={[30, -30]} scale={[1.3, 0.5, "easeInQuad"]} speed={10}>
                     <Tilt tiltEnable={false} scale={1.1} transitionSpeed={1000}>
                        <span style={{ color: "#4e94c6" }}>myContact</span>(
                        <ReactTypingEffect
                           text={["$mySosmed);"]}
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
                                          <span key={key} className={i <= 8 ? "red" : {}}>
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
                  <Row>
                     <Col md={12} className="sosLink">
                        <Tilt tiltEnable={false} scale={1.1}>
                           <a href="https://github.com/NazarAF" className="dark text-decoration-none" target={"blank"}>
                              <BsGithub /> <span className="orange">NazarAF</span>
                           </a>
                        </Tilt>
                     </Col>
                     <Col md={12} className="sosLink">
                        <Tilt tiltEnable={false} scale={1.1}>
                           <a href="https://id.linkedin.com/in/nazar-abdul-fattah-b1575a1b3" className="dark text-decoration-none" target={"blank"}>
                              <BsLinkedin className="blue" /> <span className="green">Nazar Abdul Fattah</span>
                           </a>
                        </Tilt>
                     </Col>
                     <Col md={12} className="sosLink">
                        <Tilt tiltEnable={false} scale={1.1}>
                           <a href="https://www.instagram.com/nazar.a.f/" className="dark text-decoration-none" target={"blank"}>
                              <BsInstagram className="purple" /> <span className="blue">nazar.a.f</span>
                           </a>
                        </Tilt>
                     </Col>
                  </Row>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Contact;

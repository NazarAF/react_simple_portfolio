/** @format */

import "../assets/css/Sidebar.css";

// React Component
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Icon Component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
   return (
      <div id="sidebar" className="bg-dark sidebar-container text-center">
         <Row className="sidebar">
            <a href="/#about" className="sidebar-content">
               <FontAwesomeIcon icon={faUser} className="icon" />
            </a>
            <a href="/#description" className="sidebar-content">
               <FontAwesomeIcon icon={faAddressCard} className="icon" />
            </a>
            <Col className="sidebar-content">
               <FontAwesomeIcon icon={faBars} className="icon-menu" />
            </Col>
            <a href="#activities" className="sidebar-content">
               <FontAwesomeIcon icon={faDiagramProject} className="icon" />
            </a>
            <a href="#contact" className="sidebar-content">
               <FontAwesomeIcon icon={faMessage} className="icon" />
            </a>  
         </Row>
      </div>
   );
}

export default Sidebar;
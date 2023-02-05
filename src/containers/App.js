import '../assets/css/App.css';

// Component
import Sidebar from './Sidebar.js';
import About from './About.js';
import Description from './Description.js';
import Projects from './Projects.js';
import Contact from "./Contact.js";

function App() {
    return (
       <>
            <Sidebar />
            <div className="content">
                <About />
                <Description />
                <Projects />
                <Contact />
            </div>
       </>
    );
}

export default App;

import './Content.css';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

function Content() {
  return (
    <div className='content-container'>
        <About />
        <Experience />
        <Projects />
    </div>
  )
}

export default Content
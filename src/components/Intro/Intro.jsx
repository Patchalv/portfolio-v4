import './Intro.css';
import { useState, useRef, useEffect } from 'react';

function Intro() {
    const [activeSection, setActiveSection] = useState('about');
    const sections = useRef([]);

    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = null;
    
        sections.current.forEach((section) => {
          const sectionOffsetTop = section.offsetTop -150;
          const sectionHeight = section.offsetHeight;
    
          if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
            newActiveSection = section.id;
          }
        });
    
        setActiveSection(newActiveSection);
    };

    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
  return (
    <div className="intro-container">
        <div className='sticky-wrapper'>
            <h1>Patrick Alvarez Eades</h1>
            <h2>Front-End Engineer</h2>
            <p>I build exceptional and accessible digital <br />experiences for the web.</p> 


            <nav className='navbar'>
                <ul className='navbar-desktop'>
                    <li 
                    className={activeSection === 'about' || '' ? 'active' : 'not-active'}
                    >
                        <a href='#about'>About</a>
                    </li>
                    <li className={activeSection === 'experience' ? 'active' : 'not-active'}><a href='#experience'>Experience</a></li>
                    <li className={activeSection === 'projects' ? 'active' : 'not-active'}><a href='#projects'>Projects</a></li>
                </ul>
            </nav>



            <div className="social-wrapper">
                <ul className='socials'>
                    <li data-toggle="tooltip" title="Github"><a href="https://github.com/Patchalv" className="fa-brands fa-github" ></a></li>
                    <li><a href="https://www.linkedin.com/in/patrickalvarezeades" className="fa-brands fa-linkedin" title="LinkedIn" data-toggle="tooltip" data-placement="top"></a></li>
                    <li><a href="mailto:p.alvarezeades@gmail.com" className="fa-solid fa-envelope" title="Email" data-toggle="tooltip" data-placement="top"></a></li>
                    <li><a href="https://patrickalvarez.com/" className="fa-solid fa-earth-americas" title="Freelance Business" data-toggle="tooltip" data-placement="top"></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Intro;
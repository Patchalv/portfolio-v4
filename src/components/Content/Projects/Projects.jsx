import FeatProjectCard from "./FeaturedProjects/FeatProjectCard";
import './Projects.css'
import { useState } from "react";
import wonders from '../../../images/featuredProjects/7-wonders.jpg';
import jammming from '../../../images/featuredProjects/jammming.jpg';
import vote from '../../../images/featuredProjects/vote-to-play.jpg';
import { Link } from "react-router-dom";


function Projects() {

    const [ projectHover, setProjectHover] = useState(false);

    function onMouseEnter() {
        setProjectHover(true);
    }
    
    function onMouseLeave() {
        setProjectHover(false);
    }

  return (
    
    <section
        data-section
        id="projects"
        className="projects-container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <h2>Projects</h2>
        
        <FeatProjectCard hovered={projectHover} name={'Vote to Play'} description={'Can´t decide what to play tonight? I´ve got you! I developed a game selection application that helps users vote for what game to play. Implemented a drag and drop interface for organizing a personalized game queue, with a backend algorithm calculating the ideal game.'} tags={['Redux', 'React', 'React-Bootstrap', 'DnD Kit']} linkLive={'https://vote-to-play.netlify.app/'} linkGithub={'https://github.com/Patchalv/vote-game-app_v4'} image={vote} /> 

        <FeatProjectCard hovered={projectHover} name={'Jamming Spotify Playlist Creator'} description={'I crafted the Jamming Spotify Playlist Creator using React, interfacing seamlessly with the Spotify API. This dynamic web application enables users to effortlessly search for songs, curate personalized playlists, and seamlessly save them to their individual Spotify accounts.'} tags={['React', 'Spotify API', 'Netlify']} linkLive={'https://jammming-v3.netlify.app/'} linkGithub={'https://github.com/Patchalv/Jammming'} image={jammming} /> 

        <FeatProjectCard hovered={projectHover} name={'7 Wonders Score Card'} description={'This innovative app integrates with the 7 Wonders board game, offering players a tailored scoring experience. Users can effortlessly select the number of players and extensions for their game, with the app dynamically adapting to provide an accurate scoring system for the chosen game configuration.'} tags={['React', 'Redux', 'JavaScript']} linkLive={'https://7wonders-scorecard.netlify.app/'} linkGithub={'https://github.com/Patchalv/7-wonders_scorecard_v3'} image={wonders} /> 

        <Link to='/archive' className='resume-link' href=''>View Full Project Archive</Link><i className="fa-solid fa-arrow-right"></i>   
        
    </section>
  )
}

export default Projects
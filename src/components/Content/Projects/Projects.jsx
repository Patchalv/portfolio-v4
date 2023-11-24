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
        
        <FeatProjectCard hovered={projectHover} name={'Vote to Play'} description={'Can´t decide what to play tonight? I got you! After inputting an initial list of games, everyone gets to drag and drop the games in their order of preference. At the end it will calculate which game you should play.'} tags={['Redux', 'React', 'React-Bootstrap', 'DnD Kit']} linkLive={'https://vote-to-play.netlify.app/'} linkGithub={'https://github.com/Patchalv/vote-game-app_v4'} image={vote} /> 

        <FeatProjectCard hovered={projectHover} name={'Jamming Spotify Playlist Creator'} description={'The Jammming web app leverages the Spotify API to allow usezs to search for songs and create playlists, which cna then be saved into their personal Spotify account.'} tags={['React', 'Spotify API', 'Netlify']} linkLive={'https://jammming-v3.netlify.app/'} linkGithub={'https://github.com/Patchalv/Jammming'} image={jammming} /> 

        <FeatProjectCard hovered={projectHover} name={'7 Wonders Score Card'} description={'Web app that partners with the 7 Wonders board game. The app allows players to select the number of players and extensions they wish to play with and then provides the adequate scoring app for that version of the game.'} tags={['React', 'Redux', 'JavaScript']} linkLive={'https://7wonders-scorecard.netlify.app/'} linkGithub={'https://github.com/Patchalv/7-wonders_scorecard_v3'} image={wonders} /> 

        <Link to='/archive' className='resume-link' href=''>View Full Project Archive</Link><i className="fa-solid fa-arrow-right"></i>   
        
    </section>
  )
}

export default Projects
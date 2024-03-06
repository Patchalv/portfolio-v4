import FeatProjectCard from "./FeaturedProjects/FeatProjectCard";
import './Projects.css'
import { useState } from "react";
import wonders from '../../../images/featuredProjects/7-wonders.jpg';
import jammming from '../../../images/featuredProjects/jammming.jpg';
import vote from '../../../images/featuredProjects/vote-to-play.jpg';
import restaurantFinder from '../../../images/featuredProjects/restaurant-finder.jpg';
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
        <FeatProjectCard hovered={projectHover} name={'Restaurant Finder'} description={'Fullstack PERN app that allows lists resturants and allows users to see information about that resturant as well as reviews. Users can add reviews to resturants and rate them out of 5. Users can also create, update and delete restaurants.'} tags={['PostgresSQL, React, Node.js, Express.js']} linkLive={'https://restaurant-finder-frontend-tan.vercel.app/'} linkGithub={'https://github.com/Patchalv/restaurant-finder'} image={restaurantFinder} /> 

        <FeatProjectCard hovered={projectHover} name={'Vote to Play'} description={'Can´t decide what to play tonight? I´ve got you! I developed a game selection application that helps users vote for what game to play. Implemented a drag and drop interface for organizing a personalized game queue, with a backend algorithm calculating the ideal game.'} tags={['Next JS', 'Redux', 'React', 'Material-UI', 'DnD Kit']} linkLive={'https://vote-game-five.vercel.app/'} linkGithub={'https://github.com/Patchalv/vote-game-app-v6'} image={vote} /> 

        <FeatProjectCard hovered={projectHover} name={'Jamming Spotify Playlist Creator'} description={'I crafted the Jamming Spotify Playlist Creator using React, interfacing seamlessly with the Spotify API. This dynamic web application enables users to effortlessly search for songs, curate personalized playlists, and seamlessly save them to their individual Spotify accounts.'} tags={['React', 'Spotify API', 'Netlify']} linkLive={'https://jammming-v3.netlify.app/'} linkGithub={'https://github.com/Patchalv/Jammming'} image={jammming} /> 

        <Link to='/archive' className='resume-link' href=''>View Full Project Archive</Link><i className="fa-solid fa-arrow-right"></i>   
        
    </section>
  )
}

export default Projects
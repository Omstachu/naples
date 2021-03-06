import React from 'react';
import { useSelector } from 'react-redux';
import "./LandingPage.css"
import { linkedInImage } from '../images/imgSources';
import { githubImage } from '../images/imgSources';

function LandingPage(){

    const user = useSelector(state=>state.session.user)
    console.log(user)

    return (
        <>
        <div className="landing-page-content">
            <div className="landing-page-image-containers">
                <a className="landing-page-href" href="https://www.linkedin.com/in/brandon-simpson-5617ab212/">
                    <img className="landing-page-linkedin-image" src={linkedInImage} alt="linked-in"/>
                </a>

                <div className="landing-page-text-container">
                    <h2 className="landing-page-text">Naples is an application designed to help with taking notes and keeping track of the things that are most important to you.</h2>
                    {user &&
                    <h2 className="landing-page-text-2"> Click on the Pages Tab to get started!</h2>}
                    <h2 className="landing-page-text-3">Made by Brandon Simpson</h2>
                </div>
                <a className="landing-page-href" href="https://github.com/Omstachu/naples">
                    <img className="landing-page-github-image" src={githubImage} alt="github-in"/>
                </a>


            </div>
        </div>
        </>
    )
}

export default LandingPage

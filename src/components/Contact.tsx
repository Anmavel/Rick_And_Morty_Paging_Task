import React from 'react';
import "../css_components/Contact.css"

const GithubProfileCard = () => {
    const username = 'anmavel';
    const githubUrl = `https://github.com/${username}`;

    return (
        <div className="github-card">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <img
                    src={`https://avatars.githubusercontent.com/${username}`}
                    alt="GitHub Avatar"
                />
                <h2>{username}</h2>
            </a>
        </div>
    );
};

export default GithubProfileCard;

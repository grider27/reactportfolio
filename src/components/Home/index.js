import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>Gary Basra</h1>
                    <h4 className="subtitle">Full Stack Engineer</h4>
                <Link to="/projects">
                    <button>Portfolio</button>
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/assets/images/garyb.jpg`}
                    alt="Me"
                />
            </div>
        </div>
    )
}

export default Home;

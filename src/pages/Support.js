import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../css/supportStyles.css";
import { useSupports } from "../api.js";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player"

//npm install react-animated-slider
//npm install react-player

export default function Support(){
    const { loading, supports, error } = useSupports();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return(
    <div className='support'>
        <Slider className="slider-wrapper">
            {supports.map((support, index) => (
                <div className="slider-content">
                    <div className="inner">
                    <Content key={index} {...support} />
                    <ReactPlayer key={index} id='video' url={support.video}/>
                    </div>
                </div>
            ))
            }
        </Slider>
        <NavLink to='/home' className="btn-support">
            Get Started
        </NavLink>
    </div>
)
}

function Content(support) {
    const {title, body, video} = support;

    return (
        <div>
            <h1>{title}</h1>
            <h3>{body}</h3>
        </div>
    );
}
import React, { Component } from 'react';
import "./About.css";
import profilepic from "../assets/profilepic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left"> 
          <div className="centered">
           <img className="profile_image"
           src={profilepic}
           alt="Profile Pic"></img>
          </div>
        </div>
        <div class="split right">
          <div className="centered">
            <div className="name_title"><h1>Amelia</h1></div>
            <div className="brief description">
              <p>
                I am a rising junior at the University of Rochester
                studying Brain & Cognitive Sciences and Linguistics.
              </p>
              <p>
                I enjoy doing puzzles, playing tennis, and ice skating.
                I'm also a huge fan of <em>Jeopardy!</em> and trivia
                in general. (A former <em>Jeopardy!</em> champion
                responded to me on Twitter once!)
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
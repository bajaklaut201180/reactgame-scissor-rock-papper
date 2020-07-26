import React from "react";
import scissors from "../assets/scissor.png";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";

const Player = ({ weapon }) => (
  <React.Fragment>
    <div className="player weapon">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </React.Fragment>
);

export default Player;
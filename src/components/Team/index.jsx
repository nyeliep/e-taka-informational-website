import React from "react";
import TeamItem from "../../Atoms/TeamAtom";
import './style.css';

const teamData = [
  {
    imageUrl: "images/amakove.png",
    name: "Bridgit Amakove",
    role: "Software Developer",
  },
  {
    imageUrl: "images/linet.png",
    name: "Linet Musembi",
    role: "Software Developer",
  },
  {
    imageUrl: "images/nyeliepgiel.png",
    name: "Nyeliep Giel",
    role: "Software Developer",
  },
 
];

const Team = () => {
  return (
    <div className="team-centred-section" id="team">
      <div className="team-section-container">
          <div className="team-header">
            <h1 className="team-title">Team</h1>
          </div>
          <div className="team-container" >
            {teamData.map((member, index) => (
              <TeamItem
                key={index}
                imageUrl={member.imageUrl}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default Team;
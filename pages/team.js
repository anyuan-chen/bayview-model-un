import React from "react";
import Navbar from "../components/navbar";
import TeamMember from "../components/teamMember";
import team from "../data/teamMembers";
export default function Team() {
  const teamMembers = team.map((member) => {
    return (
      <TeamMember
        bio={member.bio}
        img={member.img}
        name={member.name}
      ></TeamMember>
    );
  });
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-40 bg-main flex items-center justify-center">
        <h1 className="text-white font-body text-3xl"> Our Team</h1>
      </div>
      <div>{teamMembers}</div>
    </div>
  );
}
